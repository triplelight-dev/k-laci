'use client';

import { useRegion } from '@/api/hooks/useRegion';
import { RegionWithDetails as ApiRegionWithDetails } from '@/api/services/data.service';
import CommonSelect from '@/components/atoms/select/CommonSelect';
import { useProvincesWithRegions } from '@/hooks/useProvincesWithRegions';
import {
  useDistrict,
  useSetRegionLoading,
  useSetSelectedDistrict,
  useSetSelectedProvince,
  useSetSelectedRegion,
} from '@/store';
import { RegionWithDetails as StoreRegionWithDetails } from '@/store/types/district';
import React, { useEffect } from 'react';

interface DistrictSelectSectionProps {
  isFloating?: boolean;
}

const DistrictSelectSection: React.FC<DistrictSelectSectionProps> = ({
  isFloating = false,
}) => {
  const { selectedProvince, selectedDistrict, regionLoading } = useDistrict();
  const setSelectedProvince = useSetSelectedProvince();
  const setSelectedDistrict = useSetSelectedDistrict();
  const setSelectedRegion = useSetSelectedRegion();
  const setRegionLoading = useSetRegionLoading();

  // React Query 사용
  const { data: provincesWithRegions = [], error } = useProvincesWithRegions();

  // useRegion hook 사용
  const { getRegion } = useRegion();

  // selectedDistrict가 변경될 때 region 정보 가져오기
  useEffect(() => {
    const fetchRegionDetails = async () => {
      if (selectedDistrict) {
        try {
          setRegionLoading(true);
          const details: ApiRegionWithDetails = await getRegion(
            String(selectedDistrict.id),
          );
          const storeDetails: StoreRegionWithDetails = {
            ...details,
            id: Number(details.id),
            province_id: Number(details.provinceId),
            province: {
              id: Number(details.province.id),
              name: details.province.name,
            },
          };
          setSelectedRegion(storeDetails, 'system');
        } catch (error) {
          console.error('Failed to fetch region details:', error);
          setSelectedRegion(null);
        } finally {
          setRegionLoading(false);
        }
      } else {
        setSelectedRegion(null);
        setRegionLoading(false);
      }
    };

    fetchRegionDetails();
  }, [selectedDistrict, getRegion, setSelectedRegion, setRegionLoading]);

  const handleProvinceChange = (value: string) => {
    const provinceId = value ? Number(value) : null;
    setSelectedProvince(provinceId);
  };

  const handleDistrictChange = (value: string) => {
    const districtId = value ? Number(value) : null;
    setSelectedDistrict(districtId, 'district_select');
  };

  // API에서 가져온 데이터로 province 옵션 생성 (가나다순 정렬 추가)
  const provinceOptions = provincesWithRegions
    .sort((a, b) => a.name.localeCompare(b.name, 'ko'))
    .map((province) => ({
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
        position: isFloating ? 'fixed' : 'static',
        top: isFloating ? '40px' : 'auto',
        left: isFloating ? '50%' : 'auto',
        zIndex: isFloating ? 1000 : 'auto',
        transform: isFloating ? 'translateX(-50%)' : 'none',
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
          defaultLabel={regionLoading ? '로딩 중...' : '지자체명'}
        />
      </div>
    </div>
  );
};

export default DistrictSelectSection;
