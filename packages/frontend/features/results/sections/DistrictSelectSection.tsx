'use client';

import CommonSelect from '@/components/atoms/select/CommonSelect';
import provinceData from '@/data/province_data.json';
import regionsData from '@/data/regions_data.json';
import {
  useDistrict,
  useSetSelectedDistrict,
  useSetSelectedProvince,
} from '@/store';
import React from 'react';

interface ProvinceDataType {
  id: number;
  name: string;
}

interface RegionDataType {
  id: number;
  province_id: number;
  name: string;
  district_type: string;
  weight_class: string;
  klaci_code: string;
  growth_score: number;
  economy_score: number;
  living_score: number;
  safety_score: number;
}

interface DistrictSelectSectionProps {
  isFloating?: boolean;
}

const DistrictSelectSection: React.FC<DistrictSelectSectionProps> = ({
  isFloating = false,
}) => {
  const { selectedProvince, selectedDistrict } = useDistrict();
  const setSelectedProvince = useSetSelectedProvince();
  const setSelectedDistrict = useSetSelectedDistrict();

  const handleProvinceChange = (value: string) => {
    setSelectedProvince(value ? Number(value) : null);
  };

  const handleDistrictChange = (value: string) => {
    setSelectedDistrict(value ? Number(value) : null);
  };

  // province_data.json에서 광역시/도 데이터 가져오기
  const provinceOptions = (provinceData as ProvinceDataType[]).map(
    (province) => ({
      value: String(province.id),
      label: province.name,
    }),
  );

  // regions_data.json에서 선택된 광역시/도에 해당하는 지자체 데이터 가져오기
  const districtOptions = selectedProvince
    ? (regionsData as RegionDataType[])
        .filter((region) => region.province_id === selectedProvince.id)
        .sort((a, b) => a.name.localeCompare(b.name, 'ko'))
        .map((region) => ({
          value: String(region.id),
          label: region.name,
          ...region,
        }))
    : [];

  return (
    <div
      style={{
        display: 'flex',
        gap: isFloating ? '12px' : '16px',
        width: '100%',
        justifyContent: 'center',
        padding: isFloating ? '8px 16px' : '40px',
        borderRadius: isFloating ? '12px' : '20px',
        height: isFloating ? '66px' : 'auto', // CommonSelect 높이(50px) + padding(16px)에 맞춤
        alignItems: 'center',
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
