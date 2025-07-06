'use client';

import Link from 'next/link';

interface HeaderAuthButtonProps {
  variant: 'login' | 'signup' | 'logout';
  theme?: 'light' | 'dark';
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
}

export const HeaderAuthButton = ({
  variant,
  theme = 'light',
  onClick,
  href,
  children,
}: HeaderAuthButtonProps) => {
  const getButtonStyle = () => {
    const baseStyle = {
      minWidth: '80px',
      borderRadius: '8px',
      cursor: 'pointer',
      padding: '8px 18px',
      fontSize: '14px',
      fontWeight: '500',
    };

    // 라이트 테마 (기존 스타일)
    if (theme === 'light') {
      const lightStyle = {
        ...baseStyle,
        border: '1px solid #1B1C2D',
      };

      switch (variant) {
        case 'login':
          return {
            ...lightStyle,
            color: '#FFFFFF',
            backgroundColor: '#1B1C2D',
          };
        case 'signup':
        case 'logout':
          return {
            ...lightStyle,
            color: '#1B1C2D',
            backgroundColor: 'transparent',
          };
        default:
          return lightStyle;
      }
    }
    
    // 다크 테마 (반전된 스타일)
    else {
      const darkStyle = {
        ...baseStyle,
        border: '1px solid #FFFFFF',
      };

      switch (variant) {
        case 'login':
          return {
            ...darkStyle,
            color: '#14161D',
            backgroundColor: '#FFFFFF',
          };
        case 'signup':
        case 'logout':
          return {
            ...darkStyle,
            color: '#FFFFFF',
            backgroundColor: 'transparent',
          };
        default:
          return darkStyle;
      }
    }
  };

  const buttonElement = (
    <button style={getButtonStyle()} onClick={onClick}>
      {children}
    </button>
  );

  // href가 있으면 Link로 감싸고, 없으면 그냥 button 반환
  if (href) {
    return <Link href={href}>{buttonElement}</Link>;
  }

  return buttonElement;
}; 