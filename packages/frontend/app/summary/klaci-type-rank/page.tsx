import type { Metadata } from 'next';
import KlaciTypeRankPageClient from './KlaciTypeRankPageClient';

export const metadata: Metadata = {
  title: 'KLACI 유형별 종합순위 | 지역자산역량지수(KLACI)',
  description: '전국 KLACI 유형별 종합순위를 확인하세요. 12개 유형별 종합 점수와 강점 지표를 한눈에 볼 수 있습니다.',
};

export default function KlaciTypeRankPage() {
  return <KlaciTypeRankPageClient />;
} 