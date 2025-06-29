import provinceData from '@/data/province_data.json';
import regionsData from '@/data/regions_data.json';
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
  setSelectedDistrict: (districtId: number | null) => void;
  setSelectedRegion: (region: RegionWithDetails | null) => void;
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
    const province = provinceId ? get().getProvinceById(provinceId) : null;
    
    set((state) => ({
      district: {
        ...state.district,
        selectedProvince: province,
        // province 변경시 district와 region은 유지 (null로 초기화하지 않음)
      },
    }));
  },
  
  setSelectedDistrict: (districtId: number | null) => {
    const district = districtId ? get().getRegionById(districtId) : null;
    
    set((state) => ({
      district: {
        ...state.district,
        selectedDistrict: district,
        regionLoading: true,
        // selectedRegion은 유지 (새 데이터 로딩 중에도 기존 데이터 표시)
      },
    }));
  },

  setSelectedRegion: (region: RegionWithDetails | null) => {
    set((state) => ({
      district: {
        ...state.district,
        selectedRegion: region,
        regionLoading: false,
      },
    }));
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
