'use client';

import { useRegion } from '@/api/hooks/useRegion';
import CommonSelect from '@/components/atoms/select/CommonSelect';
import { useProvincesWithRegions } from '@/hooks/useProvincesWithRegions';
import {
  useDistrict,
  useSetSelectedDistrict,
  useSetSelectedProvince,
  useSetSelectedRegion,
} from '@/store';
import React, { useCallback } from 'react';

interface DistrictSelectSectionProps {
  isFloating?: boolean;
}

const DistrictSelectSection: React.FC<DistrictSelectSectionProps> = ({
  isFloating = false,
}) => {
  const { selectedProvince, selectedDistrict, selectedRegion } = useDistrict();
  const setSelectedProvince = useSetSelectedProvince();
  const setSelectedDistrict = useSetSelectedDistrict();
  const setSelectedRegion = useSetSelectedRegion();

  const { provincesWithRegions, loading, error } = useProvincesWithRegions();
  const { getRegion, loading: regionLoading } = useRegion();

  const handleProvinceChange = (value: string) => {
    setSelectedProvince(value ? Number(value) : null);
    // 도/시가 변경되면 선택된 지역도 초기화
    setSelectedDistrict(null);
  };

  const handleDistrictChange = useCallback(async (value: string) => {
    setSelectedDistrict(value ? Number(value) : null);
    
    // 지자체가 선택되면 해당 ID로 상세 정보를 가져옴
    if (value) {
      try {
        const regionDetails = await getRegion(value);
        setSelectedRegion(regionDetails);
      } catch (error) {
        // 에러가 발생해도 기본 district 정보는 유지
      }
    } else {
      // 지자체 선택이 해제되면 region 정보도 초기화
      setSelectedRegion(null);
    }
  }, [setSelectedDistrict, setSelectedRegion, getRegion]);

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
          disabled={!selectedProvince || regionLoading}
          defaultLabel={regionLoading ? "로딩 중..." : "지자체명"}
        />
      </div>
    </div>
  );
};

export default DistrictSelectSection;
