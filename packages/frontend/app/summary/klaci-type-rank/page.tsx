import type { Metadata } from 'next';
import KlaciTypeRankPageClient from './KlaciTypeRankPageClient';

export const metadata: Metadata = {
  title: '유형별 종합순위 | 지역자산역량지수(KLACI)',
  description: '',
};

export default function KlaciTypeRankPage() {
  return <KlaciTypeRankPageClient />;
} 