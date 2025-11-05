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
  const titleMobile = '229개 지자체 중\n우리 지역 찾아보기';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: isMobile ? '100%' : '1400px',
        gap: '30px',
        color: isMobile ? '#FFFFFF' : '#000000',
        padding: isMobile ? '0px 16px 100px' : '91px 20px 100px',
        // paddingTop: isMobile ? '' : '91px',
        // paddingBottom: '100px',
        position: 'relative',
        borderRadius: '50px',
        margin: '47px 0 0',
        backgroundImage: isMobile ? '' : 'url(/title_bg.png)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: isMobile ? '100vh' : '',
      }}
    >
      <div
        style={{
          width: isMobile ? '100%' : '',
          alignItems: isMobile ? '' : 'center'
        }}
      >
        <div
          style={{
            fontSize: isMobile ? '25px' : '30px',
            fontWeight: '600',
            whiteSpace: 'pre-wrap',
          }}
        >
          {isMobile ? titleMobile : title}
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '520px' }}>
        <SearchTextInput
          value={searchValue}
          onChange={setSearchValue}
          onRecentSearchClick={handleRecentSearchClick}
          mobile={isMobile}
        />

        {/* 모바일 페이지 이미지 */}
        <div className="pt-5 flex justify-center">
          <img
            src="/mobile/mobile_results_jewel.png"
            alt="모바일 페이지"
            style={{
              width: '90%',
              height: 'auto',
              paddingTop: '30px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DistrictSearchSection;
