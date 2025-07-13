'use client';

import { useCostalCityRanks } from '@/api/hooks/useRankingData';
import { DataStateWrapper } from '@/components/common';
import CoastalCityRankSection from '@/features/summary/sections/CoastalCityRankSection';

export default function CoastalCityRankPageClient() {
  const currentYear = new Date().getFullYear();

  const { data, isLoading, error } = useCostalCityRanks({
    limit: 100,
    year: currentYear,
  });

  console.log('### CoastalCity DEBUG ###', { data, isLoading, error });

  return (
    <DataStateWrapper isLoading={isLoading} error={error} isBlackTheme={false}>
      <div style={{ width: '1400px', margin: '0 auto' }}>
        <CoastalCityRankSection data={data?.data || []} />
      </div>
    </DataStateWrapper>
  );
} 