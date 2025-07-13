'use client';

import { useNationalIndustrialZoneRanks } from '@/api/hooks/useRankingData';
import { DataStateWrapper } from '@/components/common';
import NationalIndustrialZoneRankSection from '@/features/summary/sections/NationalIndustrialZoneRankSection';

export default function NationalIndustrialZoneRankPageClient() {
  const currentYear = new Date().getFullYear();

  const { data, isLoading, error } = useNationalIndustrialZoneRanks({
    limit: 100,
    year: currentYear,
  });

  console.log('### NationalIndustrialZone DEBUG ###', { data, isLoading, error });

  return (
    <DataStateWrapper isLoading={isLoading} error={error} isBlackTheme={false}>
      <div style={{ width: '1400px', margin: '0 auto' }}>
        <NationalIndustrialZoneRankSection data={data?.data || []} />
      </div>
    </DataStateWrapper>
  );
}
