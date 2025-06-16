import ResultLayout from '@/components/layout/ResultLayout';

// sections
import DistrictSearchSection from './sections/DistrictSearchSection';
import DistrictSelectSection from './sections/DistrictSelectSection';
import CategoryRankingSection from './sections/CategoryRankingSection';
import SummarySection from './sections/SummarySection';
import JewelChartSection from './sections/JewelChartSection';
import TitleSection from './sections/TitleSection';

export default function ResultsPage() {
  return (
    <ResultLayout>
      <div style={{ width: '75%' }}>
        <DistrictSearchSection />
        <DistrictSelectSection />
        <JewelChartSection />
        <TitleSection />
        <SummarySection />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: '#F8F8F8',
          paddingTop: '100px',
        }}
      >
        <CategoryRankingSection />
      </div>
    </ResultLayout>
  );
}
