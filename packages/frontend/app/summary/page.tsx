import type { Metadata, Viewport } from 'next';
import SummaryPageClient from './SummaryPageClient';

export const metadata: Metadata = {
  title: '주요 결과 | 지역자산역량지수(KLACI)',
};

export default function SummaryPage() {
  return <SummaryPageClient />;
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
