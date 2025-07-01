import { UserType } from '@/features/signup/hooks/useSignupFlow';

interface UserTypeBadgeProps {
  type: UserType;
  isActive: boolean;
}

export default function UserTypeBadge({ type, isActive }: UserTypeBadgeProps) {
  const getBadgeInfo = (type: UserType) => {
    switch (type) {
      case 'GOV':
        return { label: '정부/공공기관' };
      case 'EDU':
        return { label: '기업/비영리' };
      case 'GENERAL':
        return { label: '개인' };
      default:
        return { label: '개인' };
    }
  };

  const { label } = getBadgeInfo(type);

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10px',
        padding: '8px 16px',
        borderRadius: '16px',
        backgroundColor: isActive ? 'white' : '#F3F4F6',
        color: isActive ? '#000000' : '#6B7280',
        fontSize: '14px',
        fontWeight: '500',
        border: `1px solid ${isActive ? '#D1D5DB' : '#E5E7EB'}`,
        cursor: 'default',
        textAlign: 'center',
      }}
    >
      {label}
    </div>
  );
} 