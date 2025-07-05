import type { Metadata } from 'next';
import SummaryPageClient from './SummaryPageClient';

export const metadata: Metadata = {
  title: '소개 | 지역자산역량지수(KLACI)',
};

export default function SummaryPage() {
  return <SummaryPageClient />;
}
