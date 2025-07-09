import { UserType } from '@/utils/userTypeUtils';
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
        height: 'fit-content',
        padding: '6px 10px',
        borderRadius: '14px',
        backgroundColor: isActive ? 'white' : '#F3F4F6',
        color: isActive ? '#000000' : '#6B7280',
        fontSize: '14px',
        fontWeight: '500',
        border: `1px solid ${isActive ? '#000' : '#E5E7EB'}`,
        cursor: 'default',
        textAlign: 'center',
        lineHeight: '14px',
      }}
    >
      {label}
    </div>
  );
}
