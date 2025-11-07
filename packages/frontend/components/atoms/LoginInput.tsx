import { useState } from "react";

interface LoginInputProps {
  type: 'email' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  onClear?: () => void;
}

export default function LoginInput({
  type,
  value,
  onChange,
  placeholder,
  required = false,
  onClear,
}: LoginInputProps) {
  // ⭐ 1. 포커스 상태 관리를 위한 State 추가

  const [isFocused, setIsFocused] = useState(false);

  // ⭐ 2. 동적으로 변경될 스타일 정의
  const inputStyle = {
    width: '100%',
    height: '60px',
    fontSize: '18px',
    fontWeight: '400',
    padding: '0 1rem',
    // ❗ 오른쪽에 X 버튼 들어갈 자리 확보
    paddingRight: '2.5rem',

    // 3. isFocused 상태에 따라 테두리 색상 결정
    border: isFocused ? '1px solid #000000' : '1px solid transparent',

    borderRadius: '14px',
    outline: 'none',
    color: '#111827',
    boxSizing: 'border-box' as const, // TS에서 boxSizing 속성 타입 명시
    backgroundColor: 'white',
    // 애니메이션 효과를 추가하여 자연스럽게 변경 (선택 사항)
    transition: 'border-color 0.2s ease-in-out',
  };

  const handleClearClick = () => {
    if (onClear) {
      onClear();
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={inputStyle}
        // ⭐ 4. 이벤트 핸들러 추가
        onFocus={() => setIsFocused(true)}  // 포커스가 들어오면 true로 설정
        onBlur={() => setIsFocused(false)}   // 포커스가 나가면 false로 설정
      />

      {/* 값이 있을 때만 X 버튼 노출 */}
      {
        value && (
          <button
            type="button"
            onClick={handleClearClick}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '18px',
              lineHeight: 1,
              padding: 0,
              color: '#9CA3AF',
            }}
            aria-label="입력 내용 지우기"
          >
            <img
              src='/icons/close-x.png'
              style={{
                height: '24px',
                width: '24px'
              }}
            />
          </button>
        )
      }
    </div>
  );
} 