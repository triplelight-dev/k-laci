import type { Metadata, Viewport } from 'next';
import SummaryPageClient from './SummaryPageClient';


export default function SummaryPage() {
  return <SummaryPageClient />;
}


export const metadata: Metadata = {
  title: 'KLACI',
  description: 'KLACI 요약 페이지',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
