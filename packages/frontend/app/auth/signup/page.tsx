'use client';

import { useSignupFlow } from '@/features/signup/hooks/useSignupFlow';
import CodeVerificationSection from '@/features/signup/sections/CodeVerificationSection';
import EmailVerificationSection from '@/features/signup/sections/EmailVerificationSection';
import ProfileSection from '@/features/signup/sections/ProfileSection';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SignUpPage() {
  const searchParams = useSearchParams();
  const isDevMode = searchParams.get('dev') === 'true';
  const devUserType = searchParams.get('userType') as 'GOV' | 'EDU' | 'GENERAL' | null;
  
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

  // 개발 모드에서 2/2 페이지로 바로 이동하기 위한 설정
  useEffect(() => {
    if (isDevMode) {
      // 개발 모드일 때 기본값 설정
      setEmail('test@example.com');
      
      // 특정 유저타입 테스트를 위한 설정
      if (devUserType) {
        // useSignupFlow에서 userType을 직접 설정할 수 있도록 수정 필요
      }
    }
  }, [isDevMode, setEmail, devUserType]);

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

  // 개발 모드에서는 2/2 단계로 바로 이동
  if (isDevMode || isVerified) {
    return (
      <ProfileSection
        email={email || 'test@example.com'}
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