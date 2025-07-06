'use client';

import React, { useEffect, useState } from 'react';

import { useSameCodeRegions } from '@/api/hooks';
import PremiumContentTitle from '@/components/ui/PremiumContentTitle';
import { useDistrict } from '@/store';
import { addWaOrGwa } from '@/utils/koreanUtils';
import SimilarRegionCardSlider from '../components/SimilarRegionCardSlider';

interface SimilarRegionData {
  id: string | number;
  name: string;
  province: string;
  similarity: number;
  rank: number;
  score: number;
  klaciCode?: string;
  klaciType?: string;
  klaciNickname?: string;
  radarData?: number[];
  [key: string]: any;
}

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

  // API에서 동일한 KLACI 코드를 가진 지역들을 가져오기
  useEffect(() => {
    const fetchSimilarRegions = async () => {
      try {
        const regionId = selectedRegion?.id || 1;
        const regions = await getSameCodeRegionsByRegionId(regionId);
        const transformedData: SimilarRegionData[] = regions.map((region: any, index: number) => ({
          id: region.id,
          name: region.name,
          province: region.province.name,
          similarity: 100 - (index * 5), // 임시 유사도
          rank: region.total_rank,
          score: region.total_score,
          klaciCode: region.klaci.code,
          klaciType: region.klaci.type,
          klaciNickname: region.klaci.nickname,
          radarData: [
            region.growth_score,
            region.safety_score,
            region.economy_score,
            region.living_score,
            region.growth_score,
            region.safety_score,
            region.economy_score,
            region.living_score,
          ],
        }));
        setSimilarRegions(transformedData);
      } catch (err) {
        setSimilarRegions([]);
      }
    };
    fetchSimilarRegions();
  }, [selectedRegion, getSameCodeRegionsByRegionId]);

  const handleCardClick = (item: SimilarRegionData) => {
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
          {error ? '데이터를 불러오는데 실패했습니다.' : '유사한 지역이 없습니다.'}
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
