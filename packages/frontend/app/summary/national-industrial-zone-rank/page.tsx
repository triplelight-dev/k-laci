import type { Metadata } from 'next';
import NationalIndustrialZoneRankPageClient from './NationalIndustrialZoneRankPageClient';

export const metadata: Metadata = {
  title: '국가산업단지 종합순위 | 지역자산역량지수(KLACI)',
  description: '전국 국가산업단지 소재 지자체 51곳의 종합순위를 확인하세요. 종합 점수와 강점 지표를 한눈에 볼 수 있습니다.',
};

export default function NationalIndustrialZoneRankPage() {
  return <NationalIndustrialZoneRankPageClient />;
} 