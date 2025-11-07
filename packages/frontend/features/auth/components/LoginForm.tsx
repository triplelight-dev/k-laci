'use client';

import Button from '@/components/atoms/buttons/Button';
import LoginInput from '@/components/atoms/LoginInput';
import { useIsMobile } from '@/hooks';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface LoginFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  error: string;
}

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  onSubmit,
  error,
}: LoginFormProps) {
  const isMobile = useIsMobile();
  const router = useRouter();

  // 🔑 자동 로그인(상태 유지) 체크박스 상태
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = () => {
    router.push('/auth/signup');
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{
          width: '100%',
          maxWidth: isMobile ? '100%' : '540px',
          position: 'relative'
        }}
      >
        {/* 이메일 입력 */}
        <div style={{ marginBottom: '1rem' }}>
          <LoginInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="가입한 이메일을 입력해 주세요"
            required
            onClear={() => setEmail('')}
          />
        </div>

        {/* 비밀번호 입력 */}
        <div style={{ marginBottom: '65px' }}>
          <LoginInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해 주세요"
            required
            onClear={() => setPassword('')}
          />
        </div>

        {/* ⭐ 자동 로그인 체크박스 구현부 ⭐ */}
        {/* <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            style={{ marginRight: '8px' }}
          />
          **로그인 상태 유지 (자동 로그인)**
        </label> */}

        {/* 에러 메시지 */}
        {error && (
          <div
            style={{
              position: 'absolute',
              bottom:  isMobile ? '90px' :'77px',
              left: '0',
              right: '0',
              fontSize: '14px',
              fontWeight: '500',
              color: '#EF4444',
              textAlign: isMobile ? 'left' : 'center',
              marginTop: '1rem',
            }}
          >
            {error}
          </div>
        )}


        {/* 로그인 버튼 */}
        <Button
          type='submit'
          label={isLoading ? '로그인 중...' : '로그인'}
          variant='primary'
          theme='light'
          disabled={isLoading}

          padding='14px 32px'
          fontSize='18px'
          fontWeight='700'
          borderRadius='14px'
          width='100%'

          style={{
            backgroundColor: '#000000',
            color: 'white',
            border: 'none',
            justifyContent: 'center',
          }}
        />

      </form>

      {isMobile && (
        <>
          {/* 회원 가입 버튼 */}
          <Button
            type='button'
            label='회원가입'
            variant='primary'
            theme='dark'
            padding='14px 32px'
            fontSize='18px'
            fontWeight='700'
            borderRadius='14px'
            width='100%'
            onClick={handleSignUp}

            style={{
              border: '1px solid #000',
              justifyContent: 'center',
              marginTop: '12px'
             }}
          />
        </>
      )}
    </>
  );
}
