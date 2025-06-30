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
      setError(
        err.response?.data?.message || '인증메일 발송 중 오류가 발생했습니다.',
      );
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
      setError(
        err.response?.data?.message ||
          '인증메일 재발송 중 오류가 발생했습니다.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  const descriptionTexts = [
    'KLACI 계정으로 사용할 이메일 인증이 필요합니다.',
    '이메일 도메인에 따라 회원 유형이 자동 분류되며 맞춤 정보가 제공됩니다.',
  ];

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F4F4',
        paddingTop: '80px',
      }}
    >
      <div style={{ width: '100%', maxWidth: '800px', margin: '0 1rem' }}>
        {/* 메인 컨테이너 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: '50px',
            padding: '80px 100px',
          }}
        >
          {/* 1/2 단계 뱃지 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                border: '1px solid black',
                borderRadius: '12px',
                padding: '6px 12px',
                fontSize: '16px',
                fontWeight: '500',
                color: 'black',
              }}
            >
              1/2 단계
            </div>
          </div>

          {/* 타이틀 */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h1
              style={{
                fontSize: '1.875rem',
                fontWeight: '700',
                color: '#111827',
              }}
            >
              이메일로 회원가입
            </h1>
          </div>

          {/* 설명 텍스트 */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            {descriptionTexts.map((text, index) => (
              <div
                key={index}
                style={{
                  color: 'black',
                  fontSize: '0.875rem',
                  lineHeight: '1.625',
                }}
              >
                {text}
              </div>
            ))}
          </div>

          {/* 폼 */}
          <form
            onSubmit={handleEmailSubmit}
            style={{
              width: '70%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            {/* 이메일 입력 */}
            <div style={{ width: '100%' }}>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  height: '50px',
                  fontSize: '16px',
                  padding: '0 1rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.5rem',
                  outline: 'none',
                  color: '#111827',
                  boxSizing: 'border-box',
                }}
                placeholder="이메일 주소 (예: klaci@korea.kr)"
                required
                disabled={isLoading}
              />
            </div>

            {/* 에러 메시지 */}
            {error && (
              <div
                style={{
                  color: '#DC2626',
                  fontSize: '0.875rem',
                  textAlign: 'center',
                }}
              >
                {error}
              </div>
            )}

            {/* 인증메일 보내기 버튼 */}
            <button
              type="submit"
              disabled={isLoading || !email}
              style={{
                width: '100%',
                height: '50px',
                backgroundColor: isLoading || !email ? '#9CA3AF' : '#000000',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: '500',
                cursor: isLoading || !email ? 'not-allowed' : 'pointer',
                border: 'none',
                transition: 'background-color 0.2s',
                fontSize: '16px',
              }}
              onMouseEnter={(e) => {
                if (!isLoading && email) {
                  e.currentTarget.style.backgroundColor = '#1F2937';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading && email) {
                  e.currentTarget.style.backgroundColor = '#000000';
                }
              }}
            >
              {isLoading ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      animation: 'spin 1s linear infinite',
                      borderRadius: '50%',
                      height: '1rem',
                      width: '1rem',
                      border: '2px solid transparent',
                      borderBottomColor: 'white',
                      marginRight: '0.5rem',
                    }}
                  ></div>
                  인증메일 발송 중...
                </div>
              ) : (
                '인증메일 보내기'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* 인증메일 발송 완료 모달 */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              maxWidth: '28rem',
              margin: '0 1rem',
            }}
          >
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
              }}
            >
              인증메일 발송 완료
            </h3>
            <p
              style={{
                color: '#4B5563',
                marginBottom: '1.5rem',
              }}
            >
              {email}로 인증메일을 발송했습니다.
              <br />
              이메일의 링크를 클릭하여 인증을 완료해주세요.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={handleResendEmail}
                disabled={isLoading}
                style={{
                  flex: 1,
                  backgroundColor: isLoading ? '#F3F4F6' : '#E5E7EB',
                  color: '#1F2937',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  border: 'none',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.backgroundColor = '#D1D5DB';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.backgroundColor = '#E5E7EB';
                  }
                }}
              >
                {isLoading ? '재발송 중...' : '재발송'}
              </button>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  flex: 1,
                  backgroundColor: '#2563EB',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1D4ED8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#2563EB';
                }}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
