import type { Metadata } from 'next';
import SignupPageClient from './SignupPageClient';

export const metadata: Metadata = {
  title: '회원가입 | 지역자산역량지수(KLACI)',
};

export default function SignUpPage() {
  return <SignupPageClient />;
}