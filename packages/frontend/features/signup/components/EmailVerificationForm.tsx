import EmailInput from '@/components/atoms/EmailInput';
import UserTypeBadge from '@/components/atoms/UserTypeBadge';
import { getUserTypeFromEmail } from '@/utils/userTypeUtils';
import { useEffect, useState } from 'react';
import { UserType } from '../hooks/useSignupFlow';

interface EmailVerificationFormProps {
  email: string;
  setEmail: (email: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function EmailVerificationForm({
  email,
  setEmail,
  isLoading,
  onSubmit,
}: EmailVerificationFormProps) {
  const [userType, setUserType] = useState<UserType>('GENERAL');

  // 이메일이 변경될 때마다 유저 타입 업데이트
  useEffect(() => {
    if (email && email.includes('@')) {
      setUserType(getUserTypeFromEmail(email));
    } else {
      setUserType('GENERAL');
    }
  }, [email]);

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
      {/* 이메일 입력 */}
      <div style={{ width: '100%' }}>
        <EmailInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        {/* 유저 타입 뱃지들 */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            gap: '8px',
            marginTop: '16px',
          }}
        >
          <UserTypeBadge type="GOV" isActive={userType === 'GOV'} />
          <UserTypeBadge type="EDU" isActive={userType === 'EDU'} />
          <UserTypeBadge type="GENERAL" isActive={userType === 'GENERAL'} />
        </div>
      </div>

      {/* 인증번호 발송 버튼 */}
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
          '인증메일 보내기'
        )}
      </button>
    </form>
  );
} 