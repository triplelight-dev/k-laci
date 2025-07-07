'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div
        style={{
          maxWidth: '500px',
          padding: '40px',
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* 에러 아이콘 */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#ff6b6b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: '40px',
            color: 'white',
          }}
        >
          ⚠️
        </div>

        {/* 제목 */}
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#2c3e50',
            marginBottom: '16px',
          }}
        >
          오류가 발생했습니다
        </h1>

        {/* 설명 */}
        <p
          style={{
            fontSize: '16px',
            color: '#7f8c8d',
            marginBottom: '32px',
            lineHeight: '1.6',
          }}
        >
          죄송합니다. 예상치 못한 오류가 발생했습니다.
          <br />
          {countdown}초 후 홈페이지로 이동합니다.
        </p>

        {/* 카운트다운 */}
        <div
          style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#3498db',
            marginBottom: '32px',
          }}
        >
          {countdown}
        </div>

        {/* 버튼들 */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => reset()}
            style={{
              padding: '12px 24px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2980b9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3498db';
            }}
          >
            다시 시도
          </button>

          <button
            onClick={() => router.push('/')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#95a5a6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#7f8c8d';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#95a5a6';
            }}
          >
            홈으로 이동
          </button>
        </div>

        {/* 에러 상세 정보 (개발 환경에서만 표시) */}
        {process.env.NODE_ENV === 'development' && (
          <details
            style={{
              marginTop: '32px',
              padding: '16px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef',
            }}
          >
            <summary
              style={{
                cursor: 'pointer',
                fontWeight: '500',
                color: '#495057',
                marginBottom: '8px',
              }}
            >
              에러 상세 정보 (개발용)
            </summary>
            <pre
              style={{
                fontSize: '12px',
                color: '#6c757d',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                margin: 0,
              }}
            >
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
} 