'use client';

import React, { useState } from 'react';
import SearchTextInput from '@/app/atoms/input/SearchTextInput';

const DistrictSearchSection: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleRecentSearchClick = (value: string) => {
    setSearchValue(value);
  };

  const title = '229개 지자체중 우리 지역 찾아보기';
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';

  const mockRecentSearches = [
    '서울시 강남구',
    '부산시 해운대구',
    '인천시 연수구',
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        backgroundColor: '#F4F4F4',
        borderRadius: '30px',
        padding: '20px',
        paddingTop: '60px',
        paddingBottom: '60px',
      }}
    >
      <div
        style={{
          fontSize: '2.2rem',
          fontWeight: 'bold',
        }}
      >
        {title}{' '}
      </div>

      <p className="text-center text-base leading-relaxed text-gray-600">
        {text}
      </p>

      <div style={{ width: '100%', maxWidth: '500px' }}>
        <SearchTextInput
          value={searchValue}
          onChange={setSearchValue}
          recentSearches={mockRecentSearches}
          onRecentSearchClick={handleRecentSearchClick}
        />
      </div>
    </div>
  );
};

export default DistrictSearchSection;
