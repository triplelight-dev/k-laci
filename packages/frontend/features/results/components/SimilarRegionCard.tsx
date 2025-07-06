'use client';

import React from 'react';

interface SimilarRegionData {
  id: string | number;
  name: string;
  province: string;
  similarity: number; // 유사도 점수 (0-100)
  rank: number;
  score: number;
  [key: string]: any; // 추가 속성들을 위한 인덱스 시그니처
}

interface SimilarRegionCardProps {
  data: SimilarRegionData;
  onClick?: (item: SimilarRegionData) => void;
  style?: React.CSSProperties;
}

const SimilarRegionCard: React.FC<SimilarRegionCardProps> = ({
  data,
  onClick,
  style,
}) => {
  return (
    <div
      style={{
        minWidth: '350px',
        width: '350px',
        height: '420px',
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '24px',
        cursor: 'pointer',
        transition: 'all 0.5s ease',
        ...style,
      }}
      onClick={() => onClick?.(data)}
    >
      {/* 지역명 */}
      <div
        style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#1F2937',
          marginBottom: '8px',
        }}
      >
        {data.province} {data.name}
      </div>

      {/* 유사도 점수 */}
      <div
        style={{
          fontSize: '14px',
          color: '#6B7280',
          marginBottom: '16px',
        }}
      >
        유사도: {data.similarity}%
      </div>

      {/* 순위 */}
      <div
        style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#000000',
          marginBottom: '8px',
        }}
      >
        {data.rank}위
      </div>

      {/* 총점 */}
      <div
        style={{
          fontSize: '16px',
          color: '#374151',
          marginBottom: '24px',
        }}
      >
        총점: {data.score.toFixed(1)}
      </div>

      {/* 추가 정보를 위한 공간 */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            fontSize: '14px',
            color: '#6B7280',
            textAlign: 'center',
            padding: '12px',
            backgroundColor: '#F9FAFB',
            borderRadius: '8px',
          }}
        >
          클릭하여 자세히 보기
        </div>
      </div>
    </div>
  );
};

export default SimilarRegionCard; 