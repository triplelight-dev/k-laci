'use client';

import { Divider } from '@/components/atoms/divider';
import PremiumContentTitle from '@/components/ui/PremiumContentTitle';
import { CATEGORY_NAMES, categoryColors } from '@/constants/colors';
import { NUM_OF_REGIONS } from '@/constants/data';
import CategoryRanking from '@/features/results/components/CategoryRanking';
import { useDistrict } from '@/store';
import { CategoryData } from '@/types/category';
import { Flex } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { SummarySectionHeader } from './SummarySectionHeader';

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

    const { key_index_ranks, category_ranks } = selectedRegion;
    const {
      growth_category_ranks = [],
      economy_category_ranks = [],
      living_category_ranks = [],
      safety_category_ranks = [],
    } = key_index_ranks;

    // category_ranks에서 카테고리별 순위를 찾는 함수
    const getCategoryRank = (categoryName: string): number => {
      if (!category_ranks || category_ranks.length === 0) {
        return NUM_OF_REGIONS; // 기본값
      }

      const categoryRank = category_ranks.find(
        (rank) => rank.category.name === categoryName,
      );

      return categoryRank?.rank || NUM_OF_REGIONS;
    };

    const categoryMappings: CategoryData[] = [
      {
        title: CATEGORY_NAMES.GROWTH,
        color: categoryColors[CATEGORY_NAMES.GROWTH],
        currentRank: getCategoryRank(CATEGORY_NAMES.GROWTH),
        description: `인인구성장력은 지역의 지속가능성을 가늠하는 핵심 범주로서, 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 미래 성장 잠재력을 종합적으로 반영합니다. 지역소멸지수, 혼인 및 출산 관련 지표, 인구 이동(전입·전출), 연령 구조, 외국인 주민 현황, 경제활동인구 및 청년 인구의 규모와 이동 등이 인구성장력 범주의 주요 세부지표로, 지역이 얼마나 젊고 활기찬 인구 집단을 유치하고 유지할 수 있는지, 나아가 미래 사회의 변화에 얼마나 능동적으로 대응할 수 있는지를 보여줍니다.`,
        rank: growth_category_ranks
          .map((rank) => ({
            key_index_id: rank.key_index_id,
            name: rank.name,
            value: 100 - rank.rank,
            rank: rank.rank,
            description: 'TO BE UPDATED',
          }))
          .sort((a, b) => (a.key_index_id || 0) - (b.key_index_id || 0)),
      },
      {
        title: CATEGORY_NAMES.ECONOMY,
        color: categoryColors[CATEGORY_NAMES.ECONOMY],
        currentRank: getCategoryRank(CATEGORY_NAMES.ECONOMY),
        description: `경제활동력은 지역경제의 현재 상황과 미래 성장 잠재력을 종합적으로 평가하는 범주입니다. 세부지표에는 재정자립도, 지방세 수입 규모와 같은 재정 건전성 지표부터 지역내총생산(GRDP)으로 대표되는 경제 규모, 실업률 및 청년 고용률과 같은 고용 상황, 사업체 수, 코스닥·코스피 상장기업 및 벤처기업 현황, 특허 건수, 농공·산업단지 및 상권 수 등 산업 구조와 혁신 역량을 나타내는 요소들이 포함됩니다. 이밖에 타지역 통근 취업자 비율, 기초생활수급자 현황, 성별 고용률 격차, 유동인구 데이터 등으로 경제활동의 개방성, 포용성, 역동성을 파악하고자 했습니다. 따라서 경제활동력 범주는 지역경제가 얼마나 활발하게 움직이는지, 얼마나 안정적인지, 미래를 위한 변화와 혁신을 얼마나 잘 수용하고 있는지를 판단하는 기준이 됩니다.`,
        rank: economy_category_ranks
          .map((rank) => ({
            key_index_id: rank.key_index_id,
            name: rank.name,
            value: 100 - rank.rank,
            rank: rank.rank,
            description: 'TO BE UPDATED',
          }))
          .sort((a, b) => a.key_index_id - b.key_index_id),
      },
      {
        title: CATEGORY_NAMES.LIVING,
        color: categoryColors[CATEGORY_NAMES.LIVING],
        currentRank: getCategoryRank(CATEGORY_NAMES.LIVING),
        description: `생활기반력은 지역 주민의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다. 세부지표에는 빈집 수, 자동차 등록대수, 주택노후도와 같은 주거 안정성 및 환경 관련 지표를 비롯해 보육시설 수, 사설학원 수 등 교육 환경 관련 지표, 문화시설 수와 같은 문화 향유 기회 관련 지표 등이 포함됩니다. 따라서 생활기반력은 지역이 생활 환경으로서 얼마나 쾌적하고 풍요로운지를 보여주며, 이는 지역 주민의 정주 만족도뿐만 아니라 외부 인구 유입을 결정하는 중요한 요인으로 작용합니다.`,
        rank: living_category_ranks
          .map((rank) => ({
            key_index_id: rank.key_index_id,
            name: rank.name,
            value: 100 - rank.rank,
            rank: rank.rank,
            description: 'TO BE UPDATED',
          }))
          .sort((a, b) => a.key_index_id - b.key_index_id),
      },
      {
        title: CATEGORY_NAMES.SAFETY,
        color: categoryColors[CATEGORY_NAMES.SAFETY],
        currentRank: getCategoryRank(CATEGORY_NAMES.SAFETY),
        description: `안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 범주입니다. 세부지표에는 사망률, 치매유병률, EQ5D, 스트레스인지율 등 건강 및 의료 접근성과 관련 지표를 포함해 지역안전등급, 사회복지시설수, 장애친화인증건수 등 물리적 안전 및 사회적 안전망의 수준을 보여주는 지표들이 포함됩니다. 나아가 녹지율, 온실가스배출량과 같은 환경적 지속가능성, 문화재 수로 대표되는 역사문화자원 보존, 그리고 비영리·사회적기업수와 같은 공동체 자본 형성 정도까지 포괄합니다. 이는 단순한 사고 예방을 넘어, 주민들이 안심하고 건강한 삶을 영위하며, 공동체가 함께 이를 극복해 나갈 수 있는지 가늠할 수 있는 요소입니다.`,
        rank: safety_category_ranks
          .map((rank) => ({
            key_index_id: rank.key_index_id,
            name: rank.name,
            value: 100 - rank.rank,
            rank: rank.rank,
            description: 'TO BE UPDATED',
          }))
          .sort((a, b) => a.key_index_id - b.key_index_id),
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
        marginTop: '105px',
        width: '100%',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        {/* 타이틀 */}
        <Flex style={{ width: '100%', justifyContent: 'center' }}>
          <SummarySectionHeader
            badgeLabel='INDEX RANKING'
            title='범주 및 세부지표 순위'
          />
        </Flex>

        <Divider style={{ margin: '80px 0 100px' }} />

        {/* 카테고리 그리드 */}
        <div className="grid grid-cols-1" style={{ width: '100%' }}>
          {categories.map((category, index) => (
            <><div style={{ margin: '0 auto' }}><CategoryRanking
              key={index}
              categoryData={category}
              index={index} /></div >
              <Divider style={{ margin: '80px 0 100px' }} /></>
          ))}
        </div>
      </section >
    </div >
  );
};

export default CategoryRankingSection;
