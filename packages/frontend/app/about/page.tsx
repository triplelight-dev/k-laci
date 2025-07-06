export const dynamic = 'force-static';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="mb-6 text-4xl font-bold text-white">About KLACI</h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          지역자산역량지수(KLACI)는 한국의 지역별 자산과 역량을 종합적으로 분석하여 
          지역의 경쟁력과 발전 잠재력을 평가하는 지표입니다.
        </p>
        {/* 추가 About 페이지 콘텐츠는 여기에 구현하세요 */}
      </div>
    </div>
  );
}
