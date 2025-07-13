import type { Metadata } from 'next';
import CategoryRankPageClient from './CategoryRankPageClient';

export const metadata: Metadata = {
  title: '핵심범주별 TOP 50 | 지역자산역량지수(KLACI)',
  description: '',
};

export default function CategoryRankPage() {
  return <CategoryRankPageClient />;
} 