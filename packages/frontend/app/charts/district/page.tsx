import type { Metadata, Viewport } from 'next';
import DistrictRankPageClient from './DistrictRankPageClient';

export const metadata: Metadata = {
  title: '시군구별 TOP 50 | 지역자산역량지수(KLACI)',
  description: '시, 군, 구 3개 행정단위별 지자체 상위 50곳 순위를 확인하세요.',
};

export default function DistrictRankPage() {
  return <DistrictRankPageClient />;
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}; 