import { useState } from 'react';

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  onBlur?: () => void;
  required?: boolean;
}

export default function PasswordInput({
  value,
  onChange,
  placeholder = "비밀번호를 입력해주세요",
  error,
  onBlur,
  required = false,
}: PasswordInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px',
        }}
      >
        <label
          style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
          }}
        >
          비밀번호
        </label>
        {required && (
          <span
            style={{
              fontSize: '12px',
              color: '#9A9EA3',
              fontWeight: '500',
            }}
          >
            필수 항목
          </span>
        )}
      </div>
      
      {/* 비밀번호 입력 */}
      <input
        type="password"
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          onBlur?.();
        }}
        style={{
          width: '100%',
          height: '50px',
          fontSize: '16px',
          padding: '0 1rem',
          border: isFocused ? '1px solid #000000' : 'none',
          borderRadius: '0.5rem',
          outline: 'none',
          color: '#111827',
          boxSizing: 'border-box',
          backgroundColor: 'white',
        }}
        placeholder={placeholder}
        required={required}
      />
      
      {/* 에러 메시지 */}
      {error && (
        <p
          style={{
            fontSize: '12px',
            color: '#DC2626',
            marginTop: '4px',
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
} 