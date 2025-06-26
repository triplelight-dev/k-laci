'use client';

import ScoreBar from '@/components/atoms/bars/ScoreBar';
import { categoryColors } from '@/constants/colors';
import { useStore } from '@/store';

const CompetencyDistSection = () => {
  const title = '원형별 역량 분포';
  const selectedDistrict = useStore((state) => state.district.selectedDistrict);
  console.log(selectedDistrict);

  // selectedDistrict에서 점수 데이터를 가져와서 카테고리 데이터 생성
  const getCategoriesData = (): CategoryData[] => {
    if (!selectedDistrict) {
      return mockCategories; // 기본값 반환
    }

    return [
      {
        title: '인구성장력',
        color: categoryColors.인구성장력,
        currentRank: 33,
        totalRank: 229,
        score: selectedDistrict.growth_score,
        description: [
          '인구성장력은 지역의 지속가능성을 가늠하는 핵심 지표로서, 단순한 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 그리고 미래 성장 잠재력을 종합적으로 반영합니다. 인구성장력은 지역의 지속가능성을 가늠하는 핵심 지표로서, 단순한 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 그리고 미래 성장 잠재력을 종합적으로 반영합니다.',
          '인구성장력은 지역의 지속가능성을 가늠하는 핵심 지표로서, 단순한 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 그리고 미래 성장 잠재력을 종합적으로 반영합니다. 인구성장력은 지역의 지속가능성을 가늠하는 핵심 지표로서, 단순한 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 그리고 미래 성장 잠재력을 종합적으로 반영합니다.',
        ],
      },
      {
        title: '경제활동력',
        color: categoryColors.경제활동력,
        currentRank: 195,
        totalRank: 229,
        score: selectedDistrict.economy_score,
        description: [
          '재정자립도, 지방세 수입 규모와 같은 재정 건전성 지표부터 지역내총생산(GRDP)으로 대표되는 경제 규모, 실업률 및 청년고용률과 같은 고용 상황, 인구 천 명당 사업체 수, 도·소매업 및 제조업 사업체 수, 코스닥·코스피 상장기업 및 벤처기업 현황, 특허 출원 건수, 농공·산업단지 및 상권 수 등 산업 구조와 혁신 역량을 나타내는 지표들을 포괄합니다.',
          '재정자립도, 지방세 수입 규모와 같은 재정 건전성 지표부터 지역내총생산(GRDP)으로 대표되는 경제 규모, 실업률 및 청년고용률과 같은 고용 상황, 인구 천 명당 사업체 수, 도·소매업 및 제조업 사업체 수, 코스닥·코스피 상장기업 및 벤처기업 현황, 특허 출원 건수, 농공·산업단지 및 상권 수 등 산업 구조와 혁신 역량을 나타내는 지표들을 포괄합니다.',
        ],
      },
      {
        title: '생활기반력',
        color: categoryColors.생활기반력,
        currentRank: 47,
        totalRank: 229,
        score: selectedDistrict.living_score,
        description: [
          '생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다. 생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다.  생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다.',
          '생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다. 생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다.  생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다.',
        ],
      },
      {
        title: '안전회복력',
        color: categoryColors.안전회복력,
        currentRank: 192,
        totalRank: 229,
        score: selectedDistrict.safety_score,
        description: [
          '안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다. 안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다.',
          '안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다. 안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다.',
        ],
      },
    ];
  };

  const categories = getCategoriesData();

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
          alignItems: 'flex-start',
        }}
      >
        {/* 타이틀 */}
        <div
          style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            paddingTop: '3rem',
            marginBottom: '2rem',
            color: '#949FB0',
          }}
        >
          {title}
        </div>

        {/* 카테고리 카드들 */}
        <div className="space-y-6">
          {categories.map((category, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '35px',
                // boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '25px',
              }}
            >
              {/* 상단 헤더 */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                }}
              >
                {/* 좌측: 카테고리 키컬러 타이틀과 원 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: category.color,
                    }}
                  >
                    {category.title}
                  </div>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: category.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                  >
                    {String.fromCharCode(65 + index)} {/* A, B, C, D */}
                  </div>
                </div>

                {/* 우측: DBDBE5 색상 타이틀 */}
                <div
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: '#DBDBE5',
                  }}
                >
                  {category.title}
                </div>
              </div>

              {/* 바 컴포넌트 */}
              <div
                style={{
                  marginTop: '35px',
                  marginBottom: '35px',
                }}
              >
                <ScoreBar score={category.score} color={category.color} />
              </div>

              {/* 하단: description */}
              <div
                style={{
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  color: '#666',
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
          ))}
        </div>

        {/* grid는 주석처리 */}
        {/* <div className="grid grid-cols-1 gap-8">
          {mockCategories.map((category, index) => (
            <CategoryRanking key={index} data={category} />
          ))}
        </div> */}
      </section>
    </div>
  );
};

interface CategoryData {
  title: string;
  color: string;
  currentRank: number;
  totalRank: number;
  description: string | string[];
  score: number;
}

const mockCategories: CategoryData[] = [
  {
    title: '인구성장력',
    color: categoryColors.인구성장력,
    currentRank: 33,
    totalRank: 229,
    score: 75,
    description: [
      '인구성장력은 지역의 지속가능성을 가늠하는 핵심 지표로서, 단순한 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 그리고 미래 성장 잠재력을 종합적으로 반영합니다. 인구성장력은 지역의 지속가능성을 가늠하는 핵심 지표로서, 단순한 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 그리고 미래 성장 잠재력을 종합적으로 반영합니다.',
      '인구성장력은 지역의 지속가능성을 가늠하는 핵심 지표로서, 단순한 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 그리고 미래 성장 잠재력을 종합적으로 반영합니다. 인구성장력은 지역의 지속가능성을 가늠하는 핵심 지표로서, 단순한 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 그리고 미래 성장 잠재력을 종합적으로 반영합니다.',
    ],
  },
  {
    title: '경제활동력',
    color: categoryColors.경제활동력,
    currentRank: 195,
    totalRank: 229,
    score: 45,
    description: [
      '재정자립도, 지방세 수입 규모와 같은 재정 건전성 지표부터 지역내총생산(GRDP)으로 대표되는 경제 규모, 실업률 및 청년고용률과 같은 고용 상황, 인구 천 명당 사업체 수, 도·소매업 및 제조업 사업체 수, 코스닥·코스피 상장기업 및 벤처기업 현황, 특허 출원 건수, 농공·산업단지 및 상권 수 등 산업 구조와 혁신 역량을 나타내는 지표들을 포괄합니다.',
      '재정자립도, 지방세 수입 규모와 같은 재정 건전성 지표부터 지역내총생산(GRDP)으로 대표되는 경제 규모, 실업률 및 청년고용률과 같은 고용 상황, 인구 천 명당 사업체 수, 도·소매업 및 제조업 사업체 수, 코스닥·코스피 상장기업 및 벤처기업 현황, 특허 출원 건수, 농공·산업단지 및 상권 수 등 산업 구조와 혁신 역량을 나타내는 지표들을 포괄합니다.',
    ],
  },
  {
    title: '생활기반력',
    color: categoryColors.생활기반력,
    currentRank: 47,
    totalRank: 229,
    score: 82,
    description: [
      '생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다. 생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다.  생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다.',
      '생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다. 생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다.  생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다.',
    ],
  },
  {
    title: '안전회복력',
    color: categoryColors.안전회복력,
    currentRank: 192,
    totalRank: 229,
    score: 38,
    description: [
      '안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다. 안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다.',
      '안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다. 안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다.',
    ],
  },
];

export default CompetencyDistSection;
