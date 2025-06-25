'use client';

import React from 'react';
import { DistrictCard } from '../components/DistrictCard';

const TopDistrictSection: React.FC = () => {
  const topDistricts = [
    { id: 1, name: '강남구', rank: 1, score: 95.2, category: '경제' },
    { id: 2, name: '서초구', rank: 2, score: 93.8, category: '경제' },
    { id: 3, name: '송파구', rank: 3, score: 92.1, category: '경제' },
    { id: 4, name: '마포구', rank: 4, score: 90.5, category: '문화' },
    { id: 5, name: '용산구', rank: 5, score: 89.2, category: '문화' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            상위 지역 순위
          </h2>
          <p className="text-gray-600 text-lg">
            역량지수 상위 5개 지역을 확인해보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topDistricts.map((district) => (
            <DistrictCard
              key={district.id}
              district={district}
              onClick={() => console.log(`Clicked ${district.name}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDistrictSection; 