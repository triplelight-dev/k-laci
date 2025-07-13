import type { Metadata } from 'next';
import MegaRegionPageClient from './MegaRegionPageClient';

export const metadata: Metadata = {
  title: '5극 3특 종합순위 | 지역자산역량지수(KLACI)',
  description: '',
};

export default function MegaRegionPage() {
  return <MegaRegionPageClient />;
} 