import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: '요약 | KLACI',
  description: '지역자산역량지수(KLACI) 요약 페이지',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function SummaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 