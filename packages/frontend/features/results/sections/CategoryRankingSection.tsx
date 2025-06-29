'use client';

import PremiumContentTitle from '@/components/ui/PremiumContentTitle';
import { categoryColors } from '@/constants/colors';
import CategoryRanking from '@/features/results/components/CategoryRanking';
import { useDistrict } from '@/store';
import { CategoryData } from '@/types/category';
import { useEffect, useMemo, useState } from 'react';

const CategoryRankingSection = () => {
  const title = '범주 및 세부지표 순위';
  const { selectedRegion } = useDistrict();
  const [isClient, setIsClient] = useState(false);

  // Hydration 에러 방지를 위한 클라이언트 사이드 렌더링
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 실제 API 데이터를 CategoryData로 매핑
  const categories = useMemo(() => {
    if (!selectedRegion?.key_index_ranks) {
      return [];
    }

    const { key_index_ranks } = selectedRegion;
    const {
      growth_category_ranks = [],
      economy_category_ranks = [],
      living_category_ranks = [],
      safety_category_ranks = [],
    } = key_index_ranks;

    const categoryMappings: CategoryData[] = [
      {
        title: '인구성장력',
        color: categoryColors.인구성장력,
        currentRank: selectedRegion.growth_score,
        description: `인구성장력은 지역의 지속가능성을 가늠하는 핵심 지표로서, 단순한 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 그리고 미래 성장 잠재력을 종합적으로 반영합니다. 소멸지수, 혼인 및 출산 관련 지표, 인구 이동(전입·전출), 연령 구조, 외국인 주민 현황, 경제활동인구 및 청년 인구의 규모와 이동 등이 이 범주를 구성하는 주요 요소들입니다. 이러한 지표들은 지역이 얼마나 젊고 활기찬 인구를 유치하고 유지할 수 있는지, 그리고 미래 사회의 변화에 얼마나 능동적으로 대응할 수 있는지를 보여줍니다.`,
        scores: growth_category_ranks.map((rank) => ({
          name: rank.name,
          value: 100 - rank.rank, // 순위를 점수로 변환 (1위가 100점)
          rank: rank.rank,
          totalRank: 0, // 필요한 경우 실제 값으로 업데이트
          description: 'TO BE UPDATED',
        })),
      },
      {
        title: '경제활동력',
        color: categoryColors.경제활동력,
        currentRank: selectedRegion.economy_score,
        description: `경제활동력은 지역 경제의 현재 상태와 미래 성장 잠재력을 종합적으로 평가하는 범주입니다. 재정자립도, 지방세 수입 규모와 같은 재정 건전성 지표부터 지역내총생산(GRDP)으로 대표되는 경제 규모, 실업률 및 청년고용률과 같은 고용 상황, 인구 천 명당 사업체 수, 도·소매업 및 제조업 사업체 수, 코스닥·코스피 상장기업 및 벤처기업 현황, 특허 출원 건수, 농공·산업단지 및 상권 수 등 산업 구조와 혁신 역량을 나타내는 지표들을 포괄합니다. 또한, 타지역 통근취업자 비율, 기초생활수급자 현황, 성별 고용률 격차, 유동인구 데이터 등은 경제활동의 개방성, 포용성, 그리고 역동성을 보여줍니다. 이 범주는 지역 경제가 얼마나 활발하게 움직이고, 얼마나 안정적이며, 미래를 위한 변화와 혁신을 얼마나 잘 수용하고 있는지를 판단하는 기준이 됩니다.`,
        scores: economy_category_ranks.map((rank) => ({
          name: rank.name,
          value: 100 - rank.rank,
          rank: rank.rank,
          totalRank: 0,
          description: 'TO BE UPDATED',
        })),
      },
      {
        title: '생활기반력',
        color: categoryColors.생활기반력,
        currentRank: selectedRegion.living_score,
        description: `생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다. 여기에는 빈집수, 1인당 자동차 등록대수, 주택소유율, 주택노후도와 같은 주거 안정성 및 환경 관련 지표가 포함됩니다. 또한, 광역교통시설 접근 가능 시설 수로 대표되는 교통 편의성, 유아 천 명당 보육시설 수, 인구 천 명당 사설학원 수, 대학교 학생 수와 같은 교육 환경 관련 지표, 그리고 인구 십만 명당 문화기반시설 수와 같은 문화 향유 기회 관련 지표들이 핵심적인 구성 요소입니다. 이러한 지표들은 지역이 주민들에게 얼마나 쾌적하고 편리하며, 풍요로운 삶을 누릴 수 있는 환경을 제공하는지를 보여주며, 이는 지역 주민의 정주 만족도뿐만 아니라 외부 인구 유입을 결정하는 중요한 요인으로 작용합니다.`,
        scores: living_category_ranks.map((rank) => ({
          name: rank.name,
          value: 100 - rank.rank,
          rank: rank.rank,
          totalRank: 0,
          description: 'TO BE UPDATED',
        })),
      },
      {
        title: '안전회복력',
        color: categoryColors.안전회복력,
        currentRank: selectedRegion.safety_score,
        description: `안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다. 이 범주에는 사망률, 치매유병률, 건강관련 삶의 질(EQ-5D), 스트레스인지율, 자살률(역), 미충족 의료율, 인구 천 명당 의료기관 병상 수와 같이 주민의 신체적·정신적 건강 및 의료 접근성과 관련된 지표들이 포함됩니다. 또한, 지역 안전등급 현황, 노인여가복지시설 수, 사회복지시설 수, 사회복지예산 규모, 장애친화인증 건수 등 물리적 안전 및 사회적 안전망의 수준을 보여주는 지표들도 중요합니다. 나아가 지역의 녹지율, 온실가스 배출량과 같은 환경적 지속가능성, 문화재 수로 대표되는 역사문화자원 보존, 그리고 비영리단체 및 사회적기업 수와 같은 공동체 자본 형성 정도까지 포괄합니다. 이는 단순한 사고 예방을 넘어, 주민들이 안심하고 건강한 삶을 영위하며, 예기치 않은 어려움에 직면했을 때 공동체가 함께 이를 극복해 나갈 수 있는 총체적인 능력을 의미합니다.`,
        scores: safety_category_ranks.map((rank) => ({
          name: rank.name,
          value: 100 - rank.rank,
          rank: rank.rank,
          totalRank: 0,
          description: 'TO BE UPDATED',
        })),
      },
    ];

    return categoryMappings;
  }, [selectedRegion]);

  // 클라이언트 사이드에서만 렌더링
  if (!isClient) {
    return (
      <div
        style={{
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
          <PremiumContentTitle title={title} />
        </section>
      </div>
    );
  }

  return (
    <div
      style={{
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
        <PremiumContentTitle title={title} />

        {/* 카테고리 그리드 */}
        <div className="grid grid-cols-1 gap-8">
          {categories.map((category, index) => (
            <CategoryRanking key={index} data={category} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryRankingSection;
