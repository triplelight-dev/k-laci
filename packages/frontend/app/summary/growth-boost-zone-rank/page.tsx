import type { Metadata } from 'next';
import GrowthBoostZoneRankPageClient from './GrowthBoostZoneRankPageClient';

export const metadata: Metadata = {
  title: '성장촉진지역 종합순위 | 지역자산역량지수(KLACI)',
  description: '전국 성장촉진지역 지정 지자체 70곳의 종합순위를 확인하세요. 종합 점수와 강점 지표를 한눈에 볼 수 있습니다.',
};

export default function GrowthBoostZoneRankPage() {
  return <GrowthBoostZoneRankPageClient />;
}
