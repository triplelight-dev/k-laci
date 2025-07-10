import type { Metadata } from 'next';
import ResultsPageClient from '../../ResultsPageClient';

export const metadata: Metadata = {
  title: '지자체 조회 | 지역자산역량지수(KLACI)',
};

interface ResultsPageProps {
  params: {
    province: string;
    region: string;
  };
}

export default function ResultsPage({ params }: ResultsPageProps) {
  return <ResultsPageClient provinceParam={params.province} regionParam={params.region} />;
} 