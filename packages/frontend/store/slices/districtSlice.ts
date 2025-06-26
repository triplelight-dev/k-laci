import provinceData from '@/data/province_data.json';
import regionsData from '@/data/regions_data.json';
import { StateCreator } from 'zustand';
import {
  DistrictSlice,
  DistrictState,
  Province,
  Region,
} from '../types/district';

const initialState: DistrictState = {
  selectedProvince: null,
  selectedDistrict: null,
};

export const createDistrictSlice: StateCreator<DistrictSlice> = (set, get) => ({
  district: initialState,
  provinces: provinceData as Province[],
  regions: regionsData as Region[],

  setSelectedProvince: (provinceId: number | null) => {
    const currentState = get();
    const province = provinceId
      ? currentState.getProvinceById(provinceId)
      : null;

    set((state) => ({
      district: {
        ...state.district,
        selectedProvince: province,
        selectedDistrict: null, // province 변경시 district 초기화
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
    return (
      currentState.provinces.find((province) => province.id === id) || null
    );
  },

  getRegionById: (id: number) => {
    const currentState = get();
    return currentState.regions.find((region) => region.id === id) || null;
  },

  getRegionsByProvinceId: (provinceId: number) => {
    const currentState = get();
    return currentState.regions.filter(
      (region) => region.province_id === provinceId,
    );
  },
});
