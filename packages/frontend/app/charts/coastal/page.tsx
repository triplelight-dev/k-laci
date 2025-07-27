import type { Metadata } from 'next';
import CoastalCityRankPageClient from './CoastalCityRankPageClient';

export const metadata: Metadata = {
  title: '해안도시 종합순위 | 지역자산역량지수(KLACI)',
  description: '전국 해안도시 해당 지자체 74곳의 종합순위를 확인하세요. 종합 점수와 강점 지표를 한눈에 볼 수 있습니다.',
};

export default function CoastalCityRankPage() {
  return <CoastalCityRankPageClient />;
} 