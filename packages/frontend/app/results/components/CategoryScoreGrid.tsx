import React from 'react';
import { CategoryScore } from '../types/category';
import Image from 'next/image';

interface CategoryScoreGridProps {
  scores: CategoryScore[];
  color: string;
  onScoreClick?: (score: CategoryScore) => void;
}

const BORDER_COLOR = '#D9D9E8';
const TITLE_COLOR = '#949FB0';

const CategoryScoreGrid: React.FC<CategoryScoreGridProps> = ({
  scores,
  color,
  onScoreClick,
}) => {
  // 목업: 첫 번째 요소만 isTopIdx
  return (
    <div
      className="grid"
      style={{
        width: '100%',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '15px',
      }}
    >
      {scores.map((score, idx) => {
        const isTopIdx = idx === 0;
        return (
          <div
            key={score.indicator}
            className="flex flex-col justify-between p-4 transition-colors"
            style={{
              background: isTopIdx ? color : '#fff',
              border: `1px solid ${isTopIdx ? color : BORDER_COLOR}`,
              borderRadius: 12,
              color: isTopIdx ? '#fff' : undefined,
              boxSizing: 'border-box',
              cursor: 'pointer',
              padding: '18px 20px',
              minHeight: '110px',
            }}
            tabIndex={0}
            onClick={() => onScoreClick?.(score)}
            onMouseOver={(e) => {
              if (!isTopIdx) e.currentTarget.style.borderColor = color;
            }}
            onMouseOut={(e) => {
              if (!isTopIdx) e.currentTarget.style.borderColor = BORDER_COLOR;
            }}
          >
            <div className="flex items-start justify-between">
              <span
                style={{
                  color: isTopIdx ? '#fff' : TITLE_COLOR,
                  fontWeight: 600,
                  fontSize: '18px',
                }}
              >
                {score.indicator}
              </span>
              {/* 이미지 아이콘 */}
              <button
                tabIndex={-1}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  marginLeft: 8,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`${score.indicator} 아이콘 클릭!`);
                }}
              >
                <Image
                  src="/quick_move.png"
                  alt="Quick move"
                  width={20}
                  height={20}
                  style={{
                    filter: isTopIdx ? 'brightness(0) invert(1)' : 'none',
                  }}
                />
              </button>
            </div>
            <div
              style={{
                fontWeight: 700,
                fontSize: '22px',
                color: isTopIdx ? '#fff' : color,
                marginTop: 12,
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

export default CategoryScoreGrid;
