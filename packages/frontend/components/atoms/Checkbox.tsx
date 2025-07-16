interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  isBold?: boolean;
  onClickLabel?: () => void;
  style?: React.CSSProperties;
}

export default function Checkbox({
  id,
  checked,
  onChange,
  label,
  isBold = false,
  onClickLabel,
  style,
}: CheckboxProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        ...style,
      }}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        style={{
          width: '18px',
          height: '18px',
          accentColor: '#000000',
        }}
      />
      <label
        htmlFor={id}
        style={{
          fontSize: '18px',
          fontWeight: isBold ? '700' : '400',
          color: '#000',
          cursor: 'pointer',
        }}
        onClick={onClickLabel}
      >
        {onClickLabel ? (
          <span
            style={{
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            {label}
          </span>
        ) : (
          label
        )}
      </label>
    </div>
  );
} 