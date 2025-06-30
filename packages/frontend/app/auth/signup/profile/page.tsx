'use client';

import { AuthService } from '@/api/services/auth.service';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SignUpProfilePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [error, setError] = useState('');

  // URL에서 토큰 추출 - Supabase는 여러 형태의 토큰을 사용할 수 있음
  const getTokenFromUrl = () => {
    // 1. URL 파라미터에서 토큰 찾기
    const token = searchParams.get('token') || 
                  searchParams.get('access_token') || 
                  searchParams.get('refresh_token');
    
    if (token) return token;

    // 2. 해시 파라미터에서 토큰 찾기 (Supabase가 자주 사용)
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1);
      const hashParams = new URLSearchParams(hash);
      const hashToken = hashParams.get('access_token') || 
                       hashParams.get('refresh_token');
      if (hashToken) return hashToken;
    }

    return null;
  };

  const token = getTokenFromUrl();

  useEffect(() => {
    if (!token) {
      console.log('No token found in URL');
      router.push('/auth/signup');
    } else {
      console.log('Token found:', token.substring(0, 20) + '...');
    }
  }, [token, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (formData.password.length < 8) {
      setError('비밀번호는 8자 이상이어야 합니다.');
      return;
    }

    if (!formData.agreeToTerms) {
      setError('이용약관에 동의해주세요.');
      return;
    }

    setIsLoading(true);

    try {
      await AuthService.completeSignup({
        name: formData.name,
        password: formData.password,
        token: token!,
      });

      setShowCompleteModal(true);
    } catch (err: any) {
      console.error('Signup error:', err);
      setError(err.response?.data?.message || '회원가입 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: '#F4F4F4' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">인증 정보를 확인 중입니다...</p>
          <p className="text-sm text-gray-500 mt-2">잠시 후 자동으로 회원가입 페이지로 이동합니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#F4F4F4' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-center mb-8">
            회원정보 입력
          </h1>

          {/* 진행 상태 표시 */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                ✓
              </div>
              <div className="ml-2 text-sm font-medium text-green-600">이메일 인증 완료</div>
            </div>
            <div className="w-12 h-px bg-gray-300 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div className="ml-2 text-sm font-medium text-blue-600">회원정보 입력</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="홍길동"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="8자 이상 입력해주세요"
                  required
                  minLength={8}
                />
                <p className="text-xs text-gray-500 mt-1">
                  영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요
                </p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  비밀번호 확인
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="비밀번호를 다시 입력해주세요"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="mt-1 mr-2"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                  <a href="/terms" className="text-blue-600 hover:underline">이용약관</a>에 동의합니다.
                </label>
              </div>

              {error && (
                <div className="text-red-600 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    처리 중...
                  </div>
                ) : (
                  '회원가입 완료'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 회원가입 완료 모달 */}
      {showCompleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">회원가입 완료!</h3>
            <p className="text-gray-600 mb-6">
              KLACI 회원가입이 완료되었습니다.<br />
              지금 바로 서비스를 이용해보세요.
            </p>
            <button
              onClick={() => router.push('/results')}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              시작하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 