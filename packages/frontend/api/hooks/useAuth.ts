import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { useAuthActions, useAuth as useAuthStore } from '../../store';
import { AuthService } from '../services/auth.service';
import { ApiError } from '../types/api.types';

export const useAuth = () => {
  const authState = useAuthStore();
  const { setIsLoggedIn } = useAuthActions();
  const [loading] = useState(false);
  const [error] = useState<ApiError | null>(null);
  const queryClient = useQueryClient();

  const sendVerificationCode = useMutation({
    mutationFn: AuthService.sendVerificationCode,
    onError: (error) => {
      console.error('인증번호 발송 실패:', error);
    },
  });

  const verifyCode = useMutation({
    mutationFn: AuthService.verifyCode,
    onSuccess: (data) => {
      if (data.data.verified) {
        queryClient.invalidateQueries({ queryKey: ['auth'] });
      }
    },
    onError: (error) => {
      console.error('인증번호 검증 실패:', error);
    },
  });

  const signIn = useMutation({
    mutationFn: AuthService.signIn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth'] });
    },
    onError: (error) => {
      console.error('로그인 실패:', error);
    },
  });

  const signUp = useMutation({
    mutationFn: AuthService.signUp,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth'] });
    },
    onError: (error) => {
      console.error('회원가입 실패:', error);
    },
  });

  const signOut = useCallback(async () => {
    try {
      await AuthService.signOut();
    } finally {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth-token');
      }
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn]);

  return {
    user: authState,
    loading,
    error,
    sendVerificationCode,
    verifyCode,
    signUp,
    signIn,
    signOut,
  };
};
