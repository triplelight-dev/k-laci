import type { Metadata } from 'next';
import MyPageClient from './MyPageClient';

export const metadata: Metadata = {
  title: '마이페이지 | 지역자산역량지수(KLACI)',
  description: '지역자산역량지수(KLACI) 마이페이지',
};


export default function SignUpPage() {
  return <MyPageClient />;
}

