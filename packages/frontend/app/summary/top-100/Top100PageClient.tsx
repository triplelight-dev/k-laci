'use client';

import { useTotalRegionRanks } from '@/api/hooks/useTotalRegionRanks';
import { TotalRegionRank } from '@/api/types/stats.types';
import SummaryLayout from '@/components/layout/SummaryLayout';
import HomePreRegistrationSection from '@/components/sections/HomePreRegistrationSection';

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
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {currentYear}년 전국 지역 TOP 100
          </h1>
          <p className="text-gray-600">
            종합 점수를 기준으로 한 전국 지역 순위입니다
          </p>
        </div>

        <div className="grid gap-4">
          {data?.data.map((rank: TotalRegionRank) => (
            <div 
              key={rank.id} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                      rank.total_rank <= 10 ? 'bg-red-500' :
                      rank.total_rank <= 30 ? 'bg-orange-500' :
                      rank.total_rank <= 50 ? 'bg-yellow-500' :
                      'bg-gray-500'
                    }`}>
                      {rank.total_rank}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {rank.region.name}
                    </h3>
                    <p className="text-gray-600">
                      {rank.region.province.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {rank.region.klaci.nickname} ({rank.region.klaci.code})
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    {rank.total_score.toFixed(1)}점
                  </div>
                  <div className="text-sm text-gray-500">
                    {rank.strength_indexes_details.length}개 강점 지표
                  </div>
                </div>
              </div>

              {rank.strength_indexes_details.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">주요 강점 지표:</h4>
                  <div className="flex flex-wrap gap-2">
                    {rank.strength_indexes_details.slice(0, 3).map((index) => (
                      <span 
                        key={index.id}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {index.name}
                      </span>
                    ))}
                    {rank.strength_indexes_details.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{rank.strength_indexes_details.length - 3}개 더
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <HomePreRegistrationSection />
    </SummaryLayout>
  );
} 