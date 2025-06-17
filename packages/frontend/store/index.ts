import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AuthSlice, createAuthSlice } from './slices/authSlice';

// 추후 다른 슬라이스들이 추가될 수 있음
type StoreState = AuthSlice;

// 스토어 생성
export const useStore = create<StoreState>()(
  devtools(
    persist(
      (...args) => ({
        ...createAuthSlice(...args),
      }),
      {
        name: 'k-laci-store', // localStorage에 저장될 키 이름
        partialize: (state) => ({
          auth: {
            isLoggedIn: state.auth.isLoggedIn,
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