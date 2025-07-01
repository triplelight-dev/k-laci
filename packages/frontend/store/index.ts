import { useMemo } from 'react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { AuthSlice, createAuthSlice } from './slices/authSlice';
import { DistrictSlice, createDistrictSlice } from './slices/districtSlice';

// 추후 다른 슬라이스들이 추가될 수 있음
type StoreState = AuthSlice & DistrictSlice;

// devtools 제거
export const useStore = create<StoreState>()(
  devtools(
    (set, get, api) => ({
      ...createAuthSlice(set, get, api),
      ...createDistrictSlice(set, get, api),
    }),
  ),
);

// useMemo로 메모이제이션
export const useAuthActions = () => {
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);
  const setUser = useStore((state) => state.setUser);
  const setAccessToken = useStore((state) => state.setAccessToken);
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);
  
  return useMemo(() => ({
    setIsLoggedIn,
    setUser,
    setAccessToken,
    login,
    logout,
  }), [setIsLoggedIn, setUser, setAccessToken, login, logout]);
};

// Auth 관련 개별 훅들 (무한 루프 방지)
export const useAuth = () => useStore((state) => state.auth);
export const useIsLoggedIn = () => useStore((state) => state.auth.isLoggedIn);
export const useUser = () => useStore((state) => state.auth.user);
export const useAccessToken = () => useStore((state) => state.auth.access_token);

// Auth 액션들
export const useSetIsLoggedIn = () => useStore((state) => state.setIsLoggedIn);
export const useSetUser = () => useStore((state) => state.setUser);
export const useSetAccessToken = () => useStore((state) => state.setAccessToken);
export const useLogin = () => useStore((state) => state.login);
export const useLogout = () => useStore((state) => state.logout);

// District 관련
export const useDistrict = () => useStore((state) => state.district);
export const useSetSelectedProvince = () => useStore((state) => state.setSelectedProvince);
export const useSetSelectedDistrict = () => useStore((state) => state.setSelectedDistrict);
export const useSetSelectedRegion = () => useStore((state) => state.setSelectedRegion);
export const useSetRegionLoading = () => useStore((state) => state.setRegionLoading);
export const useClearDistrictSelection = () => useStore((state) => state.clearDistrictSelection);

// 유틸리티 함수들
export const useGetProvinceById = () => useStore((state) => state.getProvinceById);
export const useGetRegionById = () => useStore((state) => state.getRegionById);
export const useGetRegionsByProvinceId = () => useStore((state) => state.getRegionsByProvinceId); 