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
        cursor: 'pointer',
        transition: 'all 0.5s ease',
        overflow: 'hidden', // 둥근 모서리를 위해 필요
        ...style, // 외부에서 전달받은 스타일을 적용
      }}
      onClick={() => onClick?.(data)}
    >
      {/* 상단 - 흰색 배경 */}
      <div
        style={{
          height: '60px', // 상단 높이를 120px로 고정
          backgroundColor: 'white',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        {/* 종합순위 */}
        <div
          style={{
            fontSize: '14px',
            fontWeight: '600',
            color: 'black',
            marginBottom: '12px',
          }}
        >
          종합순위 {data.rank}위
        </div>

        {/* 지역명 */}
        <div
          style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#1F2937',
            lineHeight: '1.2',
          }}
        >
          {data.province} {data.name}
        </div>
      </div>

      {/* 하단 - 회색 배경 */}
      <div
        style={{
          height: '300px', // 하단 높이를 300px로 조정 (420 - 120)
          backgroundColor: '#F9FAFB',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* 유사도 점수 */}
        <div
          style={{
            fontSize: '16px',
            color: '#374151',
            marginBottom: '16px',
          }}
        >
          유사도: {data.similarity}%
        </div>

        {/* 총점 */}
        <div
          style={{
            fontSize: '18px',
            color: '#1F2937',
            marginBottom: '24px',
          }}
        >
          총점: {data.score.toFixed(1)}
        </div>

        {/* 하단 버튼 영역 */}
        <div
          style={{
            fontSize: '14px',
            color: '#6B7280',
            textAlign: 'center',
            padding: '12px',
            backgroundColor: 'white',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
          }}
        >
          클릭하여 자세히 보기
        </div>
      </div>
    </div>
  );
};

export default SimilarRegionCard; 