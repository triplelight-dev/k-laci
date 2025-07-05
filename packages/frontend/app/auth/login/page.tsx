import type { Metadata } from 'next';
import LoginPageClient from './LoginPageClient';

export const metadata: Metadata = {
  title: '로그인 | 지역자산역량지수(KLACI)',
};

export default function LoginPage() {
  return <LoginPageClient />;
} 