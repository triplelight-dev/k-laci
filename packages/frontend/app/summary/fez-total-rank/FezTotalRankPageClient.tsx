'use client';

import { useFreeEconomyZoneRanks } from '@/api/hooks/useRankingData';
import { DataStateWrapper } from '@/components/common';
import FezTotalRankSection from '@/features/summary/sections/FezTotalRankSection';

export default function FezTotalRankPageClient() {
  const currentYear = new Date().getFullYear();

  const { data, isLoading, error } = useFreeEconomyZoneRanks({
    limit: 50,
    year: currentYear,
  });

  console.log('### FEZ DEBUG ###', { data, isLoading, error });

  return (
    <DataStateWrapper isLoading={isLoading} error={error} isBlackTheme={false}>
      <div style={{ width: '1400px', margin: '0 auto' }}>
        <FezTotalRankSection data={data?.data || []} />
      </div>
    </DataStateWrapper>
  );
} 