import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AuthSlice, createAuthSlice } from './slices/authSlice';
import { DistrictSlice, createDistrictSlice } from './slices/districtSlice';

// 추후 다른 슬라이스들이 추가될 수 있음
type StoreState = AuthSlice & DistrictSlice;

// 스토어 생성
export const useStore = create<StoreState>()(
  devtools(
    persist(
      (...args) => ({
        ...createAuthSlice(...args),
        ...createDistrictSlice(...args),
      }),
      {
        name: 'k-laci-store', // localStorage에 저장될 키 이름
        partialize: (state) => ({
          auth: {
            isLoggedIn: state.auth.isLoggedIn,
          },
          district: {
            selectedProvince: state.district.selectedProvince,
            selectedDistrict: state.district.selectedDistrict,
          },
        }), // 저장할 상태 선택
      },
    ),
  ),
);

// 편의를 위한 훅
export const useAuth = () => useStore((state) => state.auth);
export const useAuthActions = () => useStore((state) => ({
  setIsLoggedIn: state.setIsLoggedIn,
}));

export const useDistrict = () => useStore((state) => state.district);

// 개별 action들로 export (무한 루프 방지)
export const useSetSelectedProvince = () => useStore((state) => state.setSelectedProvince);
export const useSetSelectedDistrict = () => useStore((state) => state.setSelectedDistrict);
export const useClearDistrictSelection = () => useStore((state) => state.clearDistrictSelection); 