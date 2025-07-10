import AboutIntroSection from '@/features/about/sections/AboutIntroSection';
import AboutUsSection from '@/features/about/sections/AboutUsSection';
import ViewResultSuggestionSection from '@/features/about/sections/ViewResultSuggestionSection';
import FrameworkSection from '@/features/home/sections/FrameworkSection';
import PrincipleSection from '@/features/home/sections/PrincipleSection';

import { DARK_MODE_COLORS } from '@/utils/colors';

export const dynamic = 'force-static';

export default function AboutPage() {
  return (
    <>
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '160px',
          marginBottom: '160px',
        }}
      >
        <AboutIntroSection />
        <PrincipleSection />
      </div>
      <div
        style={{
          width: '100%',
          // maxWidth: '1400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: DARK_MODE_COLORS.backgroundDarker,
        }}
      >
        <FrameworkSection />
        <ViewResultSuggestionSection />
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // backgroundColor: DARK_MODE_COLORS.background,
          backgroundColor: '#232631',
        }}
      >
        <AboutUsSection />
      </div>
    </>
  );
}
