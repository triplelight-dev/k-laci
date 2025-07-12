import AboutLayout from '@/components/layout/AboutLayout';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: '소개 | 지역자산역량지수(KLACI)',
  description: '지역자산역량지수(KLACI) 소개 페이지',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function AboutLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AboutLayout>{children}</AboutLayout>;
} 