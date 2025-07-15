import type { Metadata } from 'next';
import SixMajorProvincesTop50PageClient from './SixMajorProvincesTop50PageClient';

export const metadata: Metadata = {
  title: '6대 광역시 TOP 50 | 지역자산역량지수(KLACI)',
  description: '6대 광역시 지역 종합순위 TOP 50을 확인하세요. 종합 점수와 강점 지표를 한눈에 볼 수 있습니다.',
};

export default function SixMajorProvincesTop50Page() {
  return <SixMajorProvincesTop50PageClient />;
} 