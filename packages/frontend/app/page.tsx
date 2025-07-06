import HomeLayout from '@/components/layout/HomeLayout';
import DistrictSearchSection from '@/features/home/sections/DistrictSearchSection';
import IntroSection from '@/features/home/sections/IntroSection';
import ReportReservationSection from '@/features/home/sections/ReportReservationSection';
import StandardSection from '@/features/home/sections/StandardSection';
import TopDistrictSection from '@/features/home/sections/TopDistrictSection';

export default function HomePage() {
  // 기존 홈페이지 렌더링 코드 (주석처리)
  return (
    <HomeLayout>
      <IntroSection />
      <DistrictSearchSection />
      <TopDistrictSection />
      <StandardSection />
      <ReportReservationSection />
    </HomeLayout>
  );
}
