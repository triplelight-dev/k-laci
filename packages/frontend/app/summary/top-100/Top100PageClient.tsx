'use client';

import { useTotalRegionRanks } from '@/api/hooks/useTotalRegionRanks';
import SummaryLayout from '@/components/layout/SummaryLayout';
import HomePreRegistrationSection from '@/components/sections/HomePreRegistrationSection';
import TotalRankingSection from '@/components/sections/TotalRankingSection';

export default function Top100PageClient() {
  const currentYear = new Date().getFullYear();
  
  const { data, isLoading, error } = useTotalRegionRanks({ 
    limit: 100, 
    year: currentYear 
  });

  if (isLoading) {
    return (
      <SummaryLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">데이터를 불러오는 중...</p>
          </div>
        </div>
      </SummaryLayout>
    );
  }

  if (error) {
    return (
      <SummaryLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-red-600 mb-4">데이터를 불러오는 중 오류가 발생했습니다.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              다시 시도
            </button>
          </div>
        </div>
      </SummaryLayout>
    );
  }

  return (
    <SummaryLayout>
      <TotalRankingSection data={data?.data || []} />
      
      <HomePreRegistrationSection />
    </SummaryLayout>
  );
} 