import provinceData from '@/data/province_data.json';
import regionsData from '@/data/regions_data.json';
import { StateCreator } from 'zustand';
import {
  DistrictSlice,
  DistrictState,
  Province,
  Region,
} from '../types/district';

export interface DistrictSlice {
  district: DistrictState;
  setSelectedProvince: (provinceId: number | null) => void;
  setSelectedDistrict: (districtId: number | null) => void;
  clearDistrictSelection: () => void;
  getProvinceById: (id: number) => Province | null;
  getRegionById: (id: number) => Region | null;
  getRegionsByProvinceId: (provinceId: number) => Region[];
}

const initialState: DistrictState = {
  selectedProvince: null,
  selectedDistrict: null,
  provinces: provinceData as Province[],
  regions: regionsData as Region[],
};

export const createDistrictSlice: StateCreator<DistrictSlice> = (set, get) => ({
  district: initialState,
  
  setSelectedProvince: (provinceId: number | null) => {
    const currentState = get();
    const province = provinceId ? currentState.getProvinceById(provinceId) : null;
    
    set((state) => ({
      district: {
        ...state.district,
        selectedProvince: province,
        // province 변경시 district는 유지 (null로 초기화하지 않음)
      },
    }));
  },
  
  setSelectedDistrict: (districtId: number | null) => {
    const currentState = get();
    const district = districtId ? currentState.getRegionById(districtId) : null;
    
    set((state) => ({
      district: {
        ...state.district,
        selectedDistrict: district,
      },
    }));
  },
  
  clearDistrictSelection: () => {
    set((state) => ({
      district: {
        ...state.district,
        selectedProvince: null,
        selectedDistrict: null,
      },
    }));
  },

  getProvinceById: (id: number) => {
    const currentState = get();
    // 직접 JSON 데이터 사용
    const provinces = provinceData as Province[];
    return provinces.find(province => province.id === id) || null;
  },

  getRegionById: (id: number) => {
    const currentState = get();
    // 직접 JSON 데이터 사용
    const regions = regionsData as Region[];
    return regions.find(region => region.id === id) || null;
  },

  getRegionsByProvinceId: (provinceId: number) => {
    const currentState = get();
    // 직접 JSON 데이터 사용
    const regions = regionsData as Region[];
    return regions.filter(region => region.province_id === provinceId);
  },
});
