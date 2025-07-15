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
  trait: SummaryItemData;
}

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

  // // selectedRegion의 klaci 데이터를 활용하여 summaryData 구성
  const summaryData: SummaryData = {
    trait: {
      title: '특성',
      paragraphs: selectedRegion.klaci?.trait || ['특성 정보가 없습니다.'],
    },
  };

  // 데이터를 배열로 변환하여 매핑
  const summaryItems = [summaryData.trait];

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
          <SummarySectionHeader badgeLabel="OVERVIEW" title="유형 개요" />

          <Divider style={{ margin: '60px 0 0' }} />

          <Text
            fontSize="18px"
            fontWeight="400"
            lineHeight="28px"
            color="#000"
            padding="80px 135px"
            textAlign="justify"
            whiteSpace="pre-line"
          >
            {summaryItems.map((item) => item.paragraphs.join('\n'))}
          </Text>

          <Divider style={{ margin: '0 0 60px' }} />

          <SummarySectionHeader badgeLabel="KEY INDEX" title="주요 세부지표" />

          <Divider style={{ margin: '60px 0 100px' }} />

          {/* 로그인 상태에 따른 조건부 렌더링 */}
          {isLoggedIn ? (
            // 로그인된 사용자: 모든 섹션 표시
            <React.Fragment>
              <div style={{ padding: '0 135px' }} suppressHydrationWarning>
                <StrengthWeaknessIndexSection />
              </div>

              <Divider style={{ margin: '100px 0 60px' }} />
              <CompetencyDistSection />
            </React.Fragment>
          ) : (
            // 비로그인 사용자: StrengthWeaknessIndexSection만 부분 표시 (fadeout 효과)

            <div style={{ padding: '0 135px' }} suppressHydrationWarning>
              <StrengthWeaknessIndexSection />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SummarySection;
