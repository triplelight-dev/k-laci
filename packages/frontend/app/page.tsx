import HomeLayout from '@/components/layout/HomeLayout';
import IntroSection from '@/features/home/sections/IntroSection';

export default function HomePage() {
  // 기존 홈페이지 렌더링 코드 (주석처리)
  return (
    <HomeLayout>
      <IntroSection />
      {/* <DistrictSearchSection />
      <TopDistrictSection />
      <StandardSection />
      <ReportReservationSection /> */}
    </HomeLayout>
  );
}
