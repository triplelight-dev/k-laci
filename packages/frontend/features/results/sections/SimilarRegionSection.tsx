'use client';

import React from 'react';

import PremiumContentTitle from '@/components/ui/PremiumContentTitle';
import { useDistrict } from '@/store';
import { addWaOrGwa } from '@/utils/koreanUtils';
import SimilarRegionCardSlider from '../components/SimilarRegionCardSlider';

const SimilarRegionSection: React.FC = () => {
  const { selectedRegion } = useDistrict();

  // 지역명 생성 함수
  const getRegionName = (): string => {
    if (selectedRegion?.province?.name && selectedRegion?.name) {
      return `${selectedRegion.province.name} ${selectedRegion.name}`;
    }
    return '전라북도 전주시'; // 기본값
  };

  const regionName = getRegionName();
  const regionNameWithParticle = addWaOrGwa(regionName);

  // Mock 데이터 (실제로는 API에서 가져올 데이터)
  const mockSimilarRegions = [
    {
      id: 1,
      name: '강남구',
      province: '서울시',
      similarity: 95,
      rank: 1,
      score: 92.5,
    },
    {
      id: 2,
      name: '서초구',
      province: '서울시',
      similarity: 88,
      rank: 2,
      score: 89.3,
    },
    {
      id: 3,
      name: '송파구',
      province: '서울시',
      similarity: 82,
      rank: 3,
      score: 87.1,
    },
    {
      id: 4,
      name: '마포구',
      province: '서울시',
      similarity: 78,
      rank: 4,
      score: 85.2,
    },
    {
      id: 5,
      name: '용산구',
      province: '서울시',
      similarity: 75,
      rank: 5,
      score: 83.8,
    },
  ];

  const handleCardClick = (item: any) => {
    console.log('선택된 유사 지역:', item);
    // 여기에 카드 클릭 시 로직 추가
  };

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
        data={mockSimilarRegions}
        onCardClick={handleCardClick}
      />
    </div>
  );
};

export default SimilarRegionSection;
