'use client';

import { AuthService } from '@/api/services/auth.service';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [token, setToken] = useState<string | null>(null);

  // 컴포넌트 마운트 시 토큰 추출
  useEffect(() => {
    let extractedToken = searchParams.get('token');
    
    if (!extractedToken) {
      const hashMatch = window.location.hash.match(/access_token=([^&]+)/);
      extractedToken = hashMatch?.[1] || null;
    }
    
    if (!extractedToken) {
      const hashMatch = window.location.hash.match(/token=([^&]+)/);
      extractedToken = hashMatch?.[1] || null;
    }
    
    if (!extractedToken) {
      const urlParams = new URLSearchParams(window.location.search);
      const verifyUrl = urlParams.get('redirect_to');
      if (verifyUrl) {
        const verifyUrlParams = new URLSearchParams(verifyUrl.split('?')[1]);
        extractedToken = verifyUrlParams.get('token');
      }
    }

    if (extractedToken) {
      setToken(extractedToken);
    } else {
      setError('유효하지 않은 링크입니다.');
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!token) {
      setError('유효하지 않은 링크입니다.');
      return;
    }

    // 비밀번호 유효성 검사
    if (newPassword.length < 6) {
      setError('비밀번호는 최소 6자 이상이어야 합니다.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await AuthService.resetPassword({ token, newPassword });
      
      if (response.success) {
        setSuccess('비밀번호가 성공적으로 재설정되었습니다.');
        // 3초 후 로그인 페이지로 리다이렉트
        setTimeout(() => {
          router.push('/auth/login');
        }, 3000);
      } else {
        setError(response.message || '비밀번호 재설정에 실패했습니다.');
      }
    } catch (err: any) {
      if (err.response?.status === 401) {
        setError('토큰이 만료되었거나 유효하지 않습니다. 새로운 비밀번호 재설정 이메일을 요청하세요.');
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError('비밀번호 재설정 중 오류가 발생했습니다.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    error,
    success,
    handleSubmit,
  };
}
