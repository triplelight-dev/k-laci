import AboutIntroSection from '@/features/about/sections/AboutIntroSection';

export const dynamic = 'force-static';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AboutIntroSection />
      {/* 추가 About 페이지 섹션들은 여기에 구현하세요 */}
    </div>
  );
}
