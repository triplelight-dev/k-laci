'use client';

import React, { useState } from 'react';
import { CategoryData, CategoryScore } from '../types/category';
import RankBar from '@/atoms/bars/RankBar';
import CategoryDetailModal from '@/app/atoms/modal/CategoryDetailModal';

interface CategoryRankingProps {
  data: CategoryData;
}

const CategoryRanking: React.FC<CategoryRankingProps> = ({ data }) => {
  const { title, color, currentRank, description, scores } = data;
  const [selectedScore, setSelectedScore] = useState<CategoryScore | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScoreClick = (score: CategoryScore) => {
    setSelectedScore(score);
    setIsModalOpen(true);
  };

  return (
    <div
      className="flex w-full flex-col rounded-lg bg-white p-6 shadow-sm"
      style={{ marginBottom: '5rem', backgroundColor: 'red' }}
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
        {scores.map((score, index) => (
          <div
            key={index}
            className="flex cursor-pointer flex-col rounded-lg p-6 transition-all duration-300"
            style={{
              backgroundColor: '#E7E8EA',
              padding: '1.2rem',
              borderRadius: '10px',
              aspectRatio: '1',
              justifyContent: 'space-between',
            }}
            onClick={() => handleScoreClick(score)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = color;
              const spans = e.currentTarget.getElementsByTagName('span');
              for (let span of spans) {
                span.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E7E8EA';
              const spans = e.currentTarget.getElementsByTagName('span');
              for (let span of spans) {
                span.style.color = span.classList.contains('source')
                  ? '#666666'
                  : '#000000';
              }
            }}
          >
            <span
              className="mb-3 text-sm"
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#000000',
              }}
            >
              {score.indicator}
            </span>
            <span
              className="mb-2 text-2xl font-extrabold"
              style={{
                fontSize: '2rem',
                fontWeight: 600,
                color: '#000000',
              }}
            >
              {score.score}
            </span>
            <span
              className="mb-2 text-xl font-bold"
              style={{
                fontWeight: 600,
                color: '#000000',
              }}
            >
              {score.rank}위
            </span>
            <span
              className="source text-sm"
              style={{
                fontSize: '1rem',
                color: '#666666',
              }}
            >
              {score.source}
            </span>
          </div>
        ))}
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
