import type { Metadata, Viewport } from 'next';
import ResultsPageClient from './ResultsPageClient';

export default function ResultsPage() {

  return <ResultsPageClient />;
}

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
