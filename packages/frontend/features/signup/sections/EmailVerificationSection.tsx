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
          backgroundColor: '#F4F4F4',
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
              backgroundColor: 'white',
              borderRadius: '50px',
              padding: '40px 100px',
            }}
          >
            {/* 1/2 단계 뱃지 */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '5px',
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
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                marginBottom: '2rem',
              }}
            >
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
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                marginBottom: '30px',
              }}
            >
              {descriptionTexts.map((text, index) => (
                <div
                  key={index}
                  style={{
                    lineHeight: '1.5',
                    fontSize: '16px',
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
          marginTop: '30px',
          fontSize: '16px',
        }}
      >
        <div
          style={{
            color: '#000000',
            lineHeight: '2',
          }}
        >
          이미 계정이 있으신가요?{' '}
        </div>
        <a
          href="/auth/login"
          style={{
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
  );
}
