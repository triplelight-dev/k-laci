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

          {/* 설명 텍스트 */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
              maxWidth: '400px',
            }}
          >
            {descriptionTexts.map((text, index) => (
              <p
                key={index}
                style={{
                  fontSize: '14px',
                  color: '#6B7280',
                  marginBottom: '0.5rem',
                }}
              >
                {text}
              </p>
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
  );
} 