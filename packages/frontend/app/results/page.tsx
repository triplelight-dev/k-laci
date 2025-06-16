import Header from '@/components/Header';
import Footer from '@/components/Footer';

import ResultLayout from '@/components/layout/ResultLayout';

// sections
import DistrictSearchSection from './sections/DistrictSearchSection';
import CategoryRankingSection from './sections/CategoryRankingSection';
import SummarySection from './sections/SummarySection';

export default function ResultsPage() {
  return (
    <ResultLayout>
      <DistrictSearchSection />
      <SummarySection />
      <CategoryRankingSection />
    </ResultLayout>
  );
}
