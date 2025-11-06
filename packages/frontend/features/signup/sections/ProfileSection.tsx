import { UserType } from '@/api/types/user.types';
import StepBadge from '@/components/atoms/StepBadge';
import SignupCompleteModal from '@/components/ui/SignupCompleteModal';
import ProfileForm from '../components/ProfileForm';
import { SignupFormData } from '../hooks/useSignupFlow';

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
  mobile: boolean
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
  mobile
}: ProfileSectionProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F4F4',
        marginBottom: '100px',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: mobile ? '' : '800px',
            margin: mobile ? '0 1rem' : '',
          }}
        >
          {/* 메인 컨테이너 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: mobile ? '' : 'center',
              justifyContent: 'center',
              backgroundColor: mobile ? '' : '#fafafa',
              borderRadius: '50px',
              padding: mobile ? '60px 16px' : '60px 40px',
            }}
          >

            {!mobile && (
              <>
                {/* 2/2 단계 뱃지 */}
                <StepBadge step="2/2" />
              </>
            )}

            {/* 타이틀 */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h1
                style={{
                  fontSize: '30px',
                  fontWeight: '600',
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
              mobile={mobile}
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
          </div>

          {/* 회원가입 완료 모달 */}
          <SignupCompleteModal
            isOpen={showCompleteModal}
            onClose={() => { }} // 모달 닫기 기능은 필요에 따라 추가
            onStart={onStart}
            mobile={mobile}
          />

          {!mobile && (
            <>
              {/* 로그인 링크 */}
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '50px',
                }}
              >
                <a
                  href="mailto:klaci@triplelight.co"
                  style={{
                    fontSize: '18px',
                    fontWeight: '400',
                    color: '#000',
                    textDecoration: 'underline',
                    textDecorationColor: '#000000',
                    textDecorationThickness: '1px',
                  }}
                >
                  도움이 필요하신가요?
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
