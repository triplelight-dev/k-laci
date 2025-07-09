import { Flex } from "@chakra-ui/react";

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;

  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  borderRadius?: string;
}

export default function Button(props: ButtonProps) {
  const { label, icon, variant = 'primary', onClick = () => { }, padding = '12px 30px', fontSize = '18px', fontWeight = '400', borderRadius = '8px' } = props;


  return <button
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: padding,
      backgroundColor: variant === 'primary' ? '#ffffff' : 'transparent',
      color: variant === 'primary' ? '#000000' : '#ffffff',
      border: variant === 'primary' ? 'none' : '1px solid #ffffff',
      borderRadius: borderRadius,
      fontSize: fontSize,
      fontWeight: fontWeight,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = variant === 'primary' ? '#f3f4f6' : '#ffffff';
      e.currentTarget.style.color = '#000000';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = variant === 'primary' ? '#ffffff' : 'transparent';
      e.currentTarget.style.color = variant === 'primary' ? '#000000' : '#ffffff';
    }}
  >
    <Flex gap='8px' alignItems='center' justifyContent='center'>
      {label}
      {icon}
    </Flex>
  </button>;
}