import CommonInput from '@/components/atoms/CommonInput';
import EmailDisplayBox from '@/components/atoms/EmailDisplayBox';
import PasswordInputGroup from '@/components/atoms/PasswordInputGroup';
import CommonSelect from '@/components/atoms/select/CommonSelect';
import { EXTERNAL_LINKS } from '@/constants/links';
import { useProvincesWithRegions } from '@/hooks/useProvincesWithRegions';
import { UserType } from '@/utils/userTypeUtils';
import {
  validateConfirmPassword,
  validateName,
  validateOrganization,
  validatePassword,
  validatePhoneNumber,
} from '@/utils/validation';
import { useState } from 'react';
import { SignupFormData } from '../hooks/useSignupFlow';

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
  // onReportReservationLink,
  // onTermsLink,
  // onPrivacyLink,
  // onMarketingLink,
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

  // 관심지역 선택을 위한 상태
  const [selectedProvinceId, setSelectedProvinceId] = useState<string>('');
  const [selectedRegionId, setSelectedRegionId] = useState<string>('');

  // React Query 사용
  const { data: provincesWithRegions = [] } = useProvincesWithRegions();

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

  // 관심지역 선택 핸들러들
  const handleProvinceChange = (value: string) => {
    setSelectedProvinceId(value);
    setSelectedRegionId(''); // 도/시가 변경되면 지역 선택 초기화
    setFormData({ ...formData, regionId: '' }); // 폼 데이터도 초기화
  };

  const handleRegionChange = (value: string) => {
    setSelectedRegionId(value);
    setFormData({ ...formData, regionId: value }); // regionId만 폼에 저장
  };

  // API에서 가져온 데이터로 province 옵션 생성
  const provinceOptions = provincesWithRegions.map((province) => ({
    value: String(province.id),
    label: province.name,
  }));

  // 선택된 도/시에 해당하는 지역 옵션 생성
  const regionOptions = selectedProvinceId
    ? provincesWithRegions
      .find((province) => province.id === Number(selectedProvinceId))
      ?.regions.map((region) => ({
        value: String(region.id),
        label: region.name,
      })) || []
    : [];

  // 약관 링크 핸들러들
  const handleTermsLink = () => {
    window.open(
      EXTERNAL_LINKS.TERMS_OF_SERVICE,
      '_blank',
      'noopener,noreferrer',
    );
  };

  const handlePrivacyLink = () => {
    window.open(EXTERNAL_LINKS.PRIVACY_POLICY, '_blank', 'noopener,noreferrer');
  };

  const handleMarketingLink = () => {
    window.open(
      EXTERNAL_LINKS.MARKETING_CONSENT,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        width: '540px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '35px',
      }}
    >
      {/* 이메일 표시 박스 */}
      <EmailDisplayBox email={email} userType={userType} />

      {/* 이름 입력 */}
      <CommonInput
        id="name"
        label="이름"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
        label="소속"
        id="organization"
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
        placeholder="-생략하고 입력"
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
              fontSize: '18px',
              fontWeight: '400',
              color: '#000',
            }}
          >
            관심 지역 설정
          </label>
          <span
            style={{
              fontSize: '14px',
              color: '#9A9EA3',
              fontWeight: '500',
            }}
          >
            선택 사항
          </span>
        </div>

        {/* 관심지역 선택 컨테이너 */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            width: '100%',
          }}
        >
          {/* 광역 선택 */}
          <div style={{ flex: 1 }}>
            <CommonSelect
              value={selectedProvinceId}
              options={provinceOptions}
              onChange={handleProvinceChange}
              defaultLabel="광역명"
            />
          </div>

          {/* 지자체 선택 */}
          <div style={{ flex: 1 }}>
            <CommonSelect
              value={selectedRegionId}
              options={regionOptions}
              onChange={handleRegionChange}
              disabled={!selectedProvinceId}
              defaultLabel="지자체명"
            />
          </div>
        </div>
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
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
                width: '16px',
                height: '16px',
                accentColor: '#000000',
              }}
            />
            <label
              htmlFor="agreeToReportReservation"
              style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#000000',
                cursor: 'pointer',
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
        <div
          style={{
            fontSize: '18px',
            fontWeight: '400',
            color: '#6B7280',
          }}
        >
          사전예약자에 한해 특별 할인코드를 메일로 보내드립니다
        </div>
      </div>

      {/* 약관 동의 섹션 */}
      <div style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '30px',
            backgroundColor: '#F1F1F1',
            borderRadius: '17px',
          }}
        >
          {/* 모두 동의 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <input
              type="checkbox"
              id="agreeToAge"
              checked={formData.agreeToAge && formData.agreeToTerms && formData.agreeToPrivacy && formData.agreeToMarketing}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  agreeToAge: e.target.checked,
                  agreeToTerms: e.target.checked,
                  agreeToPrivacy: e.target.checked,
                  agreeToMarketing: e.target.checked,
                })
              }
              style={{
                width: '18px',
                height: '18px',
                accentColor: '#000000',
              }}
            />
            <label
              htmlFor="agreeToAge"
              style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#000',
                cursor: 'pointer',
              }}
            >
              모두 동의하기
            </label>
          </div>
          {/* 나이 동의 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',

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
                width: '18px',
                height: '18px',
                accentColor: '#000000',
              }}
            />
            <label
              htmlFor="agreeToAge"
              style={{
                fontSize: '18px',
                fontWeight: '400',
                color: '#000',
                cursor: 'pointer',
              }}
            >
              만 14세 이상입니다
            </label>
          </div>

          {/* 서비스 이용약관 동의 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',

            }}
          >
            <input
              type="checkbox"
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={(e) =>
                setFormData({ ...formData, agreeToTerms: e.target.checked })
              }
              style={{
                width: '18px',
                height: '18px',
                accentColor: '#000000',
              }}
            />
            <label
              htmlFor="agreeToTerms"
              style={{
                fontSize: '18px',
                fontWeight: '400',
                color: '#000',
                cursor: 'pointer',
              }}
            >
              <span
                onClick={handleTermsLink}
                style={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                서비스 이용약관
              </span>
            </label>
          </div>

          {/* 개인정보 처리방침 동의 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <input
              type="checkbox"
              id="agreeToPrivacy"
              checked={formData.agreeToPrivacy}
              onChange={(e) =>
                setFormData({ ...formData, agreeToPrivacy: e.target.checked })
              }
              style={{
                width: '18px',
                height: '18px',
                accentColor: '#000000',
              }}
            />
            <label
              htmlFor="agreeToPrivacy"
              style={{
                fontSize: '18px',
                fontWeight: '400',
                color: '#000',
                cursor: 'pointer',
              }}
            >
              <span
                onClick={handlePrivacyLink}
                style={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                개인정보 수집 및 이용
              </span>
            </label>
          </div>

          {/* 마케팅 정보 수신 동의 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <input
              type="checkbox"
              id="agreeToMarketing"
              checked={formData.agreeToMarketing}
              onChange={(e) =>
                setFormData({ ...formData, agreeToMarketing: e.target.checked })
              }
              style={{
                width: '18px',
                height: '18px',
                accentColor: '#000000',
              }}
            />
            <label
              htmlFor="agreeToMarketing"
              style={{
                fontSize: '18px',
                fontWeight: '400',
                color: '#000',
                cursor: 'pointer',
              }}
            >
              <span
                onClick={handleMarketingLink}
                style={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                세미나 및 이벤트 마케팅 정보 수신(선택)
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* 회원가입 버튼 */}
      <button
        type="submit"
        disabled={isProfileLoading}
        style={{
          width: '100%',
          height: '50px',
          backgroundColor: '#000000',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          fontSize: '16px',
          fontWeight: '600',
          marginTop: '20px',
          cursor: isProfileLoading ? 'not-allowed' : 'pointer',
          opacity: isProfileLoading ? 0.6 : 1,
        }}
      >
        {isProfileLoading ? '가입 중...' : '회원정보 제출하기'}
      </button>
    </form>
  );
}
