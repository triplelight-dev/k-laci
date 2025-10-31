import LoginForm from '../components/LoginForm';

interface LoginSectionProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  error: string;
  mobile: boolean
}

export default function LoginSection({
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  onSubmit,
  error,
  mobile
}: LoginSectionProps) {
  return (
    <div
      style={{
        width: '100%',
        height: 'calc(100vh - 100px)',
        minHeight: '800px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F4F4',
      }}
    >
      <div
        style={{ width: '100%', maxWidth: '800px', margin: '0 1rem' }}>
        {/* 메인 컨테이너 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: mobile ? '' : 'center',
            justifyContent: 'center',
            borderRadius: '50px',
            padding: mobile ? '' : '40px 100px',
          }}
        >
          {!mobile && (
            <>
              {/* SIGN IN 뱃지 */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '17px',
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
              <div style={{ textAlign: 'center', marginBottom: '61px' }}>
                <h1
                  style={{
                    fontSize: '30px',
                    fontWeight: '600',
                    color: '#000000',
                  }}
                >
                  회원 로그인
                </h1>
              </div>
            </>
          )}

          {mobile && (
            <>
              {/* LOGO */}
              <img
                src='/klaci_logo_black_prod.png'
                alt="K-LACI Logo"
                style={{
                  height: '26px',
                  width: '140px',
                  margin: '50px 0px',
                }}
              />

            </>
          )}

          {/* 폼 */}
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLoading={isLoading}
            onSubmit={onSubmit}
            error={error}
          />

          {!mobile && (
            <>
              {/* 회원가입 링크 */}
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '46px',
                }}
              >
                <span
                  style={{
                    fontSize: '18px',
                    color: '#000000',
                    fontWeight: '400',
                  }}
                >
                  아직 회원이 아니신가요?{' '}
                </span>
                <a
                  href="/auth/signup"
                  style={{
                    fontSize: '18px',
                    color: '#000000',
                    textDecoration: 'underline',
                    textDecorationColor: '#000000',
                    textDecorationThickness: '1px',
                    fontWeight: '400',
                  }}
                >
                  회원가입 바로가기
                </a>
              </div>

              {/* 도움말 링크 */}
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '10px',
                }}
              >
                <a
                  href="#"
                  style={{
                    fontSize: '18px',
                    color: '#000000',
                    textDecoration: 'underline',
                    textDecorationColor: '#000000',
                    textDecorationThickness: '1px',
                  }}
                >
                  도움이 필요하신가요?
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
