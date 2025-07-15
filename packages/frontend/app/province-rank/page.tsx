import type { Metadata } from 'next';
import ProvinceRankPageClient from './ProvinceRankPageClient';

export const metadata: Metadata = {
  title: '광역시·도별 순위 | 지역자산역량지수(KLACI)',
  description: '전국 17개 광역시·도별 지역 순위를 확인하세요. 각 도별 소속 지역들의 종합 점수와 강점 지표를 한눈에 볼 수 있습니다.',
};

export default function ProvinceRankPage() {
  return <ProvinceRankPageClient />;
} 