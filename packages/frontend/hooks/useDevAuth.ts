'use client';

import { useIsLoggedIn } from '@/store';

export const useDevAuth = () => {
  const isLoggedIn = useIsLoggedIn();
  
  // 개발 환경에서도 프로덕션과 동일한 로그인 로직 사용
  // 자동 로그인 기능 제거
  return isLoggedIn;
}; 