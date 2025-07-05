import type { Metadata } from 'next';
import ResultsPageClient from './ResultsPageClient';

export const metadata: Metadata = {
  title: '지자체 조회 | 지역자산역량지수(KLACI)',
};

export default function ResultsPage() {
  return <ResultsPageClient />;
}
