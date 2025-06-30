'use client';

import { AuthService } from '@/api/services/auth.service';
import { useState } from 'react';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await AuthService.sendVerificationEmail({ email });
      setShowModal(true);
    } catch (err: any) {
      setError(err.response?.data?.message || '인증메일 발송 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendEmail = async () => {
    setIsLoading(true);
    setError('');

    try {
      await AuthService.sendVerificationEmail({ email });
      setShowModal(true);
    } catch (err: any) {
      setError(err.response?.data?.message || '인증메일 재발송 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#F4F4F4' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-center mb-8">
            회원가입
          </h1>
          
          {/* 진행 상태 표시 */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div className="ml-2 text-sm font-medium text-blue-600">이메일 인증</div>
            </div>
            <div className="w-12 h-px bg-gray-300 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div className="ml-2 text-sm font-medium text-gray-500">회원정보 입력</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 주소
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="example@email.com"
                  required
                  disabled={isLoading}
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    인증메일 발송 중...
                  </div>
                ) : (
                  '인증메일 보내기'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 인증메일 발송 완료 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">인증메일 발송 완료</h3>
            <p className="text-gray-600 mb-6">
              {email}로 인증메일을 발송했습니다.<br />
              이메일의 링크를 클릭하여 인증을 완료해주세요.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleResendEmail}
                disabled={isLoading}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? '재발송 중...' : '재발송'}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
