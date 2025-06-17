import ResultLayout from '@/components/layout/ResultLayout';

// sections
import DistrictSearchSection from './sections/DistrictSearchSection';
import DistrictSelectSection from './sections/DistrictSelectSection';
import CategoryRankingSection from './sections/CategoryRankingSection';
import SummarySection from './sections/SummarySection';
import JewelChartSection from './sections/JewelChartSection';
import TitleSection from './sections/TitleSection';
import PreRegistrationSection from './sections/PreRegistrationSection';

export default function ResultsPage() {
  return (
    <ResultLayout>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '75%',
            // gap: '100px',
            paddingTop: '70px',
          }}
        >
          <DistrictSearchSection />
          <DistrictSelectSection />
          <JewelChartSection />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            gap: '100px',
          }}
        >
          <TitleSection />
          <SummarySection />
        </div>
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
      <PreRegistrationSection />
    </ResultLayout>
  );
}
