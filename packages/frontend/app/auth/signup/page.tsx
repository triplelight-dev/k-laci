'use client';

import { useSignupFlow } from '@/features/signup/hooks/useSignupFlow';
import CodeVerificationSection from '@/features/signup/sections/CodeVerificationSection';
import EmailVerificationSection from '@/features/signup/sections/EmailVerificationSection';
import ProfileSection from '@/features/signup/sections/ProfileSection';

export default function SignUpPage() {
  const {
    // State
    email,
    setEmail,
    verificationCode,
    setVerificationCode,
    isLoading,
    isVerifying,
    isCodeSent,
    error,
    verificationError,
    countdown,
    isVerified,
    isProfileLoading,
    showCompleteModal,
    userType,
    formData,
    setFormData,
    
    // Handlers
    handleEmailSubmit,
    handleCodeSubmit,
    handleResendCode,
    handleBackToStep1,
    handleSubmit,
    handleStart,
    formatTime,
  } = useSignupFlow();

  // 링크 핸들러들
  const handleReportReservationLink = () => {
    window.open('https://dev.klaci.kr', '_blank');
  };

  const handleTermsLink = () => {
    window.open('https://dev.klaci.kr', '_blank');
  };

  const handlePrivacyLink = () => {
    window.open('https://dev.klaci.kr', '_blank');
  };

  const handleMarketingLink = () => {
    window.open('https://dev.klaci.kr', '_blank');
  };

  // 2/2 단계 렌더링
  if (isVerified) {
    return (
      <ProfileSection
        email={email}
        userType={userType}
        formData={formData}
        setFormData={setFormData}
        isProfileLoading={isProfileLoading}
        showCompleteModal={showCompleteModal}
        onSubmit={handleSubmit}
        onStart={handleStart}
        onReportReservationLink={handleReportReservationLink}
        onTermsLink={handleTermsLink}
        onPrivacyLink={handlePrivacyLink}
        onMarketingLink={handleMarketingLink}
        error={error}
      />
    );
  }

  // 1/2 단계 렌더링
  if (isCodeSent) {
    return (
      <CodeVerificationSection
        verificationCode={verificationCode}
        setVerificationCode={setVerificationCode}
        isVerifying={isVerifying}
        isLoading={isLoading}
        countdown={countdown}
        onSubmit={handleCodeSubmit}
        onResend={handleResendCode}
        onBackToStep1={handleBackToStep1}
        formatTime={formatTime}
        verificationError={verificationError}
      />
    );
  }

  return (
    <EmailVerificationSection
      email={email}
      setEmail={setEmail}
      isLoading={isLoading}
      onSubmit={handleEmailSubmit}
      error={error}
    />
  );
}