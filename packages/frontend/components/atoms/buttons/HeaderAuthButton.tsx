'use client';

import Link from 'next/link';

interface HeaderAuthButtonProps {
  variant: 'login' | 'signup' | 'logout';
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
}

export const HeaderAuthButton = ({
  variant,
  onClick,
  href,
  children,
}: HeaderAuthButtonProps) => {
  const getButtonStyle = () => {
    const baseStyle = {
      minWidth: '80px',
      border: '1px solid #1B1C2D',
      borderRadius: '8px',
      cursor: 'pointer',
      padding: '8px 18px',
      fontSize: '14px',
      fontWeight: '500',
    };

    switch (variant) {
      case 'login':
        return {
          ...baseStyle,
          color: '#FFFFFF',
          backgroundColor: '#1B1C2D',
        };
      case 'signup':
      case 'logout':
        return {
          ...baseStyle,
          color: '#1B1C2D',
          backgroundColor: 'transparent',
        };
      default:
        return baseStyle;
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