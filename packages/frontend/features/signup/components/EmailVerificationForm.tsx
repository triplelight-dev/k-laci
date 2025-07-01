import CommonInput from '@/components/atoms/CommonInput';

interface EmailVerificationFormProps {
  email: string;
  setEmail: (email: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function EmailVerificationForm({
  email,
  setEmail,
  isLoading,
  onSubmit,
}: EmailVerificationFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      {/* 이메일 입력 */}
      <CommonInput
        id="email"
        label="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일을 입력해주세요"
        type="email"
        required={true}
        isRequired={true}
      />

      {/* 인증번호 발송 버튼 */}
      <button
        type="submit"
        disabled={isLoading}
        style={{
          width: '100%',
          height: '50px',
          backgroundColor: isLoading ? '#9CA3AF' : '#000000',
          color: 'white',
          borderRadius: '0.5rem',
          fontWeight: '500',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          border: 'none',
          transition: 'background-color 0.2s',
          fontSize: '16px',
        }}
        onMouseEnter={(e) => {
          if (!isLoading) {
            e.currentTarget.style.backgroundColor = '#1F2937';
          }
        }}
        onMouseLeave={(e) => {
          if (!isLoading) {
            e.currentTarget.style.backgroundColor = '#000000';
          }
        }}
      >
        {isLoading ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                animation: 'spin 1s linear infinite',
                borderRadius: '50%',
                height: '1rem',
                width: '1rem',
                border: '2px solid transparent',
                borderBottomColor: 'white',
                marginRight: '0.5rem',
              }}
            ></div>
            처리 중...
          </div>
        ) : (
          '인증번호 발송'
        )}
      </button>
    </form>
  );
} 