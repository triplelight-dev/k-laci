interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
}

export default function LogoutModal({
  isOpen,
  onClose,
  onStart,
}: LogoutModalProps) {
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
          borderRadius: '20px',
          padding: '16px',
          paddingTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          maxWidth: '600px',
          width: '560px',
          cursor: 'default',
          margin: '0px 16px'
        }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* 타이틀 */}
        <div
          style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#000',
            textAlign: 'center',
            paddingBottom: '10px'
          }}
        >
          로그아웃 하시겠습니까?
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            gap: '16px',
          }}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              backgroundColor: '#FFFFFF',
              color: 'black',
              border: '1px solid',
              borderRadius: '12px',
              padding: '15px',
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
            취소
          </button>

          {/* 로그아웃 버튼 */}
          <button
            onClick={onStart}
            style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              backgroundColor: '#111827',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '15px',
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
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}


function CircleCheckIcon() {
  return <svg width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="24.5" fill="#fff" /><circle cx="25" cy="25" r="24.5" stroke="#000" /><circle cx="25" cy="25" r="24.5" stroke="#000" stroke-opacity=".2" /><circle cx="25" cy="25" r="24.5" stroke="#000" stroke-opacity=".2" /><circle cx="25" cy="25" r="24.5" stroke="#000" stroke-opacity=".2" /><circle cx="25" cy="25" r="24.5" stroke="#000" stroke-opacity=".2" /><circle cx="25" cy="25" r="24.5" stroke="#000" stroke-opacity=".2" /><circle cx="25" cy="25" r="24.5" stroke="#000" stroke-opacity=".2" /><circle cx="25" cy="25" r="24.5" stroke="#000" stroke-opacity=".2" /><path d="M22.083 33.017l-6.833-6.834 2.392-2.391 4.441 4.441L33.358 16.96l2.392 2.391-13.667 13.667z" fill="#1D1B20" /></svg>
}