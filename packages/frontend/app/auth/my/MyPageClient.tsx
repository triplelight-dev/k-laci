'use client';

import { useLogin } from '@/features/auth/hooks/useLogin';
import MySection from '@/features/auth/sections/MySection';

export default function MyPageClient() {
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
    <MySection
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