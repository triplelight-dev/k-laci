'use client';

import { useResetPassword } from '@/features/auth/hooks/useResetPassword';
import ResetPasswordSection from '@/features/auth/sections/ResetPasswordSection';

export default function ResetPasswordPageClient() {
  const {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    error,
    success,
    handleSubmit,
  } = useResetPassword();

  return (
    <ResetPasswordSection
      newPassword={newPassword}
      setNewPassword={setNewPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      error={error}
      success={success}
    />
  );
}
