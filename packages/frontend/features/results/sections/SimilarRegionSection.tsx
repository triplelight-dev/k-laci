'use client';

import React from 'react';

import PremiumContentTitle from '@/components/ui/PremiumContentTitle';
import { useDistrict } from '@/store';
import { addWaOrGwa } from '@/utils/koreanUtils';

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
        border: '1px solid red',
      }}
    >
      <PremiumContentTitle
        title={`${regionNameWithParticle} 비슷한 지자체`}
        badgeText="더 알아보기"
      />
      <div
        style={{
          fontSize: '1.9rem',
          fontWeight: '600',
        }}
      >
        유사한 지역 찾기
      </div>

      {/* 여기에 유사 지역 관련 컨텐츠가 추가될 예정입니다 */}
    </div>
  );
};

export default SimilarRegionSection;
