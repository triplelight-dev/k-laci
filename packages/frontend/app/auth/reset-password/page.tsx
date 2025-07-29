import type { Metadata } from 'next';
import { Suspense } from 'react';
import ResetPasswordPageClient from './ResetPasswordPageClient';
import ResetPasswordPageLoading from './ResetPasswordPageLoading';

export const metadata: Metadata = {
  title: '비밀번호 재설정 | 지역자산역량지수(KLACI)',
};

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<ResetPasswordPageLoading />}>
      <ResetPasswordPageClient />
    </Suspense>
  );
}
