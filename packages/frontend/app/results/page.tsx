import ResultLayout from '@/components/layout/ResultLayout';

// sections
import DistrictSearchSection from './sections/DistrictSearchSection';
import DistrictSelectSection from './sections/DistrictSelectSection';
import CategoryRankingSection from './sections/CategoryRankingSection';
import SummarySection from './sections/SummarySection';

export default function ResultsPage() {
  return (
    <ResultLayout>
      <DistrictSearchSection />
      <DistrictSelectSection />
      <SummarySection />
      <CategoryRankingSection />
    </ResultLayout>
  );
}
