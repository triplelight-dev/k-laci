'use client';

import { EXTERNAL_LINKS } from '@/constants/links';
import { useSignupFlow } from '@/features/signup/hooks/useSignupFlow';
import CodeVerificationSection from '@/features/signup/sections/CodeVerificationSection';
import EmailVerificationSection from '@/features/signup/sections/EmailVerificationSection';
import ProfileSection from '@/features/signup/sections/ProfileSection';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function SignUpPageContent() {
  const searchParams = useSearchParams();
  const isDevMode = searchParams.get('dev') === 'true';
  const devUserType = searchParams.get('userType') as
    | 'GOV'
    | 'EDU'
    | 'GENERAL'
    | null;

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

  // 링크 핸들러들 - constants의 링크 사용
  const handleReportReservationLink = () => {
    window.open(EXTERNAL_LINKS.REPORT_RESERVATION, '_blank');
  };

  const handleTermsLink = () => {
    window.open(EXTERNAL_LINKS.TERMS_OF_SERVICE, '_blank');
  };

  const handlePrivacyLink = () => {
    window.open(EXTERNAL_LINKS.PRIVACY_POLICY, '_blank');
  };

  const handleMarketingLink = () => {
    window.open(EXTERNAL_LINKS.MARKETING_CONSENT, '_blank');
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

// 로딩 컴포넌트
function SignUpPageLoading() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F4F4',
      }}
    >
      <div
        style={{
          width: '16px',
          height: '16px',
          border: '2px solid #000000',
          borderTop: '2px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      ></div>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default function SignupPageClient() {
  return (
    <Suspense fallback={<SignUpPageLoading />}>
      <div style={{ height: 'fit-content', minHeight: '800px', paddingTop: '100px' }}>
        <SignUpPageContent />
      </div>
    </Suspense>
  );
}
