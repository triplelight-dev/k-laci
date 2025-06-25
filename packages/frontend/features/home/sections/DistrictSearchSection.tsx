'use client';

import React, { useState } from 'react';
import { DistrictCard } from '../components/DistrictCard';
import DistrictSlider from '../components/DistrictSlider';

const DistrictSearchSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 검색 로직 구현
    console.log('Searching for:', searchTerm);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            지역을 검색해보세요
          </h2>
          <p className="text-lg text-gray-600">
            전국 229개 시군구의 역량지수를 확인할 수 있습니다
          </p>
        </div>

        <form onSubmit={handleSearch} className="mx-auto mb-12 max-w-2xl">
          <div className="flex gap-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="지역명을 입력하세요 (예: 강남구, 부산시)"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700"
            >
              검색
            </button>
          </div>
        </form>

        <DistrictSlider />
      </div>
    </section>
  );
};

export default DistrictSearchSection;
