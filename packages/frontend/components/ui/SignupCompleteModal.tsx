interface SignupCompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
}

export default function SignupCompleteModal({
  isOpen,
  onClose,
  onStart,
}: SignupCompleteModalProps) {
  if (!isOpen) return null;

  const messages = [
    '지금부터 전국 229개 지자체의',
    '숨겨진 역량과 기회를 탐색해보세요!',
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
        cursor: 'pointer',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '20px',
          paddingTop: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          maxWidth: '600px',
          width: '400px',
          cursor: 'default',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 타이틀 */}
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#111827',
            textAlign: 'center',
          }}
        >
          회원가입 완료
        </div>

        {/* 메시지 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // gap: '8px',
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                fontSize: '16px',
                textAlign: 'center',
                lineHeight: '1.5',
              }}
            >
              {message}
            </div>
          ))}
        </div>

        {/* 시작하기 버튼 */}
        <button
          onClick={onStart}
          style={{
            width: '100%',
            backgroundColor: '#111827',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            padding: '15px 60px',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#374151';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#111827';
          }}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
