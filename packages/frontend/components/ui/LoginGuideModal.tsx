'use client';

import { useRouter } from 'next/navigation';

interface LoginGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginGuideModal = ({ isOpen, onClose }: LoginGuideModalProps) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleLoginClick = () => {
    router.push('/auth/login');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '32px',
          maxWidth: '400px',
          width: '90%',
          textAlign: 'center',
          color: '#000000',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 타이틀 */}
        <div
          style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '16px',
            lineHeight: '1.4',
          }}
        >
          사전예약을 위한 로그인
        </div>

        {/* 메시지 */}
        <div
          style={{
            marginBottom: '24px',
            fontSize: '14px',
            color: '#666666',
            lineHeight: '1.6',
          }}
        >
          KLACI 리포트 사전예약을 위해 로그인이 필요합니다.
        </div>

        {/* 로그인 버튼 */}
        <button
          onClick={handleLoginClick}
          style={{
            width: '100%',
            backgroundColor: '#000000',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#333333';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000000';
          }}
        >
          로그인 바로가기
        </button>
      </div>
    </div>
  );
};

export default LoginGuideModal;
