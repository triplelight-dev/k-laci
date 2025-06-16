import MainLayout from '@/components/layout/MainLayout';

// sections
import IntroSection from './home/IntroSection';
import StandardSection from './home/StandardSection';
import TopDistrictSection from './home/TopDistrictSection';
import ReportReservationSection from './home/ReportReservationSection';
import DistrictSearchSection from './home/DistrictSearchSection';

export default function Home() {
  return (
    <MainLayout>
      <IntroSection />
      <StandardSection />
      <TopDistrictSection />
      <ReportReservationSection />
      <DistrictSearchSection />
    </MainLayout>
  );
}
