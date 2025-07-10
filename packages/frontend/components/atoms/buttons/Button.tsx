import { Flex } from "@chakra-ui/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;

  variant?: 'primary' | 'secondary';
  theme?: 'light' | 'dark';
  onClick?: () => void;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  borderRadius?: string;
  width?: string;
}

export default function Button(props: ButtonProps) {
  const { width, label, icon, variant = 'primary', theme = 'dark', onClick = () => { }, padding = '12px 30px', fontSize = '18px', fontWeight = '400', borderRadius = '14px' } = props;

  const darkThemeStyle = {
    backgroundColor: variant === 'primary' ? '#ffffff' : 'transparent',
    color: variant === 'primary' ? '#000000' : '#ffffff',
    border: variant === 'primary' ? 'none' : '1px solid #ffffff',
  }

  const darkThemeMouseEvent = {
    onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.backgroundColor = variant === 'primary' ? '#f3f4f6' : '#ffffff';
      e.currentTarget.style.color = '#000000';
    },
    onMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.backgroundColor = variant === 'primary' ? '#ffffff' : 'transparent';
      e.currentTarget.style.color = variant === 'primary' ? '#000000' : '#ffffff';
    }
  }

  const lightThemeStyle = {
    backgroundColor: variant === 'primary' ? '#000000' : 'transparent',
    color: variant === 'primary' ? '#ffffff' : '#000000',
    border: variant === 'primary' ? 'none' : '1px solid #000000',
  }

  const lightThemeMouseEvent = {
    onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.backgroundColor = variant === 'primary' ? '#181818FF' : '#F6F4F4FF';
      e.currentTarget.style.color = variant === 'primary' ? '#ffffff' : '#000000';
    },
    onMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.backgroundColor = variant === 'primary' ? '#000000' : 'transparent';
      e.currentTarget.style.color = variant === 'primary' ? '#ffffff' : '#000000';
    }
  }


  return <button
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: padding,
      width: width ? width : 'auto',
      borderRadius: borderRadius,
      fontSize: fontSize,
      fontWeight: fontWeight,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      ...(theme === 'dark' ? darkThemeStyle : lightThemeStyle),
      ...(props.style ? props.style : {}),
    }}

    {...(theme === 'dark' ? darkThemeMouseEvent : lightThemeMouseEvent)}

  >
    <Flex gap='8px' alignItems='center' justifyContent='center' cursor={'pointer'}>
      {label}
      {icon}
    </Flex>
  </button>;
}