import type { Metadata } from 'next';
import Top100PageClient from './Top100PageClient';

export const metadata: Metadata = {
  title: '종합순위 TOP 100 | 지역자산역량지수(KLACI)',
  description: '전국 지역 종합순위 TOP 100을 확인하세요. 종합 점수와 강점 지표를 한눈에 볼 수 있습니다.',
};

export default function Top100Page() {
  return <Top100PageClient />;
} 