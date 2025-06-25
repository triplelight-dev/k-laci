'use client';

import React, { useState } from 'react';
import SearchTextInput from '@/components/ui/SearchTextInput';

const DistrictSearchSection: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleRecentSearchClick = (value: string) => {
    setSearchValue(value);
  };

  const title = '229개 지자체중 우리 지역 찾아보기';

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
        width: '100%',
        gap: '30px',
        backgroundColor: '#3352D7',
        color: 'white',
        padding: '20px',
        paddingTop: '60px',
        paddingBottom: '120px',
        position: 'relative',
      }}
    >
      <div
        style={{
          fontSize: '1.9rem',
          fontWeight: '600',
        }}
      >
        {title}{' '}
      </div>

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
