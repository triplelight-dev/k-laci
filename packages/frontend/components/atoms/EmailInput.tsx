import { useState } from 'react';

interface EmailInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

export default function EmailInput({
  value,
  onChange,
  placeholder = '이메일 주소 (예: klaci@korea.kr)',
  error,
}: EmailInputProps) {
  const [, setIsFocused] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      <input
        type="email"
        value={value}
        onChange={onChange}
        onFocus={(e) => {
          setIsFocused(true);
          e.currentTarget.style.border = '1px solid #000';
        }}
        onBlur={(e) => {
          setIsFocused(false);
          e.currentTarget.style.border = '1px solid #E5E7EB';
        }}
        style={{
          width: '100%',
          height: '60px',
          fontSize: '18px',
          padding: '10px 20px',
          borderRadius: '14px',
          background: '#FFF',
          outline: 'none',
          color: '#111827',
          boxSizing: 'border-box',
          backgroundColor: 'white',
        }}

        placeholder={placeholder}
      />
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
