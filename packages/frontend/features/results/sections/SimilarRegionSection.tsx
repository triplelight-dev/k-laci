'use client';

import React, { useEffect, useState } from 'react';

import { useSameCodeRegions } from '@/api/hooks';
import PremiumContentTitle from '@/components/ui/PremiumContentTitle';
import { useDistrict } from '@/store';
import { addWaOrGwa } from '@/utils/koreanUtils';
import SimilarRegionCardSlider from '../components/SimilarRegionCardSlider';
import { SimilarRegionData } from './SimilarRegionSection.type';



const SimilarRegionSection: React.FC = () => {
  const { selectedRegion } = useDistrict();
  const { getSameCodeRegionsByRegionId, loading, error } = useSameCodeRegions();
  const [similarRegions, setSimilarRegions] = useState<SimilarRegionData[]>([]);

  // 지역명 생성 함수
  const getRegionName = (): string => {
    if (selectedRegion?.province?.name && selectedRegion?.name) {
      return `${selectedRegion.province.name} ${selectedRegion.name}`;
    }
    return '전라북도 전주시'; // 기본값
  };

  const regionName = getRegionName();
  const regionNameWithParticle = addWaOrGwa(regionName);

  // 차트 데이터를 실제 점수 기반으로 생성하는 함수 (TitleSection 참고, 값이 없으면 모두 0)
  const generateChartData = (region: any): number[] => {
    if (
      !region ||
      region.growth_score === undefined ||
      region.economy_score === undefined ||
      region.living_score === undefined ||
      region.safety_score === undefined
    ) {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }
    const { growth_score, economy_score, living_score, safety_score } = region;
    return [
      living_score, // index 0: 생활역동형
      safety_score, // index 1: 안전회복형
      100 - growth_score, // index 2: 인구정착형
      100 - economy_score, // index 3: 경제정속형
      100 - living_score, // index 4: 생활정체형
      100 - safety_score, // index 5: 안전정진형
      growth_score, // index 6: 인구성장형
      economy_score, // index 7: 경제혁신형
    ];
  };

  // API에서 동일한 KLACI 코드를 가진 지역들을 가져오기
  useEffect(() => {
    const fetchSimilarRegions = async () => {
      try {
        const regionId = selectedRegion?.id || 1;
        const regions = await getSameCodeRegionsByRegionId(regionId);
        const transformedData: SimilarRegionData[] = regions.map(
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
            radarData: generateChartData(region),
          }),
        );
        setSimilarRegions(transformedData);
      } catch (err) {
        setSimilarRegions([]);
      }
    };
    fetchSimilarRegions();
  }, [selectedRegion?.id]);

  const handleCardClick = () => {
    // 카드 클릭 시 로직
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
          padding: '20px',
          paddingTop: '80px',
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
          padding: '20px',
          paddingTop: '80px',
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
        padding: '20px',
        paddingTop: '80px',
        paddingBottom: '100px',
      }}
    >
      <PremiumContentTitle
        title={`${regionNameWithParticle} 비슷한 지자체`}
        badgeText="더 알아보기"
      />

      <SimilarRegionCardSlider
        data={similarRegions}
        onCardClick={handleCardClick}
      />
    </div>
  );
};

export default SimilarRegionSection;
