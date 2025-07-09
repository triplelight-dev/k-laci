import StepBadge from '@/components/atoms/StepBadge';
import CodeVerificationForm from '../components/CodeVerificationForm';

interface CodeVerificationSectionProps {
  verificationCode: string;
  setVerificationCode: (code: string) => void;
  isVerifying: boolean;
  isLoading: boolean;
  countdown: number;
  onSubmit: (e: React.FormEvent) => void;
  onResend: () => void;
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
  formatTime,
  verificationError,
}: CodeVerificationSectionProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        // paddingTop: '80px',
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
            backgroundColor: '#FAFAFA',
            borderRadius: '50px',
            padding: '60px 90px',
          }}
        >
          {/* 1/2 단계 뱃지 */}
          <StepBadge step="1/2" />

          {/* 타이틀 */}
          <div style={{ textAlign: 'center', marginBottom: '66px' }}>
            <h1
              style={{
                fontSize: '30px',
                fontWeight: '600',
                color: '#000000',
              }}
            >
              이메일 인증
            </h1>

          </div>

          <div style={{
            fontSize: '18px',
            fontWeight: '400',
            color: '#000000',
            lineHeight: '28px',
            textAlign: 'center',
            marginBottom: '62px',
            whiteSpace: 'pre-line',
          }}>
            {`입력하신 이메일 주소로 발송된 인증번호를 입력해주세요.\n받은 편지함에서 메일을 확인할 수 없는 경우\n스팸 메일함이나 전체 메일함에서 'KLACI'를 검색해주세요.`}
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
        </div>
      </div>
      {/* 로그인 링크 */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '60px',
          fontWeight: '400',
          fontSize: '18px',
        }}
      >
        <span
          style={{
            color: '#000000',
            lineHeight: '2',
          }}
        >
          이미 계정이 있으신가요?{' '}
        </span>
        <a
          href="/auth/login"
          style={{
            display: 'inline-block',
            color: '#000000',
            textDecoration: 'underline',
            textDecorationColor: '#000000',
            textDecorationThickness: '1px',
            fontSize: '18px',
            fontWeight: '400',
          }}
        >
          로그인 바로가기
        </a>
      </div>
      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        marginBottom: '100px',
      }}>
        <a href="mailto:klaci@triplelight.co">
          <span
            style={{
              fontSize: '18px',
              fontWeight: '400',
              color: '#000000',
              textDecoration: 'underline',
              textDecorationColor: '#000000',
              textDecorationThickness: '1px',
            }}
          >
            도움이 필요하신가요?
          </span>
        </a>
      </div>
    </div>
  );
} 