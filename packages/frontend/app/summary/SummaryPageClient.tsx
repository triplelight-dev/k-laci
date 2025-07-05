'use client';

import SummaryLayout from '@/components/layout/SummaryLayout';
import SummaryGridItem from '@/features/summary/components/SummaryGridItem';
import { SummaryItem } from '@/types/summary';

export const dynamic = 'force-static';

const mockSummaryItems: SummaryItem[] = [
  {
    keyName: '종합순위',
    rankName: 'TOP 20',
    link: '/detail/overall',
  },
  {
    keyName: '인구성장력',
    rankName: 'TOP 33',
    link: '/detail/population',
  },
  {
    keyName: '경제활동력',
    rankName: 'TOP 195',
    link: '/detail/economy',
  },
  {
    keyName: '생활기반력',
    rankName: 'TOP 47',
    link: '/detail/life',
  },
  {
    keyName: '안전회복력',
    rankName: 'TOP 192',
    link: '/detail/safety',
  },
  {
    keyName: '인구밀도',
    rankName: 'TOP 55',
    link: '/detail/density',
  },
  {
    keyName: '고용률',
    rankName: 'TOP 88',
    link: '/detail/employment',
  },
  {
    keyName: '재정자립도',
    rankName: 'TOP 123',
    link: '/detail/finance',
  },
  {
    keyName: '교육환경',
    rankName: 'TOP 67',
    link: '/detail/education',
  },
  {
    keyName: '의료접근성',
    rankName: 'TOP 159',
    link: '/detail/medical',
  },
  {
    keyName: '문화시설',
    rankName: 'TOP 42',
    link: '/detail/culture',
  },
  {
    keyName: '교통인프라',
    rankName: 'TOP 98',
    link: '/detail/transportation',
  },
  {
    keyName: '창업활동',
    rankName: 'TOP 145',
    link: '/detail/startup',
  },
  {
    keyName: '환경지수',
    rankName: 'TOP 76',
    link: '/detail/environment',
  },
  {
    keyName: '복지시설',
    rankName: 'TOP 112',
    link: '/detail/welfare',
  },
  {
    keyName: '주거환경',
    rankName: 'TOP 167',
    link: '/detail/housing',
  },
];

export default function SummaryPageClient() {
  const title = 'Key Findings';
  return (
    <SummaryLayout>
      <div
        style={{
          width: '75%',
          margin: '0 auto',
          paddingTop: '80px',
          paddingBottom: '80px',
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '2rem',
            textAlign: 'left',
            width: '100%',
          }}
        >
          {title}
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            width: '100%',
          }}
        >
          {mockSummaryItems.map((item, index) => (
            <SummaryGridItem key={index} item={item} />
          ))}
        </div>
      </div>
    </SummaryLayout>
  );
} 