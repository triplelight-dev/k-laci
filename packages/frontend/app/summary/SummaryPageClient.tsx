'use client';

import SummaryLayout from '@/components/layout/SummaryLayout';
import SummaryLandingSection from '@/components/sections/SummaryLandingSection';

export const dynamic = 'force-static';

export default function SummaryPageClient() {
  return (
    <SummaryLayout isBlackTheme={true}>
      <SummaryLandingSection />
    </SummaryLayout>
  );
}
