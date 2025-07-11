'use client';

import { useTotalRegionRanks } from '@/api/hooks/useTotalRegionRanks';
import SummaryLayout from '@/components/layout/SummaryLayout';
// import HomePreRegistrationSection from '@/components/sections/HomePreRegistrationSection';
import TotalRankingSection from '@/features/summary/sections/TotalRankingSection';

export default function Top100PageClient() {
  const currentYear = new Date().getFullYear();

  const { data, isLoading, error } = useTotalRegionRanks({
    limit: 100,
    year: currentYear,
  });

  if (isLoading) {
    return (
      <SummaryLayout isBlackTheme={false}>
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2"></div>
            <p className="text-gray-600">데이터를 불러오는 중...</p>
          </div>
        </div>
      </SummaryLayout>
    );
  }

  if (error) {
    return (
      <SummaryLayout isBlackTheme={false}>
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <p className="mb-4 text-red-600">
              데이터를 불러오는 중 오류가 발생했습니다.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              다시 시도
            </button>
          </div>
        </div>
      </SummaryLayout>
    );
  }

  return (
    <SummaryLayout isBlackTheme={false}>
      <TotalRankingSection data={data?.data || []} />

      {/* <HomePreRegistrationSection /> */}
    </SummaryLayout>
  );
}
