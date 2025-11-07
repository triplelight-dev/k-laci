import type { Metadata } from 'next';
import LoginPageClient from './LoginPageClient';

export const metadata: Metadata = {
  title: '로그인 | 지역자산역량지수(KLACI)',
};

type LoginPageProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function LoginPage({
  searchParams,
}: LoginPageProps) {

  // 먼저 raw 값 꺼내기 (undefined 가능, string 또는 string[] 일 수 있음)
  const rawFrom = searchParams?.from;

  const fromParam =
    typeof rawFrom === 'string'
      ? rawFrom
      : Array.isArray(rawFrom)
        ? rawFrom[0]
        : undefined;

  return <LoginPageClient {...(fromParam !== undefined ? { from: fromParam } : {})} />;
} 