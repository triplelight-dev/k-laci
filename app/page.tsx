import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// sections
import IntroSection from './home/IntroSection';
import StandardSection from './home/StandardSection';
import TopDistrictSection from './home/TopDistrictSection';
import ReportReservationSection from './home/ReportReservationSection';
import DistrictSearchSection from './home/DistrictSearchSection';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="w-full flex-grow">
        <IntroSection />
        <StandardSection />
        <TopDistrictSection />
        <ReportReservationSection />
        <DistrictSearchSection />
      </main>
      <Footer />
    </div>
  );
}
