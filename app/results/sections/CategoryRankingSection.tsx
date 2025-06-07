'use client';

import React from 'react';
import CategoryRanking from '../components/CategoryRanking';
import { CategoryData } from '../types/category';

const CategoryRankingSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#F8F8F8',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '50%',
        }}
      >
        {/* 타이틀 */}
        <div
          style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            marginBottom: '2rem',
          }}
        >
          범주별 순위
        </div>

        {/* 카테고리 그리드 */}
        <div className="grid grid-cols-1 gap-8">
          {mockCategories.map((category, index) => (
            <CategoryRanking key={index} data={category} />
          ))}
        </div>
      </section>
    </div>
  );
};

const mockCategories: CategoryData[] = [
  {
    title: '인구성장력',
    color: '#F56542', // 인디고
    currentRank: 3,
    totalRank: 17,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    scores: Array(12)
      .fill(null)
      .map((_, i) => ({
        indicator: `경제지표 ${i + 1}`,
        score: Math.floor(Math.random() * 100),
        rank: Math.floor(Math.random() * 20) + 1,
        source: '통계청(2024)',
      })),
  },
  {
    title: '경제활동력',
    color: '#F2BA5D', // 에메랄드
    currentRank: 5,
    totalRank: 17,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    scores: Array(12)
      .fill(null)
      .map((_, i) => ({
        indicator: `사회지표 ${i + 1}`,
        score: Math.floor(Math.random() * 100),
        rank: Math.floor(Math.random() * 20) + 1,
        source: '보건복지부(2024)',
      })),
  },
  {
    title: '생활기반력',
    color: '#C2BDF3', // 앰버
    currentRank: 7,
    totalRank: 17,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    scores: Array(12)
      .fill(null)
      .map((_, i) => ({
        indicator: `건강지표 ${i + 1}`,
        score: Math.floor(Math.random() * 100),
        rank: Math.floor(Math.random() * 20) + 1,
        source: '질병관리청(2024)',
      })),
  },
  {
    title: '안전회복력',
    color: '#74BF9E', // 레드
    currentRank: 2,
    totalRank: 17,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    scores: Array(12)
      .fill(null)
      .map((_, i) => ({
        indicator: `만족도지표 ${i + 1}`,
        score: Math.floor(Math.random() * 100),
        rank: Math.floor(Math.random() * 20) + 1,
        source: '행정안전부(2024)',
      })),
  },
];

export default CategoryRankingSection;
