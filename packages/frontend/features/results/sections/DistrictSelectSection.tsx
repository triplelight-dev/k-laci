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
import React, { useEffect, useRef } from 'react';

interface DistrictSelectSectionProps {
  isFloating?: boolean;
  isVisible?: boolean;
}

const DistrictSelectSection: React.FC<DistrictSelectSectionProps> = ({
  isFloating = false,
  isVisible = true,
}) => {
  // ✅ 올바른 방식: 상태와 함수를 별도로 가져오기
  const { selectedProvince, selectedDistrict, selectedRegion, regionLoading } =
    useDistrict();
  const setSelectedProvince = useSetSelectedProvince();
  const setSelectedDistrict = useSetSelectedDistrict();
  const setSelectedRegion = useSetSelectedRegion();
  const setRegionLoading = useSetRegionLoading();

  const { data: provincesWithRegions = [], error } = useProvincesWithRegions();

  // useRegion hook 사용
  const { getRegion } = useRegion();

  // 무한 루프 방지를 위한 ref
  const isUpdatingRef = useRef(false);

  // selectedDistrict가 변경될 때 region 정보 가져오기 (수정)
  useEffect(() => {
    if (isUpdatingRef.current) return;

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

          isUpdatingRef.current = true;
          setSelectedRegion(storeDetails, 'district_select');

          setTimeout(() => {
            isUpdatingRef.current = false;
          }, 100);
        } catch (error) {
          console.error('Failed to fetch region details:', error);
          setSelectedRegion(null);
        } finally {
          setRegionLoading(false);
        }
      } else if (!selectedDistrict) {
        setSelectedRegion(null);
        setRegionLoading(false);
      }
    };

    fetchRegionDetails();
  }, [selectedDistrict, getRegion, setSelectedRegion, setRegionLoading]);

  // 디버깅용 useEffect 추가
  useEffect(() => {
    console.log('🔍 [DEBUG] DistrictSelectSection 상태 변경:');
    console.log('  - selectedProvince:', selectedProvince);
    console.log('  - selectedDistrict:', selectedDistrict);
    console.log('  - selectedRegion:', selectedRegion);
    console.log('  - regionLoading:', regionLoading);
  }, [selectedProvince, selectedDistrict, selectedRegion, regionLoading]);

  const handleProvinceChange = (value: string) => {
    if (isUpdatingRef.current) return;

    const provinceId = value ? Number(value) : null;
    setSelectedProvince(provinceId);
    setSelectedDistrict(null);
    setRegionLoading(false);
  };

  const handleDistrictChange = (value: string) => {
    if (isUpdatingRef.current) return;

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
  let districtOptions = selectedProvince
    ? provincesWithRegions
        .find((province) => province.id === selectedProvince.id)
        ?.regions.map((region) => ({
          value: String(region.id),
          label: region.name,
          ...region,
        })) || []
    : [];

  // districtOptions에 selectedDistrict가 없으면 강제로 추가 (보정)
  if (
    selectedDistrict &&
    !districtOptions.some(
      (opt) => String(opt.id) === String(selectedDistrict.id),
    )
  ) {
    // DistrictOption 타입에 맞게 보정
    districtOptions = [
      {
        value: String(selectedDistrict.id),
        label: selectedDistrict.name,
        id: String(selectedDistrict.id),
        provinceId: String(selectedDistrict.province_id),
        name: selectedDistrict.name,
        district_type: selectedDistrict.district_type,
        weight_class: selectedDistrict.weight_class,
        klaci_code: selectedDistrict.klaci_code,
        growth_score: selectedDistrict.growth_score,
        economy_score: selectedDistrict.economy_score,
        living_score: selectedDistrict.living_score,
        safety_score: selectedDistrict.safety_score,
        total_score: selectedDistrict.total_score,
        total_rank: selectedDistrict.total_rank,
      },
      ...districtOptions,
    ];
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
        display: isFloating && !isVisible ? 'none' : 'flex',
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
          defaultLabel={regionLoading ? '로딩 중...' : '선택'}
        />
      </div>
    </div>
  );
};

export default DistrictSelectSection;
