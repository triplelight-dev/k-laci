'use client';

import { AuthService } from '@/api/services/auth.service';
import CommonInput from '@/components/atoms/CommonInput';
import EmailDisplayBox from '@/components/atoms/EmailDisplayBox';
import PasswordInputGroup from '@/components/atoms/PasswordInputGroup';
import InterestRegionSelect from '@/components/atoms/select/InterestRegionSelect';
import SignupCompleteModal from '@/components/ui/SignupCompleteModal';
import {
  validateConfirmPassword,
  validateName,
  validateOrganization,
  validatePassword,
  validatePhoneNumber,
  validateSignupForm,
} from '@/utils/validation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUpPage() {
  const router = useRouter();
  
  // 1/2 단계 상태
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [error, setError] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [countdown, setCountdown] = useState(0);
  
  // 2/2 단계 상태
  const [isVerified, setIsVerified] = useState(false);
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [userType, setUserType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    organization: '',
    phoneNumber: '',
    provinceId: '',
    regionId: '',
    agreeToAge: false,
    agreeToTerms: false,
    agreeToPrivacy: false,
    agreeToMarketing: false,
    agreeToReportReservation: false,
  });
  const [errors, setErrors] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    organization: '',
    phoneNumber: '',
  });
  const [touched, setTouched] = useState({
    name: false,
    password: false,
    confirmPassword: false,
    organization: false,
    phoneNumber: false,
  });

  const reportReservationLink = 'https://dev.klaci.kr';
  const termsLink = 'https://dev.klaci.kr';
  const privacyLink = 'https://dev.klaci.kr';
  const marketingLink = 'https://dev.klaci.kr';

  // 카운트다운 타이머
  const startCountdown = () => {
    setCountdown(180); // 3분
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 인증번호 발송
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setVerificationError('');

    try {
      await AuthService.sendVerificationCode({ email });
      setIsCodeSent(true);
      startCountdown();
    } catch (err: any) {
      setError(
        err.response?.data?.message || '인증번호 발송 중 오류가 발생했습니다.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  // 인증번호 검증
  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setVerificationError('');

    try {
      const response = await AuthService.verifyCode({ email, code: verificationCode });
      if (response.data.verified) {
        // 인증 성공 - 2/2 단계로 전환
        setIsVerified(true);
        // 이메일 도메인에 따른 사용자 타입 설정
        const domain = email.split('@')[1];
        if (domain?.includes('korea.kr') || domain?.includes('go.kr')) {
          setUserType('정부/공공기관 회원');
        } else if (domain?.includes('ac.kr')) {
          setUserType('대학교 회원');
        } else {
          setUserType('일반 회원');
        }
      } else {
        setVerificationError('인증번호가 일치하지 않습니다.');
      }
    } catch (err: any) {
      setVerificationError(
        err.response?.data?.message || '인증번호 검증 중 오류가 발생했습니다.',
      );
    } finally {
      setIsVerifying(false);
    }
  };

  // 인증번호 재발송
  const handleResendCode = async () => {
    setIsLoading(true);
    setError('');
    setVerificationError('');

    try {
      await AuthService.sendVerificationCode({ email });
      startCountdown();
    } catch (err: any) {
      setError(
        err.response?.data?.message || '인증번호 재발송 중 오류가 발생했습니다.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  // 1/2 단계로 돌아가기
  const handleBackToStep1 = () => {
    setIsCodeSent(false);
    setIsVerified(false);
    setVerificationCode('');
    setCountdown(0);
    setError('');
    setVerificationError('');
  };

  // 2/2 단계 블러 이벤트 핸들러들
  const handleNameBlur = () => {
    setTouched((prev) => ({ ...prev, name: true }));
    const validation = validateName(formData.name);
    setErrors((prev) => ({ ...prev, name: validation.message }));
  };

  const handlePasswordBlur = () => {
    setTouched((prev) => ({ ...prev, password: true }));
    const validation = validatePassword(formData.password);
    setErrors((prev) => ({ ...prev, password: validation.message }));
  };

  const handleConfirmPasswordBlur = () => {
    setTouched((prev) => ({ ...prev, confirmPassword: true }));
    const validation = validateConfirmPassword(
      formData.confirmPassword,
      formData.password,
    );
    setErrors((prev) => ({ ...prev, confirmPassword: validation.message }));
  };

  const handleOrganizationBlur = () => {
    setTouched((prev) => ({ ...prev, organization: true }));
    const validation = validateOrganization(formData.organization);
    setErrors((prev) => ({ ...prev, organization: validation.message }));
  };

  const handlePhoneNumberBlur = () => {
    setTouched((prev) => ({ ...prev, phoneNumber: true }));
    const validation = validatePhoneNumber(formData.phoneNumber);
    setErrors((prev) => ({ ...prev, phoneNumber: validation.message }));
  };

  // 회원가입 완료
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProfileLoading(true);
    setError('');

    // 필수 항목 검증
    const validationResult = validateSignupForm(formData);
    if (!validationResult.isValid) {
      setError(validationResult.message);
      setIsProfileLoading(false);
      return;
    }

    try {
      console.log('Submitting signup data:', {
        email: email,
        password: formData.password,
        name: formData.name,
        phone_number: formData.phoneNumber,
        interest_region_id: formData.regionId,
      });

      const response = await AuthService.signUp({
        email: email,
        password: formData.password,
        name: formData.name,
        phone_number: formData.phoneNumber,
        interest_region_id: formData.regionId,
      });

      console.log('Signup response:', response);
      setShowCompleteModal(true);
    } catch (err: any) {
      console.error('Signup error:', err);
      setError(
        err.response?.data?.message || '회원가입 중 오류가 발생했습니다.',
      );
    } finally {
      setIsProfileLoading(false);
    }
  };

  const handleStart = () => {
    setShowCompleteModal(false);
    // 메인 페이지로 이동
    router.push('/');
  };

  const handleReportReservationLink = () => {
    window.open(reportReservationLink, '_blank');
  };

  const handleTermsLink = () => {
    window.open(termsLink, '_blank');
  };

  const handlePrivacyLink = () => {
    window.open(privacyLink, '_blank');
  };

  const handleMarketingLink = () => {
    window.open(marketingLink, '_blank');
  };

  const descriptionTexts = [
    'KLACI 계정으로 사용할 이메일 인증이 필요합니다.',
    '이메일 도메인에 따라 회원 유형이 자동 분류되며 맞춤 정보가 제공됩니다.',
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // 2/2 단계 렌더링
  if (isVerified) {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F4F4F4',
          paddingTop: '80px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 1rem' }}>
          {/* 메인 컨테이너 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: '50px',
              padding: '80px 100px',
            }}
          >
            {/* 2/2 단계 뱃지 */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '2rem',
              }}
            >
              <div
                style={{
                  border: '1px solid black',
                  borderRadius: '12px',
                  padding: '6px 12px',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'black',
                }}
              >
                2/2 단계
              </div>
            </div>

            {/* 타이틀 */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h1
                style={{
                  fontSize: '1.875rem',
                  fontWeight: '700',
                  color: '#111827',
                }}
              >
                회원정보 입력
              </h1>
            </div>

            {/* 폼 */}
            <form
              onSubmit={handleSubmit}
              style={{
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
              }}
            >
              {/* 이메일 표시 박스 */}
              <EmailDisplayBox email={email} userType={userType} />

              {/* 이름 입력 */}
              <CommonInput
                id="name"
                label="이름"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="한글 또는 영어 10자 이하"
                required={true}
                maxLength={10}
                isRequired={true}
                error={touched.name ? errors.name : ''}
                onBlur={handleNameBlur}
              />

              {/* 비밀번호 입력 그룹 */}
              <PasswordInputGroup
                password={formData.password}
                confirmPassword={formData.confirmPassword}
                onPasswordChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                onConfirmPasswordChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                passwordError={touched.password ? errors.password : ''}
                confirmPasswordError={
                  touched.confirmPassword ? errors.confirmPassword : ''
                }
                onPasswordBlur={handlePasswordBlur}
                onConfirmPasswordBlur={handleConfirmPasswordBlur}
              />

              {/* 소속 입력 */}
              <CommonInput
                id="organization"
                label="소속"
                value={formData.organization}
                onChange={(e) =>
                  setFormData({ ...formData, organization: e.target.value })
                }
                placeholder="한글 또는 영어 10자 이하"
                required={true}
                maxLength={10}
                isRequired={true}
                error={touched.organization ? errors.organization : ''}
                onBlur={handleOrganizationBlur}
              />

              {/* 휴대폰 번호 입력 */}
              <CommonInput
                id="phoneNumber"
                label="휴대폰 번호"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                placeholder="숫자만 입력"
                type="tel"
                required={true}
                isRequired={true}
                error={touched.phoneNumber ? errors.phoneNumber : ''}
                onBlur={handlePhoneNumberBlur}
              />

              {/* 관심 지역 설정 */}
              <div style={{ width: '100%' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}
                >
                  <label
                    style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#374151',
                    }}
                  >
                    관심 지역 설정
                  </label>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#9A9EA3',
                      fontWeight: '500',
                    }}
                  >
                    선택 사항
                  </span>
                </div>
                <InterestRegionSelect
                  selectedProvinceId={formData.provinceId}
                  selectedRegionId={formData.regionId}
                  onProvinceChange={(provinceId) => {
                    setFormData((prev) => ({
                      ...prev,
                      provinceId,
                      regionId: '', // province가 변경되면 region 초기화
                    }));
                  }}
                  onRegionChange={(regionId) => {
                    setFormData((prev) => ({ ...prev, regionId }));
                  }}
                />
              </div>

              {/* KLACI 인사이트 리포트 사전예약 신청 */}
              <div style={{ width: '100%' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      id="agreeToReportReservation"
                      checked={formData.agreeToReportReservation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          agreeToReportReservation: e.target.checked,
                        })
                      }
                      style={{
                        marginRight: '8px',
                      }}
                    />
                    <label
                      htmlFor="agreeToReportReservation"
                      style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        color: '#374151',
                      }}
                    >
                      KLACI 인사이트 리포트 사전예약 신청
                    </label>
                  </div>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#9A9EA3',
                      fontWeight: '500',
                    }}
                  >
                    선택 사항
                  </span>
                </div>

                {/* 설명 텍스트 */}
                <div
                  style={{
                    fontSize: '12px',
                    color: '#6B7280',
                    marginBottom: '4px',
                    marginLeft: '24px',
                  }}
                >
                  사전예약자에 한해 특별 할인코드를 메일로 보내드립니다
                </div>

                {/* 더 알아보기 링크 */}
                <div style={{ marginLeft: '24px' }}>
                  <button
                    type="button"
                    onClick={handleReportReservationLink}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      fontSize: '12px',
                      color: '#000000',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                    }}
                  >
                    더 알아보기 (새창)
                  </button>
                </div>
              </div>

              {/* 동의 항목 박스 */}
              <div
                style={{
                  width: '100%',
                  backgroundColor: '#F1F1F1',
                  borderRadius: '0.5rem',
                  padding: '20px',
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
              >
                {/* 만 14세 이상 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                  }}
                >
                  <input
                    type="checkbox"
                    id="agreeToAge"
                    checked={formData.agreeToAge}
                    onChange={(e) =>
                      setFormData({ ...formData, agreeToAge: e.target.checked })
                    }
                    style={{
                      marginRight: '8px',
                    }}
                  />
                  <label
                    htmlFor="agreeToAge"
                    style={{
                      fontSize: '14px',
                      color: '#374151',
                    }}
                  >
                    만 14세 이상입니다
                  </label>
                </div>

                {/* 서비스 이용약관 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                  }}
                >
                  <input
                    type="checkbox"
                    id="agreeToServiceTerms"
                    checked={formData.agreeToTerms}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agreeToTerms: e.target.checked,
                      })
                    }
                    style={{
                      marginRight: '8px',
                    }}
                  />
                  <label
                    htmlFor="agreeToServiceTerms"
                    style={{
                      fontSize: '14px',
                      color: '#374151',
                    }}
                  >
                    <button
                      type="button"
                      onClick={handleTermsLink}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        fontSize: '14px',
                        color: '#374151',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                      }}
                    >
                      서비스 이용약관
                    </button>
                  </label>
                </div>

                {/* 개인정보 수집 및 이용 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                  }}
                >
                  <input
                    type="checkbox"
                    id="agreeToPrivacy"
                    checked={formData.agreeToPrivacy}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agreeToPrivacy: e.target.checked,
                      })
                    }
                    style={{
                      marginRight: '8px',
                    }}
                  />
                  <label
                    htmlFor="agreeToPrivacy"
                    style={{
                      fontSize: '14px',
                      color: '#374151',
                    }}
                  >
                    <button
                      type="button"
                      onClick={handlePrivacyLink}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        fontSize: '14px',
                        color: '#374151',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                      }}
                    >
                      개인정보 수집 및 이용
                    </button>
                  </label>
                </div>

                {/* 세미나 및 이벤트 등 마케팅 정보 수신 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <input
                    type="checkbox"
                    id="agreeToMarketing"
                    checked={formData.agreeToMarketing}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agreeToMarketing: e.target.checked,
                      })
                    }
                    style={{
                      marginRight: '8px',
                    }}
                  />
                  <label
                    htmlFor="agreeToMarketing"
                    style={{
                      fontSize: '14px',
                      color: '#374151',
                    }}
                  >
                    <button
                      type="button"
                      onClick={handleMarketingLink}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        fontSize: '14px',
                        color: '#374151',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                      }}
                    >
                      세미나 및 이벤트 등 마케팅 정보 수신
                    </button>
                    <span
                      style={{
                        fontSize: '14px',
                        color: '#6B7280',
                        marginLeft: '4px',
                      }}
                    >
                      (선택)
                    </span>
                  </label>
                </div>
              </div>

              {/* 회원가입 완료 버튼 */}
              <button
                type="submit"
                disabled={isProfileLoading}
                style={{
                  width: '100%',
                  height: '50px',
                  backgroundColor: isProfileLoading ? '#9CA3AF' : '#000000',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                  cursor: isProfileLoading ? 'not-allowed' : 'pointer',
                  border: 'none',
                  transition: 'background-color 0.2s',
                  fontSize: '16px',
                }}
                onMouseEnter={(e) => {
                  if (!isProfileLoading) {
                    e.currentTarget.style.backgroundColor = '#1F2937';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isProfileLoading) {
                    e.currentTarget.style.backgroundColor = '#000000';
                  }
                }}
              >
                {isProfileLoading ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        animation: 'spin 1s linear infinite',
                        borderRadius: '50%',
                        height: '1rem',
                        width: '1rem',
                        border: '2px solid transparent',
                        borderBottomColor: 'white',
                        marginRight: '0.5rem',
                      }}
                    ></div>
                    처리 중...
                  </div>
                ) : (
                  '회원가입 완료'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* 회원가입 완료 모달 */}
        <SignupCompleteModal
          isOpen={showCompleteModal}
          onClose={() => setShowCompleteModal(false)}
          onStart={handleStart}
        />
      </div>
    );
  }

  // 1/2 단계 렌더링 (기존 코드)
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F4F4',
        paddingTop: '80px',
      }}
    >
      <div style={{ width: '100%', maxWidth: '800px', margin: '0 1rem' }}>
        {/* 메인 컨테이너 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: '50px',
            padding: '80px 100px',
          }}
        >
          {/* 1/2 단계 뱃지 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                border: '1px solid black',
                borderRadius: '12px',
                padding: '6px 12px',
                fontSize: '16px',
                fontWeight: '500',
                color: 'black',
              }}
            >
              1/2 단계
            </div>
          </div>

          {/* 타이틀 */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h1
              style={{
                fontSize: '1.875rem',
                fontWeight: '700',
                color: '#111827',
              }}
            >
              이메일로 회원가입
            </h1>
          </div>

          {/* 설명 텍스트 */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            {descriptionTexts.map((text, index) => (
              <div
                key={index}
                style={{
                  color: 'black',
                  fontSize: '0.875rem',
                  lineHeight: '1.625',
                }}
              >
                {text}
              </div>
            ))}
          </div>

          {/* 이메일 입력 폼 */}
          {!isCodeSent && (
            <form
              onSubmit={handleEmailSubmit}
              style={{
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
              }}
            >
              {/* 이메일 입력 */}
              <div style={{ width: '100%' }}>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    height: '50px',
                    fontSize: '16px',
                    padding: '0 1rem',
                    border: '1px solid #D1D5DB',
                    borderRadius: '0.5rem',
                    outline: 'none',
                    color: '#111827',
                    boxSizing: 'border-box',
                  }}
                  placeholder="이메일 주소 (예: klaci@korea.kr)"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* 에러 메시지 */}
              {error && (
                <div
                  style={{
                    color: '#DC2626',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                  }}
                >
                  {error}
                </div>
              )}

              {/* 인증번호 보내기 버튼 */}
              <button
                type="submit"
                disabled={isLoading || !email}
                style={{
                  width: '100%',
                  height: '50px',
                  backgroundColor: isLoading || !email ? '#9CA3AF' : '#000000',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                  cursor: isLoading || !email ? 'not-allowed' : 'pointer',
                  border: 'none',
                  transition: 'background-color 0.2s',
                  fontSize: '16px',
                }}
                onMouseEnter={(e) => {
                  if (!isLoading && email) {
                    e.currentTarget.style.backgroundColor = '#1F2937';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading && email) {
                    e.currentTarget.style.backgroundColor = '#000000';
                  }
                }}
              >
                {isLoading ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        animation: 'spin 1s linear infinite',
                        borderRadius: '50%',
                        height: '1rem',
                        width: '1rem',
                        border: '2px solid transparent',
                        borderBottomColor: 'white',
                        marginRight: '0.5rem',
                      }}
                    ></div>
                    인증번호 발송 중...
                  </div>
                ) : (
                  '인증번호 보내기'
                )}
              </button>
            </form>
          )}

          {/* 인증번호 입력 폼 */}
          {isCodeSent && (
            <div
              style={{
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
              }}
            >
              {/* 인증번호 발송 완료 메시지 */}
              <div
                style={{
                  textAlign: 'center',
                  marginBottom: '1rem',
                  padding: '15px',
                  backgroundColor: '#F0F9FF',
                  borderRadius: '8px',
                  border: '1px solid #0EA5E9',
                }}
              >
                <div style={{ color: '#0C4A6E', fontSize: '14px', fontWeight: '500' }}>
                  {email}로 인증번호가 발송되었습니다.
                </div>
              </div>

              {/* 카운트다운 */}
              {countdown > 0 && (
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <div style={{ color: '#DC2626', fontSize: '14px', fontWeight: '500' }}>
                    남은 시간: {formatTime(countdown)}
                  </div>
                </div>
              )}

              {/* 인증번호 입력 폼 */}
              <form
                onSubmit={handleCodeSubmit}
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                }}
              >
                <div style={{ width: '100%' }}>
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    style={{
                      width: '100%',
                      height: '50px',
                      fontSize: '16px',
                      padding: '0 1rem',
                      border: '1px solid #D1D5DB',
                      borderRadius: '0.5rem',
                      outline: 'none',
                      color: '#111827',
                      boxSizing: 'border-box',
                      textAlign: 'center',
                      letterSpacing: '2px',
                    }}
                    placeholder="인증번호 6자리 입력"
                    maxLength={6}
                    required
                    disabled={isVerifying || countdown === 0}
                  />
                </div>

                {/* 검증 에러 메시지 */}
                {verificationError && (
                  <div
                    style={{
                      color: '#DC2626',
                      fontSize: '0.875rem',
                      textAlign: 'center',
                    }}
                  >
                    {verificationError}
                  </div>
                )}

                {/* 인증번호 확인 버튼 */}
                <button
                  type="submit"
                  disabled={isVerifying || !verificationCode || countdown === 0}
                  style={{
                    width: '100%',
                    height: '50px',
                    backgroundColor: isVerifying || !verificationCode || countdown === 0 ? '#9CA3AF' : '#000000',
                    color: 'white',
                    borderRadius: '0.5rem',
                    fontWeight: '500',
                    cursor: isVerifying || !verificationCode || countdown === 0 ? 'not-allowed' : 'pointer',
                    border: 'none',
                    transition: 'background-color 0.2s',
                    fontSize: '16px',
                  }}
                  onMouseEnter={(e) => {
                    if (!isVerifying && verificationCode && countdown > 0) {
                      e.currentTarget.style.backgroundColor = '#1F2937';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isVerifying && verificationCode && countdown > 0) {
                      e.currentTarget.style.backgroundColor = '#000000';
                    }
                  }}
                >
                  {isVerifying ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        style={{
                          animation: 'spin 1s linear infinite',
                          borderRadius: '50%',
                          height: '1rem',
                          width: '1rem',
                          border: '2px solid transparent',
                          borderBottomColor: 'white',
                          marginRight: '0.5rem',
                        }}
                      ></div>
                      인증 중...
                    </div>
                  ) : (
                    '인증번호 확인'
                  )}
                </button>
              </form>

              {/* 재발송 버튼 */}
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={handleResendCode}
                  disabled={isLoading || countdown > 0}
                  style={{
                    backgroundColor: 'transparent',
                    color: isLoading || countdown > 0 ? '#9CA3AF' : '#0EA5E9',
                    border: 'none',
                    cursor: isLoading || countdown > 0 ? 'not-allowed' : 'pointer',
                    fontSize: '14px',
                    textDecoration: 'underline',
                  }}
                >
                  {isLoading ? '재발송 중...' : '인증번호 재발송'}
                </button>
              </div>

              {/* 이메일 변경 버튼 */}
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={handleBackToStep1}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#6B7280',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    textDecoration: 'underline',
                  }}
                >
                  이메일 주소 변경
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
