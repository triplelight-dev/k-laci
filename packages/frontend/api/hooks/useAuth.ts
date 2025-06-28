import { useCallback, useState } from 'react';
import { useAuthActions, useAuth as useAuthStore } from '../../store';
import {
  AuthService,
  SignInRequest,
  SignUpRequest,
} from '../services/auth.service';
import { ApiError } from '../types/api.types';

export const useAuth = () => {
  const authState = useAuthStore();
  const { setIsLoggedIn } = useAuthActions();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const signIn = useCallback(
    async (credentials: SignInRequest) => {
      setLoading(true);
      setError(null);

      try {
        const response = await AuthService.signIn(credentials);
        if (response.success) {
          if (typeof window !== 'undefined') {
            localStorage.setItem('auth-token', response.data.token);
          }
          setIsLoggedIn(true);
          return response.data;
        }
      } catch (err: any) {
        const apiError: ApiError = {
          message: err.response?.data?.message || '로그인에 실패했습니다.',
          status: err.response?.status || 500,
        };
        setError(apiError);
        throw apiError;
      } finally {
        setLoading(false);
      }
    },
    [setIsLoggedIn],
  );

  const signUp = useCallback(
    async (userData: SignUpRequest) => {
      setLoading(true);
      setError(null);

      try {
        const response = await AuthService.signUp(userData);
        if (response.success) {
          if (typeof window !== 'undefined') {
            localStorage.setItem('auth-token', response.data.token);
          }
          setIsLoggedIn(true);
          return response.data;
        }
      } catch (err: any) {
        const apiError: ApiError = {
          message: err.response?.data?.message || '회원가입에 실패했습니다.',
          status: err.response?.status || 500,
        };
        setError(apiError);
        throw apiError;
      } finally {
        setLoading(false);
      }
    },
    [setIsLoggedIn],
  );

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
    signIn,
    signUp,
    signOut,
  };
};
