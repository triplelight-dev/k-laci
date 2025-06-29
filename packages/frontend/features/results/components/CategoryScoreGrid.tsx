'use client';

import { CategoryRank } from '@/types/category';
import Image from 'next/image';
import React, { useState } from 'react';

interface CategoryRankGridProps {
  rank: CategoryRank[];
  color: string;
  onScoreClick: (score: CategoryRank) => void;
}

const CategoryRankGrid: React.FC<CategoryRankGridProps> = ({
  rank,
  color,
  onScoreClick,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // rank가 undefined이거나 빈 배열인 경우 처리
  if (!rank || rank.length === 0) {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          maxWidth: '100%',
        }}
      >
        <div
          style={{
            position: 'relative',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
            backgroundColor: '#F9FAFB',
            padding: '15px',
            minHeight: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#6B7280',
            fontSize: '14px',
          }}
        >
          데이터가 없습니다
        </div>
      </div>
    );
  }

  // 최고 순위(가장 낮은 rank 값) 찾기
  const highestRank = Math.min(...rank.map((score) => score.rank));

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        maxWidth: '100%',
      }}
    >
      {rank.map((score, index) => {
        const isHighestRank = score.rank === highestRank;
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={`${score.name}-${index}`}
            style={{
              position: 'relative',
              cursor: 'pointer',
              borderRadius: '8px',
              border: '1px solid transparent',
              backgroundColor: isHovered ? 'white' : (isHighestRank ? color : '#F1F1F1'),
              padding: '15px',
              transition: 'all 0.2s ease',
              minHeight: '60px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            onMouseEnter={() => {
              setHoveredIndex(index);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
            }}
            onClick={() => onScoreClick(score)}
          >
            {/* 우상단 아이콘 */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
              }}
            >
              <Image
                src="/icons/info_icon.png"
                alt="정보 아이콘"
                width={16}
                height={16}
                style={{
                  filter: isHovered ? 'none' : (isHighestRank ? 'brightness(0) invert(1)' : 'none'),
                }}
              />
            </div>

            {/* 좌상단 텍스트 */}
            <div
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: isHovered ? 'black' : (isHighestRank ? 'white' : 'black'),
              }}
            >
              {score.name}
            </div>

            {/* 좌하단 순위 */}
            <div
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: isHovered ? color : (isHighestRank ? 'white' : color),
                marginTop: 'auto',
              }}
            >
              {score.rank}위
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryRankGrid;
