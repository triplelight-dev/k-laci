'use client';

import CommonInput from '@/components/atoms/CommonInput';
import PasswordInput from '@/components/atoms/PasswordInput';

interface LoginFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  onSubmit,
}: LoginFormProps) {
  return (
    <form onSubmit={onSubmit} style={{ width: '100%', maxWidth: '400px' }}>
      {/* 이메일 입력 */}
      <div style={{ marginBottom: '1.5rem' }}>
        <CommonInput
          id="login-email"
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          isRequired
        />
      </div>

      {/* 비밀번호 입력 */}
      <div style={{ marginBottom: '2rem' }}>
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
          required
        />
      </div>

      {/* 로그인 버튼 */}
      <button
        type="submit"
        disabled={isLoading}
        style={{
          width: '100%',
          padding: '1rem',
          backgroundColor: '#3B82F6',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          opacity: isLoading ? 0.6 : 1,
        }}
      >
        {isLoading ? '로그인 중...' : '로그인'}
      </button>
    </form>
  );
} 