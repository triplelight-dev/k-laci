import CommonInput from '@/components/atoms/CommonInput';

interface CodeVerificationFormProps {
  verificationCode: string;
  setVerificationCode: (code: string) => void;
  isVerifying: boolean;
  isLoading: boolean;
  countdown: number;
  onSubmit: (e: React.FormEvent) => void;
  onResend: () => void;
  formatTime: (seconds: number) => string;
  mobile: boolean
}

export default function CodeVerificationForm({
  verificationCode,
  setVerificationCode,
  isVerifying,
  isLoading,
  countdown,
  onSubmit,
  onResend,
  formatTime,
  mobile
}: CodeVerificationFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        width: '100%',
        maxWidth: mobile ? '100%' : '540px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 인증번호 입력 */}
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <CommonInput
          id="verificationCode"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          placeholder="인증번호를 입력해주세요"
          required={true}
          isRequired={false}
          inputStyle={{
            borderRadius: '14px',
          }}
        />
      </div>

      {/* 카운트다운 - 좌측 정렬로 변경 */}
      {(
        <div
          style={{
            fontSize: '14px',
            color: '#9A9EA3',
            textAlign: 'left',
            width: '100%',
            marginTop: '-10px', // 입력창과의 간격 조정
            marginBottom: '43px',
            paddingLeft: '21px',

          }}
        >
          남은시간 <span style={{ color: '#000000', fontWeight: '500' }}>{formatTime(countdown)}</span>
        </div>
      )}


      {/* 인증번호 검증 버튼 */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          type="submit"
          disabled={isVerifying}
          style={{
            width: '100%',
            height: '50px',
            backgroundColor: isVerifying ? '#9CA3AF' : '#000000',
            color: 'white',
            borderRadius: '14px',
            fontWeight: '500',
            cursor: isVerifying ? 'not-allowed' : 'pointer',
            border: 'none',
            transition: 'background-color 0.2s',
            fontSize: '16px',
          }}
          onMouseEnter={(e) => {
            if (!isVerifying) {
              e.currentTarget.style.backgroundColor = '#1F2937';
            }
          }}
          onMouseLeave={(e) => {
            if (!isVerifying) {
              e.currentTarget.style.backgroundColor = '#000000';
            }
          }}
        >
          {isVerifying ? (
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
                  borderRadius: '14px',
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
            '인증번호 확인'
          )}
        </button>

        {/* 재발송 버튼 */}
        <button
          type="button"
          onClick={onResend}
          disabled={isLoading || countdown > 0}
          style={{
            width: '100%',
            height: '50px',
            backgroundColor: 'transparent',
            color: countdown > 0 ? '#9CA3AF' : '#000000',
            borderRadius: '14px',
            fontWeight: '500',
            cursor: countdown > 0 ? 'not-allowed' : 'pointer',
            border: '1px solid #D1D5DB',
            transition: 'all 0.2s',
            fontSize: '14px',
          }}
          onMouseEnter={(e) => {
            if (countdown === 0) {
              e.currentTarget.style.backgroundColor = '#F9FAFB';
            }
          }}
          onMouseLeave={(e) => {
            if (countdown === 0) {
              e.currentTarget.style.backgroundColor = 'transparent';
            }
          }}
        >
          {isLoading ? '처리 중...' : '인증번호 재발송'}
        </button>
      </div>

    </form>
  );
} 