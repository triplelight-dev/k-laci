import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// sections
import IntroSection from './home/IntroSection';
import StandardSection from './home/StandardSection';
import TopDistrictSection from './home/TopDistrictSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        className="container mx-auto flex-grow p-4"
        style={{ paddingTop: '3rem' }}
      >
        <IntroSection />
        <StandardSection />
        <TopDistrictSection />
      </main>

      <Footer />
    </div>
  );
}
