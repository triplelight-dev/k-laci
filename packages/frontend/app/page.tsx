import IntroSection from '@/features/home/sections/IntroSection';
import DistrictSearchSection from '@/features/home/sections/DistrictSearchSection';
import TopDistrictSection from '@/features/home/sections/TopDistrictSection';
import StandardSection from '@/features/home/sections/StandardSection';
import ReportReservationSection from '@/features/home/sections/ReportReservationSection';

import HomeLayout from '@/components/layout/HomeLayout';

export default function HomePage() {
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
