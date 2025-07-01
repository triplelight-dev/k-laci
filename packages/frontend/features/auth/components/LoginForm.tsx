'use client';

import LoginInput from '@/components/atoms/LoginInput';

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
      <div style={{ marginBottom: '1rem' }}>
        <LoginInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="가입한 이메일을 입력해 주세요"
          required
        />
      </div>

      {/* 비밀번호 입력 */}
      <div style={{ marginBottom: '40px' }}>
        <LoginInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해 주세요"
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
          backgroundColor: '#000000',
          color: 'white',
          border: 'none',
          borderRadius: '14px',
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
