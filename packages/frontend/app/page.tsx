import HomeLayout from '@/components/layout/HomeLayout';
import WhitePaperBanner from '@/features/home/components/WhitePaperBanner';

// sections
import MobileHomeRedirectClient from '@/components/MobileHomeRedirectClient';
import PartnerShipSection from '@/components/sections/PartnerShipSection';
import StrategySection from '@/components/sections/StrategySection';
import IntroSection from '@/features/home/sections/IntroSection';
import PossibilitySection from '@/features/home/sections/PossibilitySection';
import RankSection from '@/features/home/sections/RankSection';
import RoadmapSection from '@/features/home/sections/RoadmapSection';
import UniquenessSection from '@/features/home/sections/UniquenessSection';
import VideoSection from '@/features/home/sections/VideoSection';

export default function HomePage() {
  return (
    <>
      <div className="hidden lg:block">
        <HomeLayout>
          <WhitePaperBanner />
          <IntroSection />
          <PossibilitySection />
          <UniquenessSection />
          <RankSection />
          <VideoSection />
          <RoadmapSection />
          <StrategySection />
          <PartnerShipSection />
        </HomeLayout>
      </div>
      <div className="block lg:hidden">
        <HomeLayout>
          <MobileHomeRedirectClient />
        </HomeLayout>
      </div>
    </>
  );
}
