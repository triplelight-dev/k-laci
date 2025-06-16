'use client';

import React, { useState } from 'react';
import CommonSelect from '@/app/atoms/select/CommonSelect';

// 임시 데이터
const MOCK_DATA = {
  provinces: [
    { value: 'seoul', label: '서울특별시' },
    { value: 'busan', label: '부산광역시' },
    { value: 'incheon', label: '인천광역시' },
  ],
  districts: {
    seoul: [
      { value: 'gangnam', label: '강남구' },
      { value: 'gangdong', label: '강동구' },
      { value: 'gangbuk', label: '강북구' },
    ],
    busan: [
      { value: 'haeundae', label: '해운대구' },
      { value: 'jung', label: '중구' },
      { value: 'seo', label: '서구' },
    ],
    incheon: [
      { value: 'yeonsu', label: '연수구' },
      { value: 'namdong', label: '남동구' },
      { value: 'bupyeong', label: '부평구' },
    ],
  },
};

const DistrictSelectSection: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const handleProvinceChange = (value: string) => {
    setSelectedProvince(value);
    setSelectedDistrict(''); // 광역시 변경시 지자체 선택 초기화
  };

  const handleDistrictChange = (value: string) => {
    setSelectedDistrict(value);
  };

  const districtOptions = selectedProvince
    ? MOCK_DATA.districts[selectedProvince as keyof typeof MOCK_DATA.districts]
    : [];

  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        width: '100%',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <CommonSelect
          value={selectedProvince}
          options={MOCK_DATA.provinces}
          onChange={handleProvinceChange}
        />
      </div>
      <div
        style={{
          // width: '600px',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <CommonSelect
          value={selectedDistrict}
          options={districtOptions}
          onChange={handleDistrictChange}
          disabled={!selectedProvince}
        />
      </div>
    </div>
  );
};

export default DistrictSelectSection;
