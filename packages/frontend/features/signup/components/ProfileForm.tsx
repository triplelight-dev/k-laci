import CommonInput from '@/components/atoms/CommonInput';
import EmailDisplayBox from '@/components/atoms/EmailDisplayBox';
import PasswordInputGroup from '@/components/atoms/PasswordInputGroup';
import InterestRegionSelect from '@/components/atoms/select/InterestRegionSelect';
import {
    validateConfirmPassword,
    validateName,
    validateOrganization,
    validatePassword,
    validatePhoneNumber
} from '@/utils/validation';
import { useState } from 'react';
import { SignupFormData, UserType } from '../hooks/useSignupFlow';

interface ProfileFormProps {
  email: string;
  userType: UserType;
  formData: SignupFormData;
  setFormData: (data: SignupFormData) => void;
  isProfileLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onReportReservationLink: () => void;
  onTermsLink: () => void;
  onPrivacyLink: () => void;
  onMarketingLink: () => void;
}

export default function ProfileForm({
  email,
  userType,
  formData,
  setFormData,
  isProfileLoading,
  onSubmit,
  onReportReservationLink,
  onTermsLink,
  onPrivacyLink,
  onMarketingLink,
}: ProfileFormProps) {
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

  return (
    <form
      onSubmit={onSubmit}
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
          selectedRegionId={formData.regionId}
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
            onClick={onReportReservationLink}
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
              onClick={onTermsLink}
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
              onClick={onPrivacyLink}
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
              onClick={onMarketingLink}
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
  );
} 