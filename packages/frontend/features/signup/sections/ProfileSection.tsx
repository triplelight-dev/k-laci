import StepBadge from '@/components/atoms/StepBadge';
import SignupCompleteModal from '@/components/ui/SignupCompleteModal';
import ProfileForm from '../components/ProfileForm';
import { SignupFormData, UserType } from '../hooks/useSignupFlow';

interface ProfileSectionProps {
  email: string;
  userType: UserType;
  formData: SignupFormData;
  setFormData: (data: SignupFormData) => void;
  isProfileLoading: boolean;
  showCompleteModal: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onStart: () => void;
  onReportReservationLink: () => void;
  onTermsLink: () => void;
  onPrivacyLink: () => void;
  onMarketingLink: () => void;
  error: string;
}

export default function ProfileSection({
  email,
  userType,
  formData,
  setFormData,
  isProfileLoading,
  showCompleteModal,
  onSubmit,
  onStart,
  onReportReservationLink,
  onTermsLink,
  onPrivacyLink,
  onMarketingLink,
  error,
}: ProfileSectionProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F4F4',
      }}
    >
      <div style={{ width: '100%', maxWidth: '800px' }}>
        {/* 메인 컨테이너 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: '50px',
            padding: '80px 40px',
          }}
        >
          {/* 2/2 단계 뱃지 */}
          <StepBadge step="2/2" />

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
          <ProfileForm
            email={email}
            userType={userType}
            formData={formData}
            setFormData={setFormData}
            isProfileLoading={isProfileLoading}
            onSubmit={onSubmit}
            onReportReservationLink={onReportReservationLink}
            onTermsLink={onTermsLink}
            onPrivacyLink={onPrivacyLink}
            onMarketingLink={onMarketingLink}
          />

          {/* 에러 메시지 */}
          {error && (
            <div
              style={{
                fontSize: '14px',
                color: '#EF4444',
                textAlign: 'center',
                marginTop: '1rem',
              }}
            >
              {error}
            </div>
          )}

          {/* 로그인 링크 */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '15px',
            }}
          >
            <span
              style={{
                fontSize: '14px',
                color: '#000000',
              }}
            >
              이미 계정이 있으신가요?{' '}
            </span>
            <a
              href="/auth/login"
              style={{
                fontSize: '14px',
                color: '#000000',
                textDecoration: 'underline',
                textDecorationColor: '#000000',
                textDecorationThickness: '1px',
                fontWeight: '500',
              }}
            >
              로그인 바로가기
            </a>
          </div>
        </div>

        {/* 회원가입 완료 모달 */}
        <SignupCompleteModal
          isOpen={showCompleteModal}
          onClose={() => {}} // 모달 닫기 기능은 필요에 따라 추가
          onStart={onStart}
        />
      </div>
    </div>
  );
}
