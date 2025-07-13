import type { Metadata } from 'next';
import CategoryRankPageClient from './CategoryRankPageClient';

export const metadata: Metadata = {
  title: '카테고리별 종합순위 | 지역자산역량지수(KLACI)',
  description: '전국 카테고리별 종합순위를 확인하세요. 인구, 경제, 생활, 안전 등 카테고리별 종합 점수와 강점 지표를 한눈에 볼 수 있습니다.',
};

export default function CategoryRankPage() {
  return <CategoryRankPageClient />;
} 