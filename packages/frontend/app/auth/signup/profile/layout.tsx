import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'KLACI',
  description: 'KLACI 회원가입 프로필 정보 입력',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 