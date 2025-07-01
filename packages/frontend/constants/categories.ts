// 4개 범주 상수
export const CATEGORY_GROUPS = {
  POPULATION: '인구성장력',
  ECONOMY: '경제활동력', 
  LIVING: '생활기반력',
  SAFETY: '안전회복력',
} as const;

// 8개 원형 상수 (객체 형태로 변경)
export const CATEGORIES = {
  생활역동형: '생활역동형',
  안전회복형: '안전회복형',
  인구정착형: '인구정착형',
  경제정속형: '경제정속형',
  생활정체형: '생활정체형',
  안전정진형: '안전정진형',
  인구성장형: '인구성장형',
  경제혁신형: '경제혁신형',
} as const;

// 카테고리 타입 정의
export type CategoryGroup = typeof CATEGORY_GROUPS[keyof typeof CATEGORY_GROUPS];
export type Category = typeof CATEGORIES[keyof typeof CATEGORIES];

// 범주별 원형 매핑
export const CATEGORY_BY_GROUP = {
  [CATEGORY_GROUPS.POPULATION]: [CATEGORIES.인구성장형, CATEGORIES.인구정착형] as const,
  [CATEGORY_GROUPS.ECONOMY]: [CATEGORIES.경제혁신형, CATEGORIES.경제정속형] as const,
  [CATEGORY_GROUPS.LIVING]: [CATEGORIES.생활역동형, CATEGORIES.생활정체형] as const,
  [CATEGORY_GROUPS.SAFETY]: [CATEGORIES.안전회복형, CATEGORIES.안전정진형] as const,
} as const;

// 원형별 범주 매핑
export const GROUP_BY_CATEGORY: Record<Category, CategoryGroup> = {
  [CATEGORIES.생활역동형]: CATEGORY_GROUPS.LIVING,
  [CATEGORIES.안전회복형]: CATEGORY_GROUPS.SAFETY,
  [CATEGORIES.인구정착형]: CATEGORY_GROUPS.POPULATION,
  [CATEGORIES.경제정속형]: CATEGORY_GROUPS.ECONOMY,
  [CATEGORIES.생활정체형]: CATEGORY_GROUPS.LIVING,
  [CATEGORIES.안전정진형]: CATEGORY_GROUPS.SAFETY,
  [CATEGORIES.인구성장형]: CATEGORY_GROUPS.POPULATION,
  [CATEGORIES.경제혁신형]: CATEGORY_GROUPS.ECONOMY,
} as const;

// 유틸리티 함수들
export const getCategoryGroup = (category: Category): CategoryGroup => {
  return GROUP_BY_CATEGORY[category];
};

export const getCategoriesByGroup = (group: CategoryGroup): readonly Category[] => {
  return CATEGORY_BY_GROUP[group];
};
