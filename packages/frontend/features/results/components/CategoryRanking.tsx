'use client';

import CategoryDetailModal from '@/components/ui/CategoryDetailModal';
import { CategoryData, CategoryScore } from '@/types/category';
import React, { useState } from 'react';
import CategoryScoreGrid from './CategoryScoreGrid';

interface CategoryRankingProps {
  data: CategoryData;
}

const CategoryRanking: React.FC<CategoryRankingProps> = ({ data }) => {
  const { title, color, currentRank, totalRank, description, scores } = data;
  const [selectedScore, setSelectedScore] = useState<CategoryScore | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScoreClick = (score: CategoryScore) => {
    setSelectedScore(score);
    setIsModalOpen(true);
  };

  // 상위 퍼센트 계산
  const topPercentage = Math.round((currentRank / totalRank) * 100);

  return (
    <div
      className="flex w-full flex-col rounded-lg bg-white shadow-sm"
      style={{ marginBottom: '5rem', gap: '50px' }}
    >
      {/* 상단 보더탑 */}
      <div
        style={{
          height: '1px',
          backgroundColor: '#D0D9E6',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}
      />

      {/* 메인 콘텐츠 */}
      <div className="flex p-6">
        {/* 좌측 박스 (1:3 비율에서 1) */}
        <div
          className="flex flex-col"
          style={{ width: '25%', paddingRight: '2rem' }}
        >
          {/* 타이틀 */}
          <div
            style={{
              fontSize: '30px',
              fontWeight: 600,
              color: '#474E59',
              marginBottom: '1rem',
            }}
          >
            {title}
          </div>

          {/* 키컬러로 N위 */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: color,
              marginBottom: '0.5rem',
            }}
          >
            {currentRank}위
          </div>

          {/* 상위 N% */}
          <div
            style={{
              fontSize: '0.9rem',
              color: '#ADB5C4',
            }}
          >
            상위 {topPercentage}%
          </div>
        </div>

        {/* 우측 박스 (1:3 비율에서 3) */}
        <div style={{ width: '75%' }}>
          <div
            style={{
              color: '#474E59',
              lineHeight: '1.5',
              fontSize: '0.95rem',
            }}
          >
            {description}
          </div>
        </div>
      </div>

      {/* 세부 점수 그리드 */}
      <div className="px-6 pb-6">
        <CategoryScoreGrid
          scores={scores}
          color={color}
          onScoreClick={handleScoreClick}
        />
      </div>

      <CategoryDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        score={selectedScore}
        color={color}
      />
    </div>
  );
};

export default CategoryRanking;
