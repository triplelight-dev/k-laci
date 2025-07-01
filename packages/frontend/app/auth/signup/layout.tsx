import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KLACI',
  description: 'KLACI 회원가입 페이지',
};

export default function AuthSignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 