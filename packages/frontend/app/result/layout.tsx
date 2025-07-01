import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'KLACI',
  description: 'KLACI 결과 페이지',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 