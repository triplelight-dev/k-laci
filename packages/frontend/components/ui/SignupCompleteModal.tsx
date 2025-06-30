interface SignupCompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
}

export default function SignupCompleteModal({ isOpen, onClose, onStart }: SignupCompleteModalProps) {
  if (!isOpen) return null;

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
          borderRadius: '30px',
          padding: '20px',
          paddingTop: '30px',
          maxWidth: '600px',
          margin: '0 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'default',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 타이틀 */}
        <div
          style={{
            paddingTop: '30px',
            paddingBottom: '10px',
            fontSize: '30px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '30px',
            textAlign: 'center',
          }}
        >
          회원가입 완료!
        </div>

        {/* 설명 텍스트 */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          {[
            'KLACI 회원가입이 완료되었습니다.',
            '지금 바로 서비스를 이용해보세요.',
          ].map((text, index) => (
            <div
              key={index}
              style={{
                color: 'black',
                fontSize: '16px',
                lineHeight: 1.5,
                marginBottom: '0.5rem',
              }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* 시작하기 버튼 */}
        <button
          onClick={onStart}
          style={{
            width: '100%',
            height: '50px',
            backgroundColor: '#000000',
            color: 'white',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1F2937';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000000';
          }}
        >
          시작하기
        </button>
      </div>
    </div>
  );
} 