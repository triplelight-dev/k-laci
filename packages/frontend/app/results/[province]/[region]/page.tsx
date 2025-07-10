import type { Metadata } from 'next';
import ResultsPageClient from '../../ResultsPageClient';

export const metadata: Metadata = {
  title: '지자체 조회 | 지역자산역량지수(KLACI)',
};

interface ResultsPageProps {
  params: Promise<{
    province: string;
    region: string;
  }>;
}

export default async function ResultsPage({ params }: ResultsPageProps) {
  const { region } = await params;
  return <ResultsPageClient regionId={region} />;
} 