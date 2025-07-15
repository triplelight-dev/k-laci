import type { Metadata } from 'next';
import ProvinceRankPageClient from './ProvinceRankPageClient';

export const metadata: Metadata = {
  title: '광역별 종합순위 | 지역자산역량지수(KLACI)',
  description: '',
};

export default function ProvinceRankPage() {
  return <ProvinceRankPageClient />;
} 