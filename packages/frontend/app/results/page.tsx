import ResultLayout from '@/components/layout/ResultLayout';

// sections
import DistrictSearchSection from './sections/DistrictSearchSection';
import DistrictSelectSection from './sections/DistrictSelectSection';
import CategoryRankingSection from './sections/CategoryRankingSection';
import SummarySection from './sections/SummarySection';
import JewelChartSection from './sections/JewelChartSection';

export default function ResultsPage() {
  return (
    <ResultLayout>
      <DistrictSearchSection />
      <DistrictSelectSection />
      <JewelChartSection />
      <SummarySection />
      <CategoryRankingSection />
    </ResultLayout>
  );
}
