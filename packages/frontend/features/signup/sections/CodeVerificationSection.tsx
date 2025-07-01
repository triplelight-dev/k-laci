import CodeVerificationForm from '../components/CodeVerificationForm';

interface CodeVerificationSectionProps {
  verificationCode: string;
  setVerificationCode: (code: string) => void;
  isVerifying: boolean;
  isLoading: boolean;
  countdown: number;
  onSubmit: (e: React.FormEvent) => void;
  onResend: () => void;
  onBackToStep1: () => void;
  formatTime: (seconds: number) => string;
  verificationError: string;
}

export default function CodeVerificationSection({
  verificationCode,
  setVerificationCode,
  isVerifying,
  isLoading,
  countdown,
  onSubmit,
  onResend,
  onBackToStep1,
  formatTime,
  verificationError,
}: CodeVerificationSectionProps) {
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
              marginBottom: '2rem',
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
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1
              style={{
                fontSize: '1.875rem',
                fontWeight: '700',
                color: '#111827',
              }}
            >
              이메일 인증
            </h1>
          </div>

          {/* 폼 */}
          <CodeVerificationForm
            verificationCode={verificationCode}
            setVerificationCode={setVerificationCode}
            isVerifying={isVerifying}
            isLoading={isLoading}
            countdown={countdown}
            onSubmit={onSubmit}
            onResend={onResend}
            onBackToStep1={onBackToStep1}
            formatTime={formatTime}
          />

          {/* 인증 에러 메시지 */}
          {verificationError && (
            <div
              style={{
                fontSize: '14px',
                color: '#EF4444',
                textAlign: 'center',
                marginTop: '1rem',
              }}
            >
              {verificationError}
            </div>
          )}

          {/* 로그인 링크 */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '2rem',
            }}
          >
            <span
              style={{
                fontSize: '14px',
                color: '#000000',
              }}
            >
              이미 계정이 있으신가요?{' '}
            </span>
            <a
              href="/auth/login"
              style={{
                fontSize: '14px',
                color: '#000000',
                textDecoration: 'underline',
                textDecorationColor: '#000000',
                textDecorationThickness: '1px',
                fontWeight: '500',
              }}
            >
              로그인 바로가기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 