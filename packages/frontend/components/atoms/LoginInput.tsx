interface LoginInputProps {
  type: 'email' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

export default function LoginInput({
  type,
  value,
  onChange,
  placeholder,
  required = false,
}: LoginInputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      style={{
        width: '100%',
        height: '60px',
        fontSize: '18px',
        fontWeight: '400',
        padding: '0 1rem',
        border: '1px solid transparent',
        borderRadius: '14px',
        outline: 'none',
        color: '#111827',
        boxSizing: 'border-box',
        backgroundColor: 'white',
      }}
    />
  );
} 