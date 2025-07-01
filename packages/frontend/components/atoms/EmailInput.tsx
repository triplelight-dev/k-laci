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
  placeholder = "이메일 주소 (예: klaci@korea.kr)",
  error,
}: EmailInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      <input
        type="email"
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          width: '100%',
          height: '50px',
          fontSize: '16px',
          padding: '0 1rem',
          border: '1px solid #000000',
          borderRadius: '0.5rem',
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