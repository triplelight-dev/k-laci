'use client';

import { CategoryScore } from '@/types/category';
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
          key={index}
          style={{
            position: 'relative',
            cursor: 'pointer',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            backgroundColor: 'white',
            padding: '20px',
            transition: 'all 0.2s ease',
            minHeight: '70px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = color;
            e.currentTarget.style.boxShadow =
              '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e5e7eb';
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: '#9ca3af' }}
            >
              <path
                d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* 좌상단 텍스트 */}
          <div
            style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#9BA5B5',
            }}
          >
            보육시설수
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
