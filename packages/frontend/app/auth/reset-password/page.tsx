import type { Metadata } from 'next';
import ResetPasswordPageClient from './ResetPasswordPageClient';

export const metadata: Metadata = {
  title: '비밀번호 재설정 | 지역자산역량지수(KLACI)',
};

export default function ResetPasswordPage() {
  return <ResetPasswordPageClient />;
}
