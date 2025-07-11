'use client';

import { Divider } from '@/components/atoms/divider';
import { useDistrict } from '@/store';
import { Text } from '@chakra-ui/react';
import React from 'react';
import CompetencyDistSection from './CompetencyDistSection';
import StrengthWeaknessIndexSection from './StrenthWeaknessIndexSection';
import { SummarySectionHeader } from './SummarySectionHeader';

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

// const SummaryItem: React.FC<SummaryItemProps> = ({ data }) => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         paddingBottom: '60px',
//       }}
//     >
//       <div
//         style={{
//           flex: '0 0 85px',
//           color: '#000000',
//           fontSize: '1rem',
//           fontWeight: 600,
//           paddingRight: '2rem',
//         }}
//       >
//         <div
//           style={{
//             display: 'inline-block',
//             padding: '6px 10px',
//             borderRadius: '8px',
//             border: '1px solid #000000',
//             backgroundColor: 'transparent',
//             color: '#000000',
//             fontSize: '0.9rem',
//             fontWeight: 600,
//           }}
//         >
//           {data.title}
//         </div>
//       </div>
//       <div
//         style={{
//           flex: 1,
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '1rem',
//         }}
//       >
//         {data.paragraphs.map((paragraph, index) => (
//           <p
//             key={index}
//             style={{
//               color: 'black',
//               fontSize: '0.9rem',
//               lineHeight: 1.8,
//               margin: 0,
//             }}
//           >
//             {paragraph}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };

const SummarySection: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  // Zustand에서 selectedRegion 가져오기
  const { selectedRegion } = useDistrict();

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

  console.log(selectedRegion.klaci);
  // // selectedRegion의 klaci 데이터를 활용하여 summaryData 구성
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
    // summaryData.improvements,
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
            borderRadius: isLoggedIn ? '56px' : '56px 56px 0 0',
            backgroundColor: 'white',
            padding: '95px 0',
            justifyContent: 'center',
            paddingBottom: isLoggedIn ? '95px' : '0',
          }}
        >
          <SummarySectionHeader
            badgeLabel='OVERVIEW'
            title='유형 개요'
          />

          <Divider style={{ margin: '60px 0 0' }} />

          <Text
            fontSize='18px'
            fontWeight='400'
            lineHeight='28px'
            color='#000'
            padding='80px 135px'
            textAlign='justify'
            whiteSpace='pre-line'
          >{summaryItems.map((item) => item.paragraphs.join('\n\n'))}</Text>

          <Divider style={{ margin: '0 0 60px' }} />

          <SummarySectionHeader
            badgeLabel='KEY INDEX'
            title='주요 세부지표'
          />

          <Divider style={{ margin: '60px 0 100px' }} />


          {/* 로그인 상태에 따른 조건부 렌더링 */}
          {isLoggedIn ? (
            // 로그인된 사용자: 모든 섹션 표시
            <React.Fragment >
              <div style={{ padding: '0 135px' }} suppressHydrationWarning><StrengthWeaknessIndexSection /></div>

              <Divider style={{ margin: '100px 0 60px' }} />
              <CompetencyDistSection />

            </React.Fragment>
          ) : (
            // 비로그인 사용자: StrengthWeaknessIndexSection만 부분 표시 (fadeout 효과)

            <div style={{ padding: '0 135px' }} suppressHydrationWarning><StrengthWeaknessIndexSection /></div>

          )}

          {/* <Flex flexDirection='column' gap='60px' padding='0 135px'>
            {summaryItems.map((item, index) => (
              <SummaryItem key={index} data={item} />
            ))}
          </Flex> */}
        </div>
      </section >
    </div >
  );
};

export default SummarySection;

const typeOverviewDescription = `안전복지형(GCMR)은 인구가 지속해서 유입되고(G) 지역 주민의 건강 수준이나 지역 방범·치안 수준이 높아(R) 안정적인 공동체 형성을 위한 기반이 마련돼 있지만, 주거·교통·교육 등 생활기반시설이 미흡하고(M) 일자리와 부가가치를 창출하는 산업 기반이 취약해(C) 전반적으로 역동성이 낮은 유형입니다. 

인구·경제·생활 환경 측면에서 급격한 변화가 없는 편으로, 오래된 주거지역을 중심으로 점진적으로 인구가 증가하며 기존의 상권과 생활기반시설을 유지해온 지역이 이 유형에 해당됩니다. 주민들의 생활은 안정적이고 안전한 편이지만, 편의시설 및 교육·문화시설이 부족하고 지역 상권이 한정돼 있어 생활 전반의 만족도는 낮을 수 있습니다. 

안전복지형의 핵심 자산은 안전한 환경과 꾸준한 인구 유입입니다. 잘 갖춰진 복지·안전 인프라는 어린 자녀를 둔 가정, 여성 1인가구, 고령층에게 특히 매력적인 요소로 작용해 점진적인 인구 유입을 촉진합니다. 다만 주거, 대중교통, 교육·문화시설 등 기초적인 생활 인프라가 양적으로 부족하거나 질적으로 미흡하므로, 빈집정비사업, 도시재생사업 등 지자체 및 중앙정부의 정책자금을 투입한 개선 방안이 필요합니다. 

주민들의 삶의 질 향상을 위해 주민센터, 사회복지관 등 기존 복지시설을 중심으로 문화·여가 프로그램을 확대하는 방안도 효과적일 수 있습니다. 이는 지역 내 문화예술 인력 발굴 및 고용 창출로 이어지며, 지역 주민 간 교류를 촉진해 공동체 기반의 다양한 사회참여 활동을 확산할 수 있습니다. 이처럼 점진적이고 안정적인 성장을 추구하며, 지역 주민의 삶의 질 향상에 집중해 주민들이 주도적으로 지역사회와 경제에 활력을 불어넣도록 유도하는 전략을 고려해볼 수 있습니다.  `

