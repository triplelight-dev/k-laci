'use client';

import SearchTextInput from '@/components/ui/SearchTextInput';
import { useIsMobile } from '@/hooks';
import { useDistrict, useUser } from '@/store';
import React, { useEffect, useState } from 'react';
import provinceData from '../../../data/province_data.json';
import regionsData from '../../../data/regions_data.json';

const DistrictSearchSection: React.FC = () => {
  const isMobile = useIsMobile();
  const [searchValue, setSearchValue] = useState('');
  const { selectedRegion } = useDistrict();
  const user = useUser();

  // ✅ 페이지 최초 로드 시 기본 검색어 설정
  useEffect(() => {
    setSearchValue(provincename?.name ? [provincename?.name, regionname?.name].filter(Boolean).join(' ') : ''); // 또는 title, 혹은 다른 기본값
  }, []); // 👈 빈 배열이면 최초 1회만 실행됨

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

  const findProvinceAndRegionByProvince = (id: number) => {

    const region = regionsData.find(
      (r) => r.id === id,
    );
    if (!region) return null;

    const province = provinceData.find((p) => p.id === region.province_id);

    return province;
  };

  const findProvinceAndRegionByRegion = (id: number) => {

    const region = regionsData.find(
      (r) => r.id === id,
    );

    return region;
  };

  const provincename = findProvinceAndRegionByProvince(user?.profile.interest_region_id ?? 0);
  const regionname = findProvinceAndRegionByRegion(user?.profile.interest_region_id ?? 0);

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

        {isMobile && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default DistrictSearchSection;
