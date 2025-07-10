import { Flex } from "@chakra-ui/react";
import { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | React.ReactNode;
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
  const [isHovered, setIsHovered] = useState(false);

  const darkThemeStyle = {
    backgroundColor: variant === 'primary' ? '#ffffff' : 'transparent',
    color: variant === 'primary' ? '#000000' : '#ffffff',
    border: variant === 'primary' ? 'none' : '1px solid #ffffff',
  }

  const lightThemeStyle = {
    backgroundColor: variant === 'primary' ? '#000000' : 'transparent',
    color: variant === 'primary' ? '#ffffff' : '#000000',
    border: variant === 'primary' ? 'none' : '1px solid #000000',
  }

  // 호버 시 스타일 계산
  const getHoverStyle = () => {
    if (theme === 'dark') {
      return {
        backgroundColor: variant === 'primary' ? '#f3f4f6' : '#ffffff',
        color: '#000000',
      };
    } else {
      return {
        backgroundColor: variant === 'primary' ? '#181818FF' : '#F6F4F4FF',
        color: variant === 'primary' ? '#ffffff' : '#000000',
      };
    }
  };

  // 아이콘 색상 계산
  const getIconColor = () => {
    if (isHovered) {
      return '#000000'; // 호버 시 항상 검정색
    } else {
      if (theme === 'dark') {
        return variant === 'primary' ? '#000000' : '#ffffff';
      } else {
        return variant === 'primary' ? '#ffffff' : '#000000';
      }
    }
  };

  return <button
    onClick={onClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
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
      ...(isHovered ? getHoverStyle() : {}),
      ...(props.style ? props.style : {}),
    }}
  >
    <Flex gap='8px' alignItems='center' justifyContent='center' cursor={'pointer'}>
      {label}
      <div style={{
        transition: 'all 0.2s ease',
        filter: isHovered ? 'brightness(0)' : 'none'
      }}>
        {icon}
      </div>
    </Flex>
  </button>;
}