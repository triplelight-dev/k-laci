'use client';

import SummaryLayout from '@/components/layout/SummaryLayout';
import HomePreRegistrationSection from '@/components/sections/HomePreRegistrationSection';
import ComingSoonSection from '@/features/summary/sections/ComingSoonSection';

export const dynamic = 'force-static';

export default function SummaryPageClient() {
  return (
    <SummaryLayout>
      <ComingSoonSection />
      <HomePreRegistrationSection />
    </SummaryLayout>
  );
}
