'use client';

import React from 'react';
import { CategoryData } from '../types/category';

interface CategoryRankingProps {
  data: CategoryData;
}

const CategoryRanking: React.FC<CategoryRankingProps> = ({ data }) => {
  const { title, color, currentRank, totalRank, description, scores } = data;

  return (
    <div
      className="flex w-full flex-col rounded-lg bg-white p-6 shadow-sm"
      style={{ marginBottom: '5rem' }}
    >
      {/* 랭킹 바 */}
      <div className="relative mb-4">
        <div
          className="h-4"
          style={{
            height: '1rem',
            background: `linear-gradient(to right, ${color}, ${color}33)`,
            marginBottom: '1.5rem',
          }}
        />

        {/* 타이틀 */}
        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{title}</div>

        <div>
          <span className="text-lg font-bold" style={{ color }}>
            {currentRank}
          </span>
          <span className="text-gray-500"> / {totalRank}</span>
        </div>
      </div>

      {/* 설명 */}
      <div
        className="mb-6 whitespace-pre-line text-gray-600"
        style={{ lineHeight: '1.5rem', marginBottom: '1rem' }}
      >
        {description}
      </div>

      {/* 세부 점수 그리드 */}
      <div className="grid grid-cols-4" style={{ gap: '1.2rem' }}>
        {scores.map((score, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg p-6"
            style={{
              backgroundColor: color,
              borderColor: color,
              padding: '1.2rem',
              borderRadius: '10px',
              aspectRatio: '1',
              justifyContent: 'space-between',
            }}
          >
            <span
              className="mb-3 text-sm text-gray-600"
              style={{ fontSize: '1.1rem', fontWeight: 600 }}
            >
              {score.indicator}
            </span>
            <span
              className="mb-2 text-2xl font-extrabold"
              style={{ fontSize: '2rem', fontWeight: 600 }}
            >
              {score.score}
            </span>
            <span
              className="mb-2 text-xl font-bold"
              style={{ fontWeight: 600 }}
            >
              {score.rank}위
            </span>
            <span
              className="text-sm text-gray-500"
              style={{ fontSize: '1rem', color: '#666666' }}
            >
              {score.source}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryRanking;
