'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;
const REDIRECT_KEY = 'hasRedirectedToResults';
const TARGET_URL = '/results';

export default function MobileRedirector() {
    const router = useRouter();

    useEffect(() => {
        // 1. 클라이언트 환경 확인
        if (typeof window === 'undefined') return;

        const hasRedirected = localStorage.getItem(REDIRECT_KEY);
        const isMobileDevice = window.innerWidth <= MOBILE_BREAKPOINT;

        // 2. 리디렉션 조건: 모바일이며, 이전에 리디렉션된 적이 없는 경우
        if (isMobileDevice) {
            console.log("모바일 환경 감지. /results로 리디렉션합니다.");

            localStorage.setItem(REDIRECT_KEY, 'true');
            router.replace(TARGET_URL);
        }
    }, [router]);

    // 리디렉션 로직만 담당하며 UI는 렌더링하지 않습니다.
    return null;
}