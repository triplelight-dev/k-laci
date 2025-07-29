import ResetPasswordForm from '../components/ResetPasswordForm';

interface ResetPasswordSectionProps {
  newPassword: string;
  setNewPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (password: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  error: string;
  success: string;
}

export default function ResetPasswordSection({
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  isLoading,
  onSubmit,
  error,
  success,
}: ResetPasswordSectionProps) {
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
            backgroundColor: 'white',
          }}
        >
          {/* RESET PASSWORD 뱃지 */}
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
              RESET PASSWORD
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
              비밀번호 재설정
            </h1>
          </div>

          {/* 폼 */}
          <ResetPasswordForm
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            isLoading={isLoading}
            onSubmit={onSubmit}
            error={error}
            success={success}
          />

          {/* 로그인 링크 */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '46px',
            }}
          >
            <span
              style={{
                fontSize: '14px',
                color: '#666666',
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
                fontWeight: '500',
              }}
            >
              로그인하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
