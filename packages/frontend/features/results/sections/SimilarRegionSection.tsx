'use client';

import React, { useEffect, useState } from 'react';

import { useSameCodeRegions } from '@/api/hooks';
import { useRegion } from '@/api/hooks/useRegion';
import { Divider } from '@/components/atoms/divider';
import PremiumContentTitle from '@/components/ui/PremiumContentTitle';
import RegionCard from '@/components/ui/RegionCard';
import { useDistrict, useSetSelectedDistrict, useSetSelectedProvince, useSetSelectedRegion } from '@/store';
import { RegionCardData } from '@/types/region';
import { generateChartData } from '@/utils/chartUtils';
import { addWaOrGwa } from '@/utils/koreanUtils';
import { Flex } from '@chakra-ui/react';
import { josa } from 'es-hangul';
import { useRouter } from 'next/navigation';
import SimilarRegionCardSlider from '../components/SimilarRegionCardSlider';
import { SummarySectionHeader } from './SummarySectionHeader';

const SimilarRegionSection: React.FC = () => {
  const { selectedRegion, selectedProvince, selectedDistrict } = useDistrict();

  const { getSameCodeRegionsByRegionId, loading, error } = useSameCodeRegions();
  const [similarRegions, setSimilarRegions] = useState<RegionCardData[]>([]);

  // 추가된 hooks
  const { getRegion } = useRegion();
  const setSelectedRegion = useSetSelectedRegion();
  const setSelectedProvince = useSetSelectedProvince();
  const setSelectedDistrict = useSetSelectedDistrict();
  const router = useRouter();

  // 지역명 생성 함수
  const getRegionName = (): string => {
    if (selectedRegion?.province?.name && selectedRegion?.name) {
      return `${selectedRegion.province.name} ${selectedRegion.name}`;
    }
    return '전라북도 전주시'; // 기본값
  };

  const regionName = getRegionName();
  const regionNameWithParticle = addWaOrGwa(regionName);

  // API에서 동일한 KLACI 코드를 가진 지역들을 가져오기
  useEffect(() => {
    const fetchSimilarRegions = async () => {
      try {
        const regionId = selectedRegion?.id || 1;
        const regions = await getSameCodeRegionsByRegionId(regionId);

        const transformedData: RegionCardData[] = regions.map(
          (region: any, index: number) => ({
            id: region.id,
            name: region.name,
            province: region.province.name,
            similarity: 100 - index * 5, // 임시 유사도
            rank: region.total_rank,
            score: region.total_score,
            klaciCode: region.klaci.code,
            klaciType: region.klaci.type,
            klaciNickname: region.klaci.nickname,
            klaciNicknameMultiline: region.klaci.nickname_multiline || [],
            radarData: generateChartData(region), // 유틸 함수 사용
            display_type: region.display_type,
            selection_tags: region.selection_tags,
          }),
        );

        console.log('Transformed data:', transformedData);
        setSimilarRegions(transformedData);
      } catch (err) {
        console.error('Error fetching similar regions:', err);
        setSimilarRegions([]);
      }
    };
    fetchSimilarRegions();
  }, [selectedRegion?.id]);

  const handleCardClick = async (item: RegionCardData) => {
    // 새 창에서 해당 지역의 results 페이지 열기
    window.open(`/results/region/${item.id}`, '_blank');
  };

  // 로딩 중일 때 표시할 내용
  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: '30px',
          color: '#000000',
          padding: '0 20px',
          paddingBottom: '100px',
        }}
      >
        <PremiumContentTitle
          title={`${regionNameWithParticle} 비슷한 지자체`}
          badgeText="더 알아보기"
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '600px',
            fontSize: '18px',
            color: '#666',
          }}
        >
          유사한 지역들을 불러오는 중...
        </div>
      </div>
    );
  }

  // 에러가 있거나 데이터가 없을 때 표시할 내용
  if (error || similarRegions.length === 0) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: '30px',
          color: '#000000',
          padding: '0 20px',
        }}
      >
        <PremiumContentTitle
          title={`${regionNameWithParticle} 비슷한 지자체`}
          badgeText="더 알아보기"
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '600px',
            fontSize: '18px',
            color: '#666',
          }}
        >
          {error
            ? '데이터를 불러오는데 실패했습니다.'
            : '유사한 지역이 없습니다.'}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        gap: '30px',
        color: '#000000',
        padding: '0 20px',
        paddingBottom: '100px',
      }}
    >

      {/* 자신 region 카드 */}
      <Flex style={{ width: '100%', maxWidth: '1060px', margin: '0 auto', justifyContent: 'center' }}>
        <RegionCard
          data={{
            id: selectedRegion?.id || 0,
            name: selectedRegion?.name || '',
            province: selectedRegion?.province?.name || '',
            similarity: 100, // 자기 자신이므로 100 유지
            rank: selectedRegion?.total_rank || 1,
            score: selectedRegion?.total_score || 0,
            klaciCode: selectedRegion?.klaci.code || '',
            klaciType: selectedRegion?.klaci.type || '',
            klaciNickname: selectedRegion?.klaci.nickname || '',
            klaciNicknameMultiline: selectedRegion?.klaci.nickname_multiline || [],
            radarData: generateChartData(selectedRegion),
          }}
          onClick={handleCardClick}
          topDivStyle={{
            backgroundColor: '#F4F4F4',
            padding: '0 20px',
            height: 'fit-content',
          }}
          bottomDivStyle={{
            backgroundColor: 'rgb(244, 244, 244)',
          }}
          isHideBadge={true}
        />
      </Flex>

      <Divider style={{ width: '100%', margin: '0 auto', marginBottom: '100px' }} />
      <SummarySectionHeader title={`${selectedProvince?.name} ${josa(selectedDistrict?.name||'종로','와/과')} 비슷한 지자체`} badgeLabel="더 알아보기" />

      <SimilarRegionCardSlider
        data={similarRegions}
        onCardClick={handleCardClick}
      />
    </div>
  );
};

export default SimilarRegionSection;
