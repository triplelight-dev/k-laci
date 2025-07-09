import StepBadge from '@/components/atoms/StepBadge';
import EmailVerificationForm from '../components/EmailVerificationForm';

interface EmailVerificationSectionProps {
  email: string;
  setEmail: (email: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  error: string;
}

export default function EmailVerificationSection({
  email,
  setEmail,
  isLoading,
  onSubmit,
  error,
}: EmailVerificationSectionProps) {
  const descriptionTexts = [
    'KLACI 계정으로 사용할 이메일 인증이 필요합니다.',
    '이메일 도메인에 따라 회원 유형이 자동 분류되며 맞춤 정보가 제공됩니다.',
  ];

  return (
    <div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            margin: '0 1rem',
          }}
        >
          {/* 메인 컨테이너 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50px',
              padding: '60px 90px',
              backgroundColor: '#FAFAFA',
            }}
          >
            {/* 1/2 단계 뱃지 */}
            <StepBadge step="1/2" />

            {/* 타이틀 */}
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                marginBottom: '66px',
              }}
            >
              <h1
                style={{
                  fontSize: '30px',
                  fontWeight: '600',
                  color: '#000000',
                }}
              >
                이메일로 회원가입
              </h1>
            </div>

            {/* 설명 텍스트 */}
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                marginBottom: '68px',
              }}
            >
              {descriptionTexts.map((text, index) => (
                <div
                  key={index}
                  style={{
                    fontSize: '18px',
                    fontWeight: '400',
                    color: '#000000',
                    lineHeight: '28px',
                  }}
                >
                  {text}
                </div>
              ))}
            </div>

            {/* 폼 */}
            <EmailVerificationForm
              email={email}
              setEmail={setEmail}
              isLoading={isLoading}
              onSubmit={onSubmit}
            />

            {/* 에러 메시지 */}
            {error && (
              <div
                style={{
                  fontSize: '14px',
                  color: '#EF4444',
                  textAlign: 'center',
                  marginTop: '1rem',
                }}
              >
                {error}
              </div>
            )}
          </div>
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
