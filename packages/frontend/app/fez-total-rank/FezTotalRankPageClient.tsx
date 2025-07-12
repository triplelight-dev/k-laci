'use client';

import { useTotalRegionRanks } from '@/api/hooks/useTotalRegionRanks';
import { DataStateWrapper } from '@/components/common';
import SummaryLayout from '@/components/layout/SummaryLayout';
import FezTotalRankSection from '@/features/summary/sections/FezTotalRankSection';

export default function FezTotalRankPageClient() {
  const currentYear = new Date().getFullYear();

  const { data, isLoading, error } = useTotalRegionRanks({
    limit: 50,
    year: currentYear,
  });

  return (
    <DataStateWrapper isLoading={isLoading} error={error}>
      <SummaryLayout isBlackTheme={false}>
        <div style={{ width: '1400px', margin: '0 auto' }}>
          <FezTotalRankSection data={data?.data || []} />
        </div>
      </SummaryLayout>
    </DataStateWrapper>
  );
} 