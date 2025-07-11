import { useState } from 'react';

interface PasswordInputGroupProps {
  password: string;
  confirmPassword: string;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirmPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passwordError?: string;
  confirmPasswordError?: string;
  onPasswordBlur?: () => void;
  onConfirmPasswordBlur?: () => void;
}

export default function PasswordInputGroup({
  password,
  confirmPassword,
  onPasswordChange,
  onConfirmPasswordChange,
  passwordError,
  confirmPasswordError,
  onPasswordBlur,
  onConfirmPasswordBlur,
}: PasswordInputGroupProps) {
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmFocused, setIsConfirmFocused] = useState(false);

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
            fontSize: '18px',
            fontWeight: '400',
            color: '#000',
          }}
        >
          비밀번호
        </label>
        <span
          style={{
            fontSize: '14px',
            color: '#9A9EA3',
            fontWeight: '500',
          }}
        >
          필수 항목
        </span>
      </div>
      
      {/* 비밀번호 입력 */}
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        onFocus={() => setIsPasswordFocused(true)}
        onBlur={() => {
          setIsPasswordFocused(false);
          onPasswordBlur?.();
        }}
        style={{
          width: '100%',
          height: '60px',
          fontSize: '16px',
          padding: '10px 21px',
          border: isPasswordFocused ? '1px solid #000000' : 'none',
          borderRadius: '17px',
          outline: 'none',
          color: '#111827',
          boxSizing: 'border-box',
          backgroundColor: 'white',
          marginBottom: '8px',
        }}
        placeholder="영어, 숫자 또는 특수문자 조합 20자 이하"
        required
        minLength={8}
        maxLength={20}
      />
      
      {/* 비밀번호 확인 입력 */}
      <input
        type="password"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        onFocus={() => setIsConfirmFocused(true)}
        onBlur={() => {
          setIsConfirmFocused(false);
          onConfirmPasswordBlur?.();
        }}
        style={{
          width: '100%',
          height: '60px',
          fontSize: '16px',
          padding: '10px 21px',
          border: isConfirmFocused ? '1px solid #000000' : 'none',
          borderRadius: '17px',
          outline: 'none',
          color: '#111827',
          boxSizing: 'border-box',
          backgroundColor: 'white',
        }}
        placeholder="비밀번호 확인"
        required
      />
      
      {/* 에러 메시지들 */}
      {passwordError && (
        <p
          style={{
            fontSize: '14px',
            color: '#DC2626',
            marginTop: '4px',
            marginBottom: '4px',
          }}
        >
          {passwordError}
        </p>
      )}
      {confirmPasswordError && (
        <p
          style={{
            fontSize: '14px',
            color: '#DC2626',
            marginTop: '4px',
          }}
        >
          {confirmPasswordError}
        </p>
      )}
      
      {/* 헬퍼 텍스트 (에러가 없을 때만 표시) */}
      {!passwordError && !confirmPasswordError && (
        <p
          style={{
            fontSize: '14px',
            color: '#6B7280',
            marginTop: '4px',
          }}
        >
          영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요
        </p>
      )}
    </div>
  );
} 