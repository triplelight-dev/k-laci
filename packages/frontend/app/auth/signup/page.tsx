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
            cursor: 'pointer',
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '30px',
              padding: '20px',
              paddingTop: '30px',
              maxWidth: '600px',
              margin: '0 1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'default',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 타이틀 */}
            <div
              style={{
                paddingTop: '30px',
                paddingBottom: '10px',
                fontSize: '30px',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '30px',
                textAlign: 'center',
              }}
            >
              인증메일 발송 완료
            </div>

            {/* 이메일 주소 안내 */}
            <div style={{ marginBottom: '30px', textAlign: 'center' }}>
              {[
                `입력하신 주소 '${email}'로`,
                '발송된 인증 메일을 확인해주세요.',
              ].map((text, index) => (
                <div
                  key={index}
                  style={{
                    color: 'black',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: 1.5,
                  }}
                >
                  {text}
                </div>
              ))}
            </div>

            {/* 추가 안내 */}
            <div
              style={{
                marginBottom: '3rem',
                textAlign: 'center',
                background: '#F5F5F5',
                padding: '20px 50px',
                borderRadius: '10px',
              }}
            >
              {[
                '받은 편지함에서 인증 메일을 확인할 수 없는 경우',
                "스팸 메일함이나 전체 메일함에서 'KLACI'를 검색해주세요.",
              ].map((text, index) => (
                <div
                  key={index}
                  style={{
                    color: 'black',
                    fontSize: '16px',
                    marginBottom: '0.5rem',
                  }}
                >
                  {text}
                </div>
              ))}
            </div>

            {/* 닫기 버튼 */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                width: '100%',
                height: '50px',
                backgroundColor: '#000000',
                color: 'white',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1F2937';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#000000';
              }}
            >
              닫기
            </button>
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
