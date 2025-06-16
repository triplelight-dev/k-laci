'use client';

import React, { useState } from 'react';
import SearchTextInput from '@/app/atoms/input/SearchTextInput';

const DistrictSearchSection: React.FC = () => {
  // 임시 데이터
  const recentSearches = ['서울시 강남구', '부산시 해운대구', '인천시 연수구'];
  const [searchValue, setSearchValue] = useState('');

  const handleRecentSearchClick = (value: string) => {
    setSearchValue(value);
  };

  const title = '229개 지자체중 우리 지역 찾아보기';
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';

  return (
    <div className="flex flex-col items-center gap-8 rounded-[30px] bg-[#F4F4F4] p-16">
      <div style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>{title}</div>

      <p className="text-center text-base leading-relaxed text-gray-600">
        {text}
      </p>

      <div className="w-full max-w-[600px]">
        <SearchTextInput value={searchValue} onChange={setSearchValue} />
      </div>

      <div className="w-full max-w-[600px]">
        <div className="mb-2 text-sm text-gray-600">최근 검색어</div>
        <div className="flex flex-wrap gap-1">
          {recentSearches.map((search, index) => (
            <button
              key={index}
              onClick={() => handleRecentSearchClick(search)}
              className="cursor-pointer text-sm text-gray-800 transition-colors hover:text-gray-600"
            >
              {search}
              {index < recentSearches.length - 1 ? ', ' : ''}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistrictSearchSection;
