'use client';

interface PreRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  agree_to_report_reservation: boolean;
}

const PreRegistrationModal = ({
  isOpen,
  onClose,
  agree_to_report_reservation,
}: PreRegistrationModalProps) => {
  if (!isOpen) return null;

  const title = agree_to_report_reservation
    ? '이미 사전 예약을 등록했습니다'
    : '사전예약 등록 완료';

  const messages = agree_to_report_reservation
    ? [
        '서비스 정식 오픈과 함께 회원가입 시 등록하신 메일 주소로',
        '리포트 송부 관련 안내 메일을 보내드리겠습니다.',
      ]
    : [
        'KLACI 리포트 사전 예약을 등록해주셔서 감사합니다.',
        '서비스 정식 오픈과 함께 회원가입 시 등록하신 메일 주소로',
        '리포트 송부 관련 안내 메일을 보내드리겠습니다.',
      ];

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
          padding: '40px',
          maxWidth: '500px',
          width: '90%',
          textAlign: 'center',
          color: '#000000',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 아이콘 */}
        <div
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#f3f4f6',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto 24px',
            fontSize: '24px',
          }}
        >
          ✓
        </div>

        {/* 타이틀 */}
        <div
          style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '24px',
            lineHeight: '1.4',
          }}
        >
          {title}
        </div>

        {/* 메시지들 */}
        <div
          style={{
            marginBottom: '32px',
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                fontSize: '14px',
                color: 'black',
                lineHeight: '1.4',
              }}
            >
              {message}
            </div>
          ))}
        </div>

        {/* 확인 버튼 */}
        <button
          onClick={onClose}
          style={{
            width: '380px',
            backgroundColor: '#000000',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 32px',
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
          확인
        </button>
      </div>
    </div>
  );
};

export default PreRegistrationModal;
