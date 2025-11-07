'use client';

import { useLogin } from '@/features/auth/hooks/useLogin';
import LoginSection from '@/features/auth/sections/LoginSection';
import { useIsMobile } from '@/hooks';

interface LoginPageClientProps {
  from?: string;
}

export default function LoginPageClient({ from }: LoginPageClientProps) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    error,
    handleSubmit,
  } = useLogin(from);

  const isMobile = useIsMobile();

  return (
    <LoginSection
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      error={error}
      mobile={isMobile}
    />
  );
} 