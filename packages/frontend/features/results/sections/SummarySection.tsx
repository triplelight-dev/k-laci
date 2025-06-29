import { useDistrict } from '@/store';
import React from 'react';

// 타입 정의
interface SummaryItemData {
  title: string;
  paragraphs: string[];
}

interface SummaryData {
  characteristics: SummaryItemData;
  opportunities: SummaryItemData;
  improvements: SummaryItemData;
}

// 재사용 가능한 SummaryItem 컴포넌트
interface SummaryItemProps {
  data: SummaryItemData;
}

const SummaryItem: React.FC<SummaryItemProps> = ({ data }) => {
  return (
    <div
      style={{
        display: 'flex',
        paddingBottom: '60px',
      }}
    >
      <div
        style={{
          flex: '0 0 120px',
          color: '#000000',
          fontSize: '1rem',
          fontWeight: 600,
          paddingRight: '2rem',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '6px 14px',
            borderRadius: '5px',
            border: '1px solid #000000',
            backgroundColor: 'transparent',
            color: '#000000',
            fontSize: '0.9rem',
            fontWeight: 600,
          }}
        >
          {data.title}
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {data.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            style={{
              color: '#000000',
              fontSize: '0.9rem',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

const SummarySection: React.FC = () => {
  // Zustand에서 selectedRegion 가져오기
  const { selectedRegion } = useDistrict();

  console.log('Selected Region:', selectedRegion); // 데이터 확인용

  // selectedRegion이 없을 때 로딩 상태 표시
  if (!selectedRegion) {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}
      >
        <p>지역을 선택해주세요.</p>
      </div>
    );
  }

  // selectedRegion의 klaci 데이터를 활용하여 summaryData 구성
  const summaryData: SummaryData = {
    characteristics: {
      title: '특성',
      paragraphs: selectedRegion.klaci?.trait || ['특성 정보가 없습니다.'],
    },
    opportunities: {
      title: '기회자산',
      paragraphs: selectedRegion.klaci?.opportunity || [
        '기회자산 정보가 없습니다.',
      ],
    },
    improvements: {
      title: '발전방향',
      paragraphs: selectedRegion.klaci?.strategy || [
        '발전방향 정보가 없습니다.',
      ],
    },
  };

  // 데이터를 배열로 변환하여 매핑
  const summaryItems = [
    summaryData.characteristics,
    summaryData.opportunities,
    summaryData.improvements,
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <section>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '12%',
            paddingBottom: '12%',
            borderRadius: '56px',
            backgroundColor: 'white',
            padding: '80px',
          }}
        >
          {summaryItems.map((item, index) => (
            <SummaryItem key={index} data={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SummarySection;
