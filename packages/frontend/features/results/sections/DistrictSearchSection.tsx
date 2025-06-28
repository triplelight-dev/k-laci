'use client';

import SearchTextInput from '@/components/ui/SearchTextInput';
import React, { useState } from 'react';

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
        width: '80%',
        gap: '30px',
        color: '#000000',
        padding: '20px',
        paddingTop: '80px',
        paddingBottom: '100px',
        position: 'relative',
        borderRadius: '50px',
        backgroundImage: `
        url('/title_bg.png'),
        linear-gradient(90deg, rgba(247, 247, 251, 0.7) 0%, rgba(233, 243, 254, 0.7) 100%)
      `,
        backgroundSize: '150% 150%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        overflow: 'hidden',
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
