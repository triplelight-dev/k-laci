'use client';

import { useMajorProvincesRanks } from '@/api/hooks/useRankingData';
import { DataStateWrapper } from '@/components/common';
import SixMajorProvincesRankingSection from '@/features/summary/sections/SixMajorProvincesRankingSection';

export default function SixMajorProvincesTop50PageClient() {
  const currentYear = new Date().getFullYear();

  const { data, isLoading, error } = useMajorProvincesRanks({
    limit: 50,
    year: currentYear,
  });

  // 디버깅 로그 추가
  console.log('### SixMajorProvinces DEBUG ###');
  console.log('data:', data);
  console.log('isLoading:', isLoading);
  console.log('error:', error);

  return (
    <DataStateWrapper isLoading={isLoading} error={error} isBlackTheme={false}>
      <div style={{ width: '1400px', margin: '0 auto' }}>
        <SixMajorProvincesRankingSection data={data?.data || []} />
      </div>
    </DataStateWrapper>
  );
} 