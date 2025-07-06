import HomeLayout from '@/components/layout/HomeLayout';
import IntroSection from '@/features/home/sections/IntroSection';
import PossibilitySection from '@/features/home/sections/PossibilitySection';

export default function HomePage() {
  // 기존 홈페이지 렌더링 코드 (주석처리)
  return (
    <HomeLayout>
      <IntroSection />
      <PossibilitySection />
    </HomeLayout>
  );
}
