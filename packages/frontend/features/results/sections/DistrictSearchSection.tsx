'use client';

import SearchTextInput from '@/components/ui/SearchTextInput';
import { useIsMobile } from '@/hooks';
import { useDistrict } from '@/store';
import React, { useEffect, useState } from 'react';

const DistrictSearchSection: React.FC = () => {
  const isMobile = useIsMobile();
  const [searchValue, setSearchValue] = useState('');
  const { selectedRegion } = useDistrict();

  // selectedRegion이 변경될 때 검색창 값 업데이트
  useEffect(() => {
    if (selectedRegion?.province?.name && selectedRegion?.name) {
      setSearchValue(`${selectedRegion.province.name} ${selectedRegion.name}`);
    }
  }, [selectedRegion]);

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
        color: isMobile ? '#FFFFFF' : '#000000',
        padding: '20px',
        paddingTop: '91px',
        paddingBottom: '100px',
        position: 'relative',
        borderRadius: '50px',
        margin: '47px 0 0',
        backgroundImage: isMobile ? '' : 'url(/title_bg.png)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
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
          mobile={isMobile}
        />
      </div>
    </div>
  );
};

export default DistrictSearchSection;
