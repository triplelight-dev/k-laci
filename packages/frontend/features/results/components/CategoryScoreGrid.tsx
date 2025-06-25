'use client';

import React from 'react';
import { CategoryScore } from '../types/category';

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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {scores.map((score, index) => (
        <div
          key={index}
          className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => onScoreClick(score)}
        >
          <div className="text-sm text-gray-600 mb-2">{score.name}</div>
          <div
            className="text-2xl font-bold"
            style={{ color: color }}
          >
            {score.value}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {score.rank}위 / {score.totalRank}개
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryScoreGrid; 