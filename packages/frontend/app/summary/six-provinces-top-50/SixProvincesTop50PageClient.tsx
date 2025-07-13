'use client';

import { useSelectedProvincesRanks } from '@/api/hooks/useRankingData';
import { DataStateWrapper } from '@/components/common';
import SummaryLayout from '@/components/layout/SummaryLayout';
import SixProvincesRankingSection from '@/features/summary/sections/SixProvincesRankingSection';

export default function SixProvincesTop50PageClient() {
  const currentYear = new Date().getFullYear();

  const { data, isLoading, error } = useSelectedProvincesRanks({
    limit: 50,
    year: currentYear,
  });

  return (
    <DataStateWrapper isLoading={isLoading} error={error}>
      <SummaryLayout isBlackTheme={false}>
        <div style={{ width: '1400px', margin: '0 auto' }}>
          <SixProvincesRankingSection data={data?.data || []} />
        </div>
      </SummaryLayout>
    </DataStateWrapper>
  );
} 