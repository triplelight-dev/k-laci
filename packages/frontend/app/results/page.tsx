import { redirect } from 'next/navigation';

export default function ResultsPage() {
  // 기본 지역(regionId: 1)으로 리다이렉트
  redirect('/results/region/1');
}
