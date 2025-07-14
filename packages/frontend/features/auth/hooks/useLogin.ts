'use client';

import { AuthService } from '@/api/services/auth.service';
import { useLogin as useLoginAction } from '@/store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function useLogin() {
  const router = useRouter();
  const loginAction = useLoginAction();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await AuthService.signIn({ email, password });
      
      if (response.success) {
        // Zustand 스토어에 로그인 정보 저장
        loginAction(response.data, response.data.access_token);
        
        // localStorage에 토큰 저장 (API 클라이언트에서 사용)
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('user_id', response.data.user_id);
        localStorage.setItem('user_profile', JSON.stringify(response.data.profile));
        
        // 결과 페이지로 리다이렉트
        router.push('/results');
      } else {
        setError(response.message || '로그인에 실패했습니다.');
      }
    } catch (err: any) {
      console.error('Login error:', err);
      
      // API 에러 응답 처리
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError('로그인 중 오류가 발생했습니다.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    error,
    handleSubmit,
  };
} 