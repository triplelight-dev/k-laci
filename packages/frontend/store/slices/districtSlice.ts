import provinceData from '@/data/province_data.json';
import regionsData from '@/data/regions_data.json';
import { logRegionChange } from '@/utils/regionChangeLogger';
import { StateCreator } from 'zustand';
import {
    DistrictState,
    Province,
    Region,
    RegionWithDetails,
} from '../types/district';

export interface DistrictSlice {
  district: DistrictState;
  provinces: Province[];
  regions: Region[];
  setSelectedProvince: (provinceId: number | null) => void;
  setSelectedDistrict: (districtId: number | null, source?: string) => void;
  setSelectedRegion: (region: RegionWithDetails | null, source?: string) => void;
  setRegionLoading: (loading: boolean) => void;
  clearDistrictSelection: () => void;
  getProvinceById: (id: number) => Province | null;
  getRegionById: (id: number) => Region | null;
  getRegionsByProvinceId: (provinceId: number) => Region[];
}

const initialState: DistrictState = {
  selectedProvince: null,
  selectedDistrict: null,
  selectedRegion: null,
  regionLoading: false,
};

export const createDistrictSlice: StateCreator<DistrictSlice> = (set, get) => ({
  district: initialState,
  provinces: provinceData as Province[],
  regions: regionsData as Region[],
  
  setSelectedProvince: (provinceId: number | null) => {
    console.log('🔍 [DEBUG] setSelectedProvince 호출, provinceId:', provinceId);
    
    const province = provinceId ? get().getProvinceById(provinceId) : null;
    console.log('🔍 [DEBUG] getProvinceById 결과:', province);
    
    set((state) => ({
      district: {
        ...state.district,
        selectedProvince: province,
        // province 변경시 district와 region은 유지 (null로 초기화하지 않음)
      },
    }));
    
    console.log('🔍 [DEBUG] setSelectedProvince 완료');
  },
  
  setSelectedDistrict: (districtId: number | null, source: string = 'district_select') => {
    const currentState = get();
    const previousRegionId = currentState.district.selectedRegion?.id || null;
    const district = districtId ? get().getRegionById(districtId) : null;
    
    set((state) => ({
      district: {
        ...state.district,
        selectedDistrict: district,
        // ❌ regionLoading: districtId ? true : false, // 이 줄 제거
      },
    }));

    // 지역 변경 로깅 (새로운 지역이 선택된 경우에만)
    if (districtId && districtId !== previousRegionId) {
      logRegionChange({
        previousRegionId,
        newRegionId: districtId,
        source: source as any,
        metadata: {
          districtName: district?.name,
          provinceName: district ? get().getProvinceById(district.province_id)?.name : null,
        },
      });
    }
  },

  setSelectedRegion: (region: RegionWithDetails | null, source: string = 'system') => {
    const currentState = get();
    const previousRegionId = currentState.district.selectedRegion?.id || null;
    
    set((state) => ({
      district: {
        ...state.district,
        selectedRegion: region,
        regionLoading: false,
      },
    }));

    // 지역 변경 로깅 (새로운 지역이 설정된 경우에만, 시스템 액션이 아닌 경우에만)
    if (region && region.id !== previousRegionId && source !== 'system') {
      logRegionChange({
        previousRegionId,
        newRegionId: region.id,
        source: source as any,
        metadata: {
          regionName: region.name,
          provinceName: region.province?.name,
        },
      });
    }
  },

  setRegionLoading: (loading: boolean) => {
    set((state) => ({
      district: {
        ...state.district,
        regionLoading: loading,
      },
    }));
  },
  
  clearDistrictSelection: () => {
    set((state) => ({
      district: {
        ...state.district,
        selectedProvince: null,
        selectedDistrict: null,
        selectedRegion: null,
        regionLoading: false,
      },
    }));
  },

  getProvinceById: (id: number) => {
    const provinces = get().provinces;
    return provinces.find(province => province.id === id) || null;
  },

  getRegionById: (id: number) => {
    const regions = get().regions;
    return regions.find(region => region.id === id) || null;
  },

  getRegionsByProvinceId: (provinceId: number) => {
    const regions = get().regions;
    return regions.filter(region => region.province_id === provinceId);
  },
});
