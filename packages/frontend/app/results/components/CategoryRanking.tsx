'use client';

import React from 'react';
import { CategoryData } from '../types/category';
import RankBar from '@/atoms/bars/RankBar';

interface CategoryRankingProps {
  data: CategoryData;
}

const CategoryRanking: React.FC<CategoryRankingProps> = ({ data }) => {
  const { title, color, currentRank, description, scores } = data;

  // 랜덤으로 2개의 항목을 선택하여 테마색 유지
  const themeColorIndices = React.useMemo(() => {
    const indices = Array.from({ length: scores.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices.slice(0, 1);
  }, [scores.length]);

  return (
    <div
      className="flex w-full flex-col rounded-lg bg-white p-6 shadow-sm"
      style={{ marginBottom: '5rem' }}
    >
      <div className="relative mb-4">
        {/* 타이틀 */}
        <div
          style={{
            fontSize: '2rem',
            fontWeight: 800,
            color,
            marginBottom: '20px',
          }}
        >
          {title}
        </div>
      </div>

      {/* 설명 */}
      <div
        className="mb-6 whitespace-pre-line text-gray-600"
        style={{
          fontSize: '0.9rem',
          lineHeight: '1.5rem',
          marginBottom: '1rem',
        }}
      >
        {description}
      </div>

      {/* 랭크 바 */}
      <RankBar
        currentRank={currentRank}
        minRank={1}
        maxRank={229}
        color={color}
      />

      {/* 세부 점수 그리드 */}
      <div className="grid grid-cols-4" style={{ gap: '1.2rem' }}>
        {scores.map((score, index) => {
          // 랜덤으로 선택된 항목만 테마색 유지, 나머지는 #E7E8EA
          const backgroundColor = themeColorIndices.includes(index)
            ? color
            : '#E7E8EA';
          const textColor = themeColorIndices.includes(index)
            ? 'white'
            : '#000000';

          return (
            <div
              key={index}
              className="flex flex-col rounded-lg p-6"
              style={{
                backgroundColor,
                padding: '1.2rem',
                borderRadius: '10px',
                aspectRatio: '1',
                justifyContent: 'space-between',
              }}
            >
              <span
                className="mb-3 text-sm"
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: textColor,
                }}
              >
                {score.indicator}
              </span>
              <span
                className="mb-2 text-2xl font-extrabold"
                style={{
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: textColor,
                }}
              >
                {score.score}
              </span>
              <span
                className="mb-2 text-xl font-bold"
                style={{
                  fontWeight: 600,
                  color: textColor,
                }}
              >
                {score.rank}위
              </span>
              <span
                className="text-sm"
                style={{
                  fontSize: '1rem',
                  color: themeColorIndices.includes(index)
                    ? 'rgba(255, 255, 255, 0.8)'
                    : '#666666',
                }}
              >
                {score.source}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryRanking;
