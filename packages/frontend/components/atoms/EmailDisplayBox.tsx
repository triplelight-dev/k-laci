import { UserType, UserTypeEnum } from '@/api/types/user.types';

interface EmailDisplayBoxProps {
  email: string;
  userType: UserType;
}

export default function EmailDisplayBox({
  email,
  userType,
}: EmailDisplayBoxProps) {
  const getUserTypeLabel = (type: UserType) => {
    switch (type) {
      case UserTypeEnum.GOV:
        return '정부/공공기관 회원';
      case UserTypeEnum.BUSINESS:
        return '기업/비영리 회원';
      case UserTypeEnum.GENERAL:
        return '일반 회원';
      default:
        return '일반 회원';
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          width: '100%',
          height: '60px',
          backgroundColor: '#F1F1F1',
          border: '1px solid #000000',
          borderRadius: '17px',
          padding: '10px 21px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            fontSize: '18px',
            color: '#9A9EA3',
            fontWeight: '600',
          }}
        >
          {email}
        </div>
        <div
          style={{
            backgroundColor: '#C5EEE5',
            color: '#05666A',
            borderRadius: '9px',
            width: 'fit-content',
            padding: '2px 13px',
            height: 'fit-content',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '26px',
          }}
        >
          인증됨
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          fontWeight: '500',
          color: '#000',
          marginTop: '8px',
          paddingLeft: '21px',
          textAlign: 'left',
        }}
      >
        {getUserTypeLabel(userType)}
      </div>
    </div>
  );
}