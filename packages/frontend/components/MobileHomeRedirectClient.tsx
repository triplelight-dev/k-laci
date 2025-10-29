'use client';

import MobileRedirector from '@/components/MobileRedirector';
import dynamic from 'next/dynamic';

// 💡 여기서 dynamic import와 ssr: false를 사용합니다.
const DynamicMobileRedirector = dynamic(
    () => import('@/components/MobileRedirector'),
    { ssr: false }
);

export default function MobileHomeRedirectClient() {
    return (
        <MobileRedirector />
    );
}