import AuthLayout from '@/components/layout/AuthLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원정보 입력 - KLACI',
  description: 'KLACI 회원정보 입력 페이지',
};

export default function AuthSignupProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
} 