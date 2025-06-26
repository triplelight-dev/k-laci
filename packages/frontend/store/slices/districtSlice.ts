import { StateCreator } from 'zustand';
import { DistrictState } from '../types/district';

export interface DistrictSlice {
  district: DistrictState;
  setSelectedProvince: (province: string) => void;
  setSelectedDistrict: (district: string) => void;
  clearDistrictSelection: () => void;
}

const initialState: DistrictState = {
  selectedProvince: '',
  selectedDistrict: '',
};

export const createDistrictSlice: StateCreator<DistrictSlice> = (set) => ({
  district: initialState,
  
  setSelectedProvince: (province: string) => {
    set((state) => ({
      district: {
        ...state.district,
        selectedProvince: province,
        selectedDistrict: '', // province 변경시 district 초기화
      },
    }));
  },
  
  setSelectedDistrict: (district: string) => {
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
        selectedProvince: '',
        selectedDistrict: '',
      },
    }));
  },
}); 