'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// 기존 홈페이지 컴포넌트들 (주석처리)
// import IntroSection from '@/features/home/sections/IntroSection';
// import DistrictSearchSection from '@/features/home/sections/DistrictSearchSection';
// import TopDistrictSection from '@/features/home/sections/TopDistrictSection';
// import StandardSection from '@/features/home/sections/StandardSection';
// import ReportReservationSection from '@/features/home/sections/ReportReservationSection';
// import HomeLayout from '@/components/layout/HomeLayout';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // 루트 페이지 접근 시 results 페이지로 리다이렉트
    router.replace('/results');
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontSize: '1.2rem',
      color: '#666'
    }}>
      리다이렉트 중...
    </div>
  );

  // 기존 홈페이지 렌더링 코드 (주석처리)
  // return (
  //   <HomeLayout>
  //     <IntroSection />
  //     <DistrictSearchSection />
  //     <TopDistrictSection />
  //     <StandardSection />
  //     <ReportReservationSection />
  //   </HomeLayout>
  // );
}
