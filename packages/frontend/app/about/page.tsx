import AboutIntroSection from '@/features/about/sections/AboutIntroSection';
import PrincipleSection from '@/features/home/sections/PrincipleSection';

export const dynamic = 'force-static';

export default function AboutPage() {
  return (
    <>
      <AboutIntroSection />
      <PrincipleSection />
    </>
  );
}
