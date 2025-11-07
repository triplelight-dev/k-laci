'use client';

import { Divider } from '@/components/atoms/divider';
import { useIsMobile } from '@/hooks';
import { useDistrict } from '@/store';
import { Text } from '@chakra-ui/react';
import React, { useState } from 'react';
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

const MAX_SUMMARY_LENGTH = 500; // 최대 글자수 상수를 정의합니다.
const MAX_CONTENT_HEIGHT = 2000; // 💡 펼쳤을 때 최대로 가질 수 있는 높이 (px)
const COLLAPSED_HEIGHT = 85; // 💡 접혔을 때 보일 높이 (px)

const SummarySection: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  // Zustand에서 selectedRegion 가져오기
  const { selectedRegion } = useDistrict();

  // 💡 1. 펼침 상태 정의
  const [isExpanded, setIsExpanded] = useState(false);

  const isMobile = useIsMobile();

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

  // 데이터를 배열로 변환하여 매핑하고 전체 내용을 하나의 문자열로 합칩니다.
  const fullSummaryText = summaryData.trait.paragraphs.join('\n');

  // 💡 2. 표시할 내용 처리 로직
  const displaySummaryText = isExpanded
    ? fullSummaryText
    : fullSummaryText.substring(0, MAX_SUMMARY_LENGTH);

  // 💡 3. 펼쳐보기 버튼 표시 여부
  const showToggleButton = fullSummaryText.length > MAX_SUMMARY_LENGTH;

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
            borderRadius: isMobile ? '0px' : (isLoggedIn ? '56px' : '56px 56px 0 0'),
            backgroundColor: 'white',
            padding: '30px 0',
            justifyContent: 'center',
            paddingBottom: isLoggedIn ? isMobile ? '30px' : '95px' : '0',
          }}
        >

          {!isMobile &&
            <>
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
                {fullSummaryText}
              </Text>
            </>
          }

          {isMobile &&
            <>
              <SummarySectionHeader badgeLabel="" title="유형 개요" />

              {/* 💡 아코디언 컨테이너: max-height와 transition 적용 */}
              <div
                style={{
                  // 💡 1. 애니메이션 속성: 부드러운 펼침/접힘 효과
                  transition: 'max-height 0.7s ease-in-out, opacity 0.5s ease-in-out',
                  // 💡 2. 높이 제어: isExpanded 상태에 따라 높이를 설정합니다.
                  maxHeight: isExpanded ? `${MAX_CONTENT_HEIGHT}px` : `${COLLAPSED_HEIGHT}px`,
                  overflow: 'hidden', // 넘치는 내용 숨김
                  // 💡 3. 하단 Fade 효과 (선택 사항: 접혔을 때 가려진 것처럼 보이게 함)
                  // position: 'relative', 
                }}
              >
                <Text
                  fontSize={isMobile ? '15px' : '18px'}
                  fontWeight="400"
                  lineHeight="28px"
                  color="#000"
                  padding="0px 16px"
                  textAlign="justify"
                  whiteSpace="pre-line"
                >
                  {fullSummaryText}
                </Text>
              </div>

              {/* 💡 펼쳐보기/접기 버튼 영역 */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {showToggleButton && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      // color: '#0070f3',
                      background: 'white',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '10px 20px',
                      borderRadius: '8px',
                    }}
                  >
                    <div className="flex cursor-pointer">
                      {/* 1. 텍스트 부분 */}
                      <span className="" style={{ color: '#c9ced3', marginRight: '10px' }}>
                        {isExpanded ? '닫기' : '펼쳐보기'}
                      </span>

                      {/* 2. 이미지 부분 */}
                      <img
                        // isExpanded 상태에 따라 화살표 방향을 텍스트로 대체했으므로, 
                        // 이미지 자체는 그냥 화살표 모양을 유지하거나 
                        // isExpanded 상태에 따라 다른 이미지를 사용해도 됩니다.
                        src={isExpanded ? "/icons/arrow-top.png" : "/icons/arrow-bottom.png"}
                        alt={isExpanded ? '닫기 화살표' : '펼쳐보기 화살표'}
                        width='20px'
                        height='20px'
                      // 텍스트에 이미 ▲, ▼가 있으므로 이미지는 단순히 화살표 이미지를 표시합니다.
                      />
                    </div>
                  </button>
                )}
              </div>
            </>
          }


          {!isMobile &&
            <>
              <Divider style={{ margin: '0 0 60px' }} />
              <SummarySectionHeader badgeLabel="KEY INDEX" title="주요 세부지표" />
              <Divider style={{ margin: '60px 0 100px' }} />
            </>
          }

          {isMobile &&
            <>
              <div
                className='w-full'
                style={{
                  padding: '0px 16px 60px'
                }}
              >
                <Divider />
              </div>
              <SummarySectionHeader badgeLabel="" title="주요 세부지표" />
            </>
          }

          {/* 로그인 상태에 따른 조건부 렌더링 */}
          {isLoggedIn ? (
            // 로그인된 사용자: 모든 섹션 표시
            <React.Fragment>
              <div style={{ padding: isMobile ? '' : '0 135px' }} suppressHydrationWarning>
                <StrengthWeaknessIndexSection />
              </div>

              {!isMobile &&
                <Divider style={{ margin: '100px 0 60px' }} />
              }
              {isMobile &&
                <div style={{ margin: '60px 0 0' }}></div>
              }
              <CompetencyDistSection />
            </React.Fragment>
          ) : (
            // 비로그인 사용자: StrengthWeaknessIndexSection만 부분 표시 (fadeout 효과)

            <div style={{ padding: isMobile ? '' : '0 135px' }} suppressHydrationWarning>
              <StrengthWeaknessIndexSection />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SummarySection;
