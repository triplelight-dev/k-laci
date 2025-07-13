'use client';

import { useMajorProvincesRanks } from '@/api/hooks/useRankingData';
import { DataStateWrapper } from '@/components/common';
import SummaryLayout from '@/components/layout/SummaryLayout';
import SixMajorProvincesRankingSection from '@/features/summary/sections/SixMajorProvincesRankingSection';

export default function SixMajorProvincesTop50PageClient() {
  const currentYear = new Date().getFullYear();

  const { data, isLoading, error } = useMajorProvincesRanks({
    limit: 50,
    year: currentYear,
  });

  console.log('## this is data', data);

  return (
    <DataStateWrapper isLoading={isLoading} error={error}>
      <SummaryLayout isBlackTheme={false}>
        <div style={{ width: '1400px', margin: '0 auto' }}>
          <SixMajorProvincesRankingSection data={data?.data || []} />
        </div>
      </SummaryLayout>
    </DataStateWrapper>
  );
} 