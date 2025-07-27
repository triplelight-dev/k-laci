import type { Metadata } from 'next';
import FezTotalRankPageClient from './FezTotalRankPageClient';

export const metadata: Metadata = {
  title: '경제자유구역 종합순위 | 지역자산역량지수(KLACI)',
  description: '전국 경제자유구역 프로젝트 소재 지자체 26곳의 종합순위를 확인하세요. 종합 점수와 강점 지표를 한눈에 볼 수 있습니다.',
};

export default function FezTotalRankPage() {
  return <FezTotalRankPageClient />;
} 