'use client';

import { useLogin } from '@/features/auth/hooks/useLogin';
import LoginSection from '@/features/auth/sections/LoginSection';

export default function LoginPageClient() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    error,
    handleSubmit,
  } = useLogin();

  return (
    <LoginSection
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      error={error}
    />
  );
} 