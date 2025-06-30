import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: '회원정보 입력 - KLACI',
  description: 'KLACI 회원정보 입력 페이지',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function AuthSignupProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 