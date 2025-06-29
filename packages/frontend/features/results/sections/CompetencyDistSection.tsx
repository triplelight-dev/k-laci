'use client';

import ScoreBar from '@/components/atoms/bars/ScoreBar';
import PremiumContentTitle from '@/components/ui/PremiumContentTitle';
import { categoryColors } from '@/constants/colors';
import { useStore } from '@/store';
import { parseKlaciCode } from '@/utils/klaciCodeParser';

const CompetencyDistSection = () => {
  const title = '원형별 역량 분포';
  const selectedRegion = useStore((state) => state.district.selectedRegion);

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
      G: selectedRegion.growth_score ? selectedRegion.growth_score : 50,
      S: selectedRegion.growth_score ? selectedRegion.growth_score : 50,
      T: selectedRegion.economy_score ? selectedRegion.economy_score : 50,
      C: selectedRegion.economy_score ? selectedRegion.economy_score : 50,
      V: selectedRegion.living_score ? selectedRegion.living_score : 50,
      M: selectedRegion.living_score ? selectedRegion.living_score : 50,
      R: selectedRegion.safety_score ? selectedRegion.safety_score : 50,
      A: selectedRegion.safety_score ? selectedRegion.safety_score : 50,
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

  console.log('categories', categories);

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
        <PremiumContentTitle title={title} />

        {/* 카테고리 카드들 */}
        <div
          className="space-y-6"
          style={{
            background: '#FAFAFA',
            borderRadius: '42px',
            padding: '35px 30px',
          }}
        >
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

interface CategoryCardProps {
  category: CategoryData;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  const isFirstIndex = index === 0;
  return (
    <div
      key={index}
      style={{
        marginBottom: '25px',
        borderTop: isFirstIndex ? 'none' : '1px solid #D9D9E8',
        padding: '30px',
        paddingTop: '35px',
        paddingBottom: '35px',
      }}
    >
      {/* 바 컴포넌트 */}
      <div
        style={{
          marginTop: '35px',
          marginBottom: '35px',
        }}
      >
        <ScoreBar
          leftItem={category.title}
          rightItem={category.title}
          score={category.score}
          color={category.color}
        />
      </div>

      {/* 하단: description */}
      <div
        style={{
          fontSize: '0.875rem',
          lineHeight: '1.5',
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
  );
};

interface CategoryData {
  title: string;
  color: string;
  description: string | string[];
  score: number;
}

export default CompetencyDistSection;
