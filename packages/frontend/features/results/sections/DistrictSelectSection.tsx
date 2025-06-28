'use client';

import CommonSelect from '@/components/atoms/select/CommonSelect';
import { useProvincesWithRegions } from '@/hooks/useProvincesWithRegions';
import {
  useDistrict,
  useSetSelectedDistrict,
  useSetSelectedProvince,
} from '@/store';
import React from 'react';

interface DistrictSelectSectionProps {
  isFloating?: boolean;
}

const DistrictSelectSection: React.FC<DistrictSelectSectionProps> = ({
  isFloating = false,
}) => {
  const { selectedProvince, selectedDistrict } = useDistrict();
  const setSelectedProvince = useSetSelectedProvince();
  const setSelectedDistrict = useSetSelectedDistrict();

  const { provincesWithRegions, loading, error } = useProvincesWithRegions();

  console.log('provincesWithRegions', provincesWithRegions);

  const handleProvinceChange = (value: string) => {
    setSelectedProvince(value ? Number(value) : null);
    // 도/시가 변경되면 선택된 지역도 초기화
    setSelectedDistrict(null);
  };

  const handleDistrictChange = (value: string) => {
    setSelectedDistrict(value ? Number(value) : null);
  };

  // API에서 가져온 데이터로 province 옵션 생성
  const provinceOptions = provincesWithRegions.map((province) => ({
    value: String(province.id),
    label: province.name,
  }));

  // 선택된 도/시에 해당하는 지역 옵션 생성
  const districtOptions = selectedProvince
    ? provincesWithRegions
        .find((province) => province.id === selectedProvince.id)
        ?.regions.map((region) => ({
          value: String(region.id),
          label: region.name,
          ...region,
        })) || []
    : [];

  // 로딩 중이거나 에러가 있는 경우 처리
  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          width: '500px',
          padding: '5px',
          justifyContent: 'center',
          borderRadius: '50px',
          alignItems: 'center',
          backgroundColor: 'white',
          marginTop: isFloating ? 'auto' : '50px',
        }}
      >
        <div>로딩 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          width: '500px',
          padding: '5px',
          justifyContent: 'center',
          borderRadius: '50px',
          alignItems: 'center',
          backgroundColor: 'white',
          marginTop: isFloating ? 'auto' : '50px',
        }}
      >
        <div>데이터를 불러오는 중 오류가 발생했습니다.</div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '500px',
        padding: '5px',
        justifyContent: 'center',
        borderRadius: '50px',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: isFloating ? 'auto' : '50px',
        // marginBottom: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <CommonSelect
          value={selectedProvince ? String(selectedProvince.id) : ''}
          options={provinceOptions}
          onChange={handleProvinceChange}
          defaultLabel="광역명"
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <CommonSelect
          value={selectedDistrict ? String(selectedDistrict.id) : ''}
          options={districtOptions}
          onChange={handleDistrictChange}
          disabled={!selectedProvince}
          defaultLabel="지자체명"
        />
      </div>
    </div>
  );
};

export default DistrictSelectSection;
