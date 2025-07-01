import LoginForm from '../components/LoginForm';

interface LoginSectionProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  error: string;
}

export default function LoginSection({
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  onSubmit,
  error,
}: LoginSectionProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F4F4',
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
            borderRadius: '50px',
            padding: '40px 100px',
          }}
        >
          {/* SIGN IN 뱃지 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '5px',
            }}
          >
            <div
              style={{
                padding: '4px 8px',
                border: '1px solid #000000',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                fontSize: '14px',
                color: '#000000',
              }}
            >
              SIGN IN
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
              회원 로그인
            </h1>
          </div>

          {/* 폼 */}
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
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

          {/* 회원가입 링크 */}
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
              아직 회원이 아니신가요?{' '}
            </span>
            <a
              href="/auth/signup"
              style={{
                fontSize: '14px',
                color: '#000000',
                textDecoration: 'underline',
                textDecorationColor: '#000000',
                textDecorationThickness: '1px',
                fontWeight: '500',
              }}
            >
              회원가입 바로가기
            </a>
          </div>

          {/* 도움말 링크 */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '15px',
            }}
          >
            <a
              href="#"
              style={{
                fontSize: '14px',
                color: '#000000',
                textDecoration: 'underline',
                textDecorationColor: '#000000',
                textDecorationThickness: '1px',
              }}
            >
              도움이 필요하신가요?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
