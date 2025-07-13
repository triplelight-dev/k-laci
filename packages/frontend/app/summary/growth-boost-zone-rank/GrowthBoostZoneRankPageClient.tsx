'use client';

import { useGrowthBoostZoneRanks } from '@/api/hooks/useRankingData';
import { DataStateWrapper } from '@/components/common';
import GrowthBoostZoneRankSection from '@/features/summary/sections/GrowthBoostZoneRankSection';

export default function GrowthBoostZoneRankPageClient() {
  const currentYear = new Date().getFullYear();

  const { data, isLoading, error } = useGrowthBoostZoneRanks({
    limit: 100,
    year: currentYear,
  });

  console.log('### GrowthBoostZone DEBUG ###', { data, isLoading, error });

  return (
    <DataStateWrapper isLoading={isLoading} error={error} isBlackTheme={false}>
      <div style={{ width: '1400px', margin: '0 auto' }}>
        <GrowthBoostZoneRankSection data={data?.data || []} />
      </div>
    </DataStateWrapper>
  );
} 