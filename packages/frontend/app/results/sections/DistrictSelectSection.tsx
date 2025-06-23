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

interface DistrictSelectSectionProps {
  isFloating?: boolean;
}

const DistrictSelectSection: React.FC<DistrictSelectSectionProps> = ({
  isFloating = false,
}) => {
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
          value={selectedProvince}
          options={MOCK_DATA.provinces}
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
          value={selectedDistrict}
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
