interface SignupCompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
  mobile: boolean
}

export default function SignupCompleteModal({
  isOpen,
  onClose,
  onStart,
  mobile
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
          padding: mobile ? '16px' : '20px',
          paddingTop: mobile ? '40px' : '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: mobile ? '20px' : '40px',
          maxWidth: '600px',
          width: '560px',
          cursor: 'default',
          margin: mobile ? '0px 16px' : ''
        }}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* 타이틀 */}
        <div
          style={{
            fontSize: mobile ? '25px' : '30px',
            fontWeight: '600',
            color: '#000',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: mobile ? '13px' : '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', zoom: mobile ? '0.7' : '' }}><CircleCheckIcon /></div>
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
                fontSize: mobile ? '15px' : '18px',
                textAlign: 'center',
                lineHeight: '24px',
                color: '#000',
                fontWeight: '400',
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


function CircleCheckIcon() {
  return <svg width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="24.5" fill="#fff"/><circle cx="25" cy="25" r="24.5" stroke="#000"/><circle cx="25" cy="25" r="24.5" stroke="#000" stroke-opacity=".2"/><circle cx="25" cy="25" r="24.5" stroke="#000" stroke-opacity=".2"/><circle cx="25" cy="25" r="24.5" stroke="#000" stroke-opacity=".2"/><circle cx="25" cy="25" r="24.5" stroke="#000" stroke-opacity=".2"/><circle cx="25" cy="25" r="24.5" stroke="#000" stroke-opacity=".2"/><circle cx="25" cy="25" r="24.5" stroke="#000" stroke-opacity=".2"/><circle cx="25" cy="25" r="24.5" stroke="#000" stroke-opacity=".2"/><path d="M22.083 33.017l-6.833-6.834 2.392-2.391 4.441 4.441L33.358 16.96l2.392 2.391-13.667 13.667z" fill="#1D1B20"/></svg>
}