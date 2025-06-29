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
  clearDistrictSelection: () => void;
  getProvinceById: (id: number) => Province | null;
  getRegionById: (id: number) => Region | null;
  getRegionsByProvinceId: (provinceId: number) => Region[];
}

const initialState: DistrictState = {
  selectedProvince: null,
  selectedDistrict: null,
  selectedRegion: null,
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
        // district 변경시 region은 초기화 (새로운 region 정보를 가져올 예정)
        selectedRegion: null,
      },
    }));
  },

  setSelectedRegion: (region: RegionWithDetails | null) => {
    console.log('🏪 Store: Setting selectedRegion:', region);
    if (region) {
      console.log('🏪 Store: Region key_index_ranks:', region.key_index_ranks);
    }
    set((state) => ({
      district: {
        ...state.district,
        selectedRegion: region,
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
