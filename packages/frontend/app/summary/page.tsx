import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: '요약 | 지역자산역량지수(KLACI)',
};

export default function SummaryPage() {
  redirect('/summary/top-100');
}
