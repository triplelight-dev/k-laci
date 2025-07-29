interface ResetPasswordFormProps {
  newPassword: string;
  setNewPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (password: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  error: string;
  success: string;
}

export default function ResetPasswordForm({
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  isLoading,
  onSubmit,
  error,
  success,
}: ResetPasswordFormProps) {
  return (
    <form onSubmit={onSubmit} style={{ width: '100%', maxWidth: '400px' }}>
      {/* 에러 메시지 */}
      {error && (
        <div
          style={{
            padding: '12px 16px',
            backgroundColor: '#FEE2E2',
            border: '1px solid #FCA5A5',
            borderRadius: '8px',
            marginBottom: '20px',
            color: '#DC2626',
            fontSize: '14px',
          }}
        >
          {error}
        </div>
      )}

      {/* 성공 메시지 */}
      {success && (
        <div
          style={{
            padding: '12px 16px',
            backgroundColor: '#DCFCE7',
            border: '1px solid #86EFAC',
            borderRadius: '8px',
            marginBottom: '20px',
            color: '#16A34A',
            fontSize: '14px',
          }}
        >
          {success}
        </div>
      )}

      {/* 새 비밀번호 입력 */}
      <div style={{ marginBottom: '20px' }}>
        <label
          htmlFor="newPassword"
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
          }}
        >
          새 비밀번호
        </label>
        <input
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="새 비밀번호를 입력하세요"
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #D1D5DB',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none',
            backgroundColor: '#FFFFFF',
          }}
          required
        />
      </div>

      {/* 비밀번호 확인 입력 */}
      <div style={{ marginBottom: '32px' }}>
        <label
          htmlFor="confirmPassword"
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
          }}
        >
          비밀번호 확인
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="새 비밀번호를 다시 입력하세요"
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #D1D5DB',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none',
            backgroundColor: '#FFFFFF',
          }}
          required
        />
      </div>

      {/* 제출 버튼 */}
      <button
        type="submit"
        disabled={isLoading}
        style={{
          width: '100%',
          padding: '14px 24px',
          backgroundColor: isLoading ? '#9CA3AF' : '#000000',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '500',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s',
        }}
      >
        {isLoading ? '처리 중...' : '비밀번호 재설정'}
      </button>
    </form>
  );
}
