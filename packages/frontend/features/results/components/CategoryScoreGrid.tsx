'use client';

import { CategoryScore } from '@/types/category';
import Image from 'next/image';
import React from 'react';

interface CategoryScoreGridProps {
  scores: CategoryScore[];
  color: string;
  onScoreClick: (score: CategoryScore) => void;
}

const CategoryScoreGrid: React.FC<CategoryScoreGridProps> = ({
  scores,
  color,
  onScoreClick,
}) => {
  // scores가 undefined이거나 빈 배열인 경우 처리
  if (!scores || scores.length === 0) {
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

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        maxWidth: '100%',
      }}
    >
      {scores.map((score, index) => (
        <div
          key={`${score.name}-${index}`}
          style={{
            position: 'relative',
            cursor: 'pointer',
            borderRadius: '8px',
            border: '1px solid transparent',
            backgroundColor: '#F1F1F1',
            padding: '15px',
            transition: 'all 0.2s ease',
            minHeight: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = color;
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.boxShadow =
              '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.backgroundColor = '#F1F1F1';
            e.currentTarget.style.boxShadow = 'none';
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
              style={{ color: '#9ca3af' }}
            />
          </div>

          {/* 좌상단 텍스트 */}
          <div
            style={{
              fontSize: '15px',
              fontWeight: '600',
              color: 'black',
            }}
          >
            {score.name}
          </div>

          {/* 좌하단 순위 */}
          <div
            style={{
              fontSize: '24px',
              fontWeight: '700',
              color: color,
              marginTop: 'auto',
            }}
          >
            {score.rank}위
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryScoreGrid;
