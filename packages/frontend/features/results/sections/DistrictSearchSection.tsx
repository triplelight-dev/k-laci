'use client';

import SearchTextInput from '@/components/ui/SearchTextInput';
import React, { useState } from 'react';

const DistrictSearchSection: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleRecentSearchClick = (value: string) => {
    setSearchValue(value);
  };

  const title = '229개 지자체 중 우리 지역 찾아보기';


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '1400px',
        gap: '30px',
        color: '#000000',
        padding: '20px',
        paddingTop: '94px',
        paddingBottom: '100px',
        position: 'relative',
        borderRadius: '50px',
        margin: '47px 0',
        backgroundImage: 'url(/title_bg.png)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          fontSize: '30px',
          fontWeight: '600',
        }}
      >
        {title}
      </div>

      <div style={{ width: '100%', maxWidth: '520px' }}>
        <SearchTextInput
          value={searchValue}
          onChange={setSearchValue}
          onRecentSearchClick={handleRecentSearchClick}
        />
      </div>
    </div>
  );
};

export default DistrictSearchSection;
