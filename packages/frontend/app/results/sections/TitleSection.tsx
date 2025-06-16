'use client';

import React from 'react';
import JewelRadarChart from '@/atoms/charts/RadarChart';
import RankBadge from '@/atoms/badges/RankBadge';

const TitleSection: React.FC = () => {
  const chartData = [85, 60, 50, 60, 55, 43, 55, 66];
  const rank = 3; // 예시 데이터, 실제로는 props나 API에서 받아올 수 있습니다
  const districtName = '전라북도 전주시';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        padding: '20px',
        marginBottom: '250px',
      }}
    >
      <JewelRadarChart data={chartData} isJewel={true} size={300} />
      <div
        style={{
          fontSize: '3.5rem',
          color: '#000',
          fontWeight: '800',
        }}
      >
        {districtName}
      </div>
      <RankBadge rank={rank} />
    </div>
  );
};

export default TitleSection;
