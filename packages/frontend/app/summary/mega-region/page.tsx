import type { Metadata } from 'next';
import MegaRegionPageClient from './MegaRegionPageClient';

export const metadata: Metadata = {
  title: '5극 3특 종합순위 | 지역자산역량지수(KLACI)',
  description: '전국 5극 3특 지역별 종합순위를 확인하세요. 8개 행정체제별 종합 점수와 강점 지표를 한눈에 볼 수 있습니다.',
};

export default function MegaRegionPage() {
  return <MegaRegionPageClient />;
} 