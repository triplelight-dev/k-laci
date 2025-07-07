import AboutIntroSection from '@/features/about/sections/AboutIntroSection';
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
          maxWidth: '1100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px 20px',
        }}
      >
        <AboutIntroSection />
        <PrincipleSection />
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: DARK_MODE_COLORS.backgroundDarker,
        }}
      >
        <FrameworkSection />
        <ViewResultSuggestionSection />
      </div>
      {/* <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: '80px',
          backgroundColor: DARK_MODE_COLORS.backgroundDarker,
        }}
      ></div> */}
    </>
  );
}
