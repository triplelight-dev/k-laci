import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: '소개',
  description: 'KLACI 소개 페이지',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 