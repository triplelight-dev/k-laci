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
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SignUpProfilePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    organization: '',
    phoneNumber: '',
    interestProvinceId: '',
    interestDistrictId: '',
    agreeToTerms: false,
    agreeToReportReservation: false,
    agreeToAge: false,
    agreeToServiceTerms: false,
    agreeToPrivacy: false,
    agreeToMarketing: false,
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
  const [error, setError] = useState('');

  // 개발용 이메일 (실제로는 URL 파라미터나 상태에서 가져와야 함)
  const userEmail = 'klaci@korea.kr';
  const userType = '정부/공공기관 회원';
  const reportReservationLink = 'https://dev.klaci.kr';
  const termsLink = 'https://dev.klaci.kr';
  const privacyLink = 'https://dev.klaci.kr';
  const marketingLink = 'https://dev.klaci.kr';

  // 블러 이벤트 핸들러들
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

  // 관심 지역 변경 핸들러
  const handleInterestProvinceChange = (provinceId: string) => {
    setFormData((prev) => ({
      ...prev,
      interestProvinceId: provinceId,
      interestDistrictId: '', // 광역 변경 시 지자체 초기화
    }));
  };

  const handleInterestDistrictChange = (districtId: string) => {
    setFormData((prev) => ({
      ...prev,
      interestDistrictId: districtId,
    }));
  };

  // URL에서 토큰 추출 - Supabase는 여러 형태의 토큰을 사용할 수 있음
  const getTokenFromUrl = () => {
    // 1. URL 파라미터에서 토큰 찾기
    const token =
      searchParams.get('token') ||
      searchParams.get('access_token') ||
      searchParams.get('refresh_token');

    if (token) return token;

    // 2. 해시 파라미터에서 토큰 찾기 (Supabase가 자주 사용)
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1);
      const hashParams = new URLSearchParams(hash);
      const hashToken =
        hashParams.get('access_token') || hashParams.get('refresh_token');
      if (hashToken) return hashToken;
    }

    return null;
  };

  const token = getTokenFromUrl();

  // 개발 편의를 위해 토큰 체크와 리디렉션 주석처리
  // useEffect(() => {
  //   if (!token) {
  //     console.log('No token found in URL');
  //     router.push('/auth/signup');
  //   } else {
  //     console.log('Token found:', token.substring(0, 20) + '...');
  //   }
  // }, [token, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // 필수 항목 검증
    const validationResult = validateSignupForm(formData);
    if (!validationResult.isValid) {
      setError(validationResult.message);
      setIsLoading(false);
      return;
    }

    try {
      await AuthService.completeSignup({
        token: token || '',
        name: formData.name,
        password: formData.password,
        organization: formData.organization,
        phoneNumber: formData.phoneNumber,
        // 관심 지역 정보 추가
        provinceId: formData.interestProvinceId,
        districtId: formData.interestDistrictId,
        // 동의 항목들 추가
        agreeToAge: formData.agreeToAge,
        agreeToTerms: formData.agreeToTerms,
        agreeToPrivacy: formData.agreeToPrivacy,
        agreeToMarketing: formData.agreeToMarketing,
        // 사전예약 신청
        agreeToReportReservation: formData.agreeToReportReservation,
      });

      setShowCompleteModal(true);
    } catch (err: any) {
      setError(
        err.response?.data?.message || '회원가입 중 오류가 발생했습니다.',
      );
    } finally {
      setIsLoading(false);
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

  // 개발 편의를 위해 토큰 체크 제거
  // if (!token) {
  //   return (
  //     <div className="min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: '#F4F4F4' }}>
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
  //         <p className="text-gray-600">인증 정보를 확인 중입니다...</p>
  //         <p className="text-sm text-gray-500 mt-2">잠시 후 자동으로 회원가입 페이지로 이동합니다.</p>
  //       </div>
  //     </div>
  //   );
  // }

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
            <EmailDisplayBox email={userEmail} userType={userType} />

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
                selectedProvinceId={formData.interestProvinceId}
                selectedDistrictId={formData.interestDistrictId}
                onProvinceChange={handleInterestProvinceChange}
                onDistrictChange={handleInterestDistrictChange}
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
                  checked={formData.agreeToServiceTerms}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agreeToServiceTerms: e.target.checked,
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
              disabled={isLoading}
              style={{
                width: '100%',
                height: '50px',
                backgroundColor: isLoading ? '#9CA3AF' : '#000000',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: '500',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                border: 'none',
                transition: 'background-color 0.2s',
                fontSize: '16px',
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.backgroundColor = '#1F2937';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
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
