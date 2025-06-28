'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ResultsPage() {
  const router = useRouter();

  useEffect(() => {
    // 기본 지자체로 리다이렉트
    router.replace('/results/jeonbuk-jeonju');
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontSize: '1.2rem',
      backgroundColor: '#F4F4F4',
      color: '#666'
    }}>
      리다이렉트 중...
    </div>
  );
}
