'use client';

import RadarJewelChartMini from '@/components/atoms/charts/RadarJewelChartMini';
import React from 'react';

interface SimilarRegionData {
  id: string | number;
  name: string;
  province: string;
  similarity: number; // 유사도 점수 (0-100)
  rank: number;
  score: number;
  radarData?: number[]; // 레이더 차트 데이터 추가
  [key: string]: any; // 추가 속성들을 위한 인덱스 시그니처
}

interface SimilarRegionCardProps {
  data: SimilarRegionData;
  onClick?: (item: SimilarRegionData) => void;
  style?: React.CSSProperties;
}

// 랜덤 목업 데이터 생성 함수
const generateMockRadarData = (seed: number): number[] => {
  // seed를 기반으로 일관된 랜덤 데이터 생성
  const random = (min: number, max: number) => {
    const x = Math.sin(seed++) * 10000;
    return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min;
  };

  // 8개 카테고리에 대한 랜덤 데이터 생성
  return [
    random(30, 85), // 생활역동형
    random(40, 90), // 안전회복형
    random(25, 80), // 인구정착형
    random(35, 85), // 경제정속형
    random(30, 80), // 생활정체형
    random(40, 90), // 안전정진형
    random(20, 75), // 인구성장형
    random(30, 85), // 경제혁신형
  ];
};

const SimilarRegionCard: React.FC<SimilarRegionCardProps> = ({
  data,
  onClick,
  style,
}) => {
  // 카드별로 고유한 랜덤 데이터 생성 (id를 seed로 사용)
  const mockRadarData =
    data.radarData || generateMockRadarData(Number(data.id) || data.rank);

  return (
    <div
      style={{
        minWidth: '350px',
        width: '350px',
        height: '480px',
        backgroundColor: 'white',
        borderRadius: '20px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        ...style,
      }}
      onClick={() => onClick?.(data)}
    >
      {/* 상단 - 흰색 배경 */}
      <div
        style={{
          height: '60px',
          backgroundColor: 'white',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        {/* 종합순위 */}
        <div
          style={{
            fontSize: '14px',
            color: '#666',
            marginBottom: '8px',
          }}
        >
          종합순위 {data.rank}위
        </div>
        {/* 지역명 */}
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#000',
          }}
        >
          {data.province} {data.name}
        </div>
      </div>

      {/* 하단 - 회색 배경 */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#f5f5f5',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        {/* RadarJewelChartMini 컴포넌트 */}
        <RadarJewelChartMini
          data={mockRadarData}
          size={280}
          imageUrl="/backgrounds/radar_chart_bg.png"
        />
      </div>
    </div>
  );
};

export default SimilarRegionCard;
