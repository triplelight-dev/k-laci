'use client';

import { getCurrentEnvConfig } from '@/config/environment';
import { useIsLoggedIn, useLogin as useLoginAction } from '@/store';
import { useEffect } from 'react';

export const useDevAuth = () => {
  const isLoggedIn = useIsLoggedIn();
  const loginAction = useLoginAction();
  const envConfig = getCurrentEnvConfig();

  useEffect(() => {
    // 개발 환경에서 자동 로그인 설정이 활성화된 경우
    if (envConfig.autoLogin && !isLoggedIn) {
      const { devUser, devToken } = envConfig;

      // Zustand 스토어에 로그인 정보 저장
      loginAction(devUser, devToken);

      // localStorage에도 저장 (API 클라이언트에서 사용)
      localStorage.setItem('access_token', devToken);
      localStorage.setItem('user_id', devUser.user_id);
      localStorage.setItem('user_profile', JSON.stringify(devUser.profile));

      console.log('🔧 Development mode: Auto-login enabled');
      console.log('👤 Dev user:', devUser.profile.name);
    }
  }, [isLoggedIn, loginAction, envConfig]);

  return isLoggedIn;
}; 