'use client';

import ScoreBar from '@/components/atoms/bars/ScoreBar';
import { Divider } from '@/components/atoms/divider';
import { CATEGORIES } from '@/constants/categories';
import { categoryColors } from '@/constants/colors';
import { useIsMobile } from '@/hooks';
import { useStore } from '@/store';
import { parseKlaciCode } from '@/utils/klaciCodeParser';
import { useState } from 'react';
import { SummarySectionHeader } from './SummarySectionHeader';

const MAX_SUMMARY_LENGTH = 0; // 최대 글자수 상수를 정의합니다.
const MAX_CONTENT_HEIGHT = 1000; // 💡 펼쳤을 때 최대로 가질 수 있는 높이 (px)
const COLLAPSED_HEIGHT = 0; // 💡 접혔을 때 보일 높이 (px)

const CompetencyDistSection = () => {
  const { selectedRegion, regionLoading } = useStore((state) => state.district);
  const isMobile = useIsMobile();

  // KLACI 코드 파싱 예시 (selectedRegion에 klaci_code가 있다고 가정)
  const klaciCodeResult = selectedRegion?.klaci_code
    ? parseKlaciCode(selectedRegion.klaci_code)
    : [];

  // selectedRegion에서 점수 데이터를 가져와서 카테고리 데이터 생성
  const getCategoriesData = (): CategoryData[] => {
    if (!selectedRegion) {
      return []; // 기본값 반환
    }

    const score = {
      G: selectedRegion.growth_score ?? 0,
      S: selectedRegion.growth_score ?? 0, // S도 growth_score를 사용 (임시)
      T: selectedRegion.economy_score ?? 0,
      C: selectedRegion.economy_score ?? 0, // C도 economy_score를 사용 (임시)
      V: selectedRegion.living_score ?? 0,
      M: selectedRegion.living_score ?? 0, // M도 living_score를 사용 (임시)
      R: selectedRegion.safety_score ?? 0,
      A: selectedRegion.safety_score ?? 0, // A도 safety_score를 사용 (임시)
    };

    const categoryData: CategoryData[] = klaciCodeResult.map(
      ({ name, code, description }) => {
        return {
          title: name,
          code,
          color: categoryColors[name as keyof typeof categoryColors],
          score: score[code as keyof typeof score],
          description,
        };
      },
    );
    return categoryData;
  };

  const categories = getCategoriesData();

  // 로딩 중일 때는 기존 데이터를 유지하면서 로딩 표시
  if (regionLoading && !selectedRegion) {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <PremiumContentTitle title={title} /> */}
          {!isMobile &&
            <SummarySectionHeader badgeLabel='ARCHETYPE BAR' title='역량 분포' />
          }
          {isMobile &&
            <SummarySectionHeader badgeLabel="" title="역량 분포" />
          }

          <div
            style={{
              background: '#FAFAFA',
              borderRadius: '42px',
              padding: '35px 30px',
              width: '100%',
              textAlign: 'center',
              color: '#666',
            }}
          >
            데이터를 불러오는 중...
          </div>
        </section>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* 타이틀 */}
        {/* <PremiumContentTitle title={title} /> */}
        {!isMobile &&
          <SummarySectionHeader badgeLabel='ARCHETYPE BAR' title='역량 분포' />
        }
        {isMobile &&
          <SummarySectionHeader badgeLabel="" title="역량 분포" />
        }

        <Divider style={{ margin: '60px 0 0px' }} />


        {/* 카테고리 카드들 */}

        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} index={index} categories={categories} />
        ))}

      </section>
    </div>
  );
};

interface CategoryCardProps {
  category: CategoryData;
  index: number;
  categories: CategoryData[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index, categories }) => {
  const { selectedRegion } = useStore((state) => state.district);
  const isMobile = useIsMobile();

  // 💡 1. 펼침 상태 정의
  const [isExpanded, setIsExpanded] = useState(false);

  const getItems = (
    index: number,
  ): {
    leftItem: string;
    rightItem: string;
  } => {
    if (index === 0) {
      return {
        leftItem: CATEGORIES.인구성장형,
        rightItem: CATEGORIES.인구정착형,
      };
    }
    if (index === 1) {
      return {
        leftItem: CATEGORIES.경제혁신형,
        rightItem: CATEGORIES.경제정속형,
      };
    }
    if (index === 2) {
      return {
        leftItem: CATEGORIES.생활역동형,
        rightItem: CATEGORIES.생활정체형,
      };
    }
    if (index === 3) {
      return {
        leftItem: CATEGORIES.안전회복형,
        rightItem: CATEGORIES.안전정진형,
      };
    }
    return {
      leftItem: '',
      rightItem: '',
    };
  };

  const { leftItem, rightItem } = getItems(index);

  // 지역의 실제 KLACI 코드를 파싱해서 해당 자리의 카테고리 확인
  const getRegionCategoryForIndex = (index: number): string | null => {
    if (!selectedRegion?.klaci_code) return null;

    try {
      const klaciCodeResult = parseKlaciCode(selectedRegion.klaci_code);
      return klaciCodeResult[index]?.name || null;
    } catch (error) {
      console.error('KLACI 코드 파싱 오류:', error);
      return null;
    }
  };

  const regionCategoryForThisIndex = getRegionCategoryForIndex(index);

  // 지역의 실제 카테고리에 따라 left 또는 right를 볼드 처리
  const getBoldItem = (): 'left' | 'right' | 'none' => {
    if (regionCategoryForThisIndex === leftItem) {
      return 'left';
    }
    if (regionCategoryForThisIndex === rightItem) {
      return 'right';
    }
    return 'none';
  };

  const isBold = getBoldItem();
  const isLastIndex = index === categories.length - 1;

  // 💡 1. 텍스트 추출 및 합치기 로직 수정
  const descriptionContent = category.description;

  let fullSummaryText = '';

  if (Array.isArray(descriptionContent)) {
    // description이 string[] 배열인 경우: 줄 바꿈으로 연결
    fullSummaryText = descriptionContent.join('\n');
  } else if (typeof descriptionContent === 'string') {
    // description이 string 단일 문자열인 경우: 그대로 사용
    fullSummaryText = descriptionContent;
  } else {
    // 예상치 못한 타입인 경우: 빈 문자열 처리 (선택적)
    fullSummaryText = '';
  }

  // 💡 2. 표시할 내용 처리 로직
  const displaySummaryText = isExpanded
    ? fullSummaryText
    : fullSummaryText.substring(0, MAX_SUMMARY_LENGTH);

  // 💡 3. 펼쳐보기 버튼 표시 여부
  //    (fullSummaryText가 정의된 후 길이를 확인해야 합니다)
  const showToggleButton = fullSummaryText.length > MAX_SUMMARY_LENGTH;

  return (
    <div
      key={index}
      style={{
        // borderTop: isFirstIndex ? 'none' : '1px solid #D9D9E8',
        // padding: '30px',

      }}
    >
      {/* 바 컴포넌트 */}

      {!isMobile &&
        <>
          <div style={{ padding: '0 135px', marginTop: '80px' }}>
            <div
              style={{
                marginBottom: '60px',
              }}
            >
              <ScoreBar
                leftItem={leftItem}
                rightItem={rightItem}
                score={category.score}
                color={category.color}
                isBold={isBold}
                leftItemKeyColor={category.color}
                mobile={isMobile}
              />
            </div>

            {/* 하단: description */}
            <div
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.5',
                textAlign: 'justify',
                color: 'black',
              }}
            >
              {Array.isArray(category.description)
                ? category.description.map((paragraph, pIndex) => (
                  <p key={pIndex} style={{ marginBottom: '0.75rem' }}>
                    {paragraph}
                  </p>
                ))
                : category.description}
            </div>

          </div>
          {!isLastIndex && <Divider style={{ margin: '80px 0 0' }} />}
        </>
      }

      {isMobile &&
        <>
          <div style={{ padding: '0 135px', marginTop: '80px' }}>
            <div
              style={{
                marginBottom: '60px',
              }}
            >
              <ScoreBar
                leftItem={leftItem}
                rightItem={rightItem}
                score={category.score}
                color={category.color}
                isBold={isBold}
                leftItemKeyColor={category.color}
                mobile={isMobile}
              />
            </div>

            {/* 하단: description */}
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
              <div
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.5',
                  textAlign: 'justify',
                  color: 'black',
                }}
              >
                {Array.isArray(category.description)
                  ? category.description.map((paragraph, pIndex) => (
                    <p key={pIndex} style={{ marginBottom: '0.75rem' }}>
                      {paragraph}
                    </p>
                  ))
                  : category.description}
              </div>


            </div>

            {/* 💡 펼쳐보기/접기 버튼 영역 */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
              {showToggleButton && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    // color: '#0070f3',
                    background: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // 버튼에 그림자 추가
                  }}
                >
                  {isExpanded ? '닫기 ▲' : '펼쳐보기 ▼'}
                </button>
              )}
            </div>

          </div>
          {!isLastIndex && <Divider style={{ margin: '0px 0 0' }} />}
        </>
      }

    </div>
  );
};

interface CategoryData {
  title: string;
  color: string;
  description: string | string[];
  score: number;
}

export default CompetencyDistSection;
