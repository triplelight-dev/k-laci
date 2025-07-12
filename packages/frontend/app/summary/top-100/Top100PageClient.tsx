'use client';

import { useTotalRegionRanks } from '@/api/hooks/useTotalRegionRanks';
import { DataStateWrapper } from '@/components/common';
import SummaryLayout from '@/components/layout/SummaryLayout';
import TotalRankingSection from '@/features/summary/sections/TotalRankingSection';

export default function Top100PageClient() {
  const currentYear = new Date().getFullYear();

  const { data, isLoading, error } = useTotalRegionRanks({
    limit: 100,
    year: currentYear,
  });

  return (
    <DataStateWrapper isLoading={isLoading} error={error}>
      <SummaryLayout isBlackTheme={false}>
        <div style={{ width: '1400px', margin: '0 auto' }}>
          <TotalRankingSection data={data?.data || []} />
        </div>
      </SummaryLayout>
    </DataStateWrapper>
  );
}
