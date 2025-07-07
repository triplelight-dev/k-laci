'use client';

import { useAuth, useAuthActions } from '@/store';
import { useEffect } from 'react';

export const useAuthPersistence = () => {
  const { isLoggedIn, user, access_token } = useAuth();
  const { setUser, setAccessToken, setIsLoggedIn } = useAuthActions();

  // 컴포넌트 마운트 시 로컬 스토리지에서 상태 복원
  useEffect(() => {
    const savedToken = localStorage.getItem('access_token');
    const savedUserId = localStorage.getItem('user_id');
    const savedUserProfile = localStorage.getItem('user_profile');

    if (savedToken && savedUserId && savedUserProfile) {
      try {
        const userProfile = JSON.parse(savedUserProfile);
        const user = {
          user_id: savedUserId,
          email: userProfile.email,
          profile: userProfile,
        };
        
        setUser(user);
        setAccessToken(savedToken);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Failed to restore auth state:', error);
        // 잘못된 데이터는 정리
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_profile');
      }
    }
  }, [setUser, setAccessToken, setIsLoggedIn]);

  // 상태 변경 시 로컬 스토리지 업데이트
  useEffect(() => {
    if (isLoggedIn && user && access_token) {
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('user_id', user.user_id);
      localStorage.setItem('user_profile', JSON.stringify(user.profile));
    } else if (!isLoggedIn) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user_id');
      localStorage.removeItem('user_profile');
    }
  }, [isLoggedIn, user, access_token]);
}; 