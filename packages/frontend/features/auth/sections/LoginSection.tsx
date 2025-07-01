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
          {/* 타이틀 */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1
              style={{
                fontSize: '1.875rem',
                fontWeight: '700',
                color: '#111827',
              }}
            >
              로그인
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
            <p
              style={{
                fontSize: '14px',
                color: '#6B7280',
                marginBottom: '0.5rem',
              }}
            >
              계정이 없으신가요?
            </p>
            <a
              href="/auth/signup"
              style={{
                fontSize: '14px',
                color: '#3B82F6',
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              회원가입하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 