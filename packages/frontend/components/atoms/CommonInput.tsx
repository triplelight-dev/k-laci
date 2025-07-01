import { useState } from 'react';

interface CommonInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  isRequired?: boolean;
  helperText?: string;
  error?: string;
  onBlur?: () => void;
}

export default function CommonInput({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
  minLength,
  maxLength,
  isRequired = false,
  helperText,
  error,
  onBlur,
}: CommonInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <label
          htmlFor={id}
          style={{
            fontSize: '14px',
            fontWeight: '700',
            color: '#374151',
          }}
        >
          {label}
        </label>
        {isRequired && (
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
      <input
        type={type}
        id={id}
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
        minLength={minLength}
        maxLength={maxLength}
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
      {helperText && !error && (
        <p
          style={{
            fontSize: '12px',
            color: '#6B7280',
            marginTop: '4px',
          }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
} 