import { CATEGORIES } from '../constants/categories';

// 점수에 따른 카테고리 결정 함수
export function getCategoryByScore(
  growthScore: number,
  economyScore: number,
  livingScore: number,
  safetyScore: number
): string[] {
  return [
    growthScore >= 50 ? CATEGORIES.인구성장형 : CATEGORIES.인구정착형,
    economyScore >= 50 ? CATEGORIES.경제혁신형 : CATEGORIES.경제정속형,
    livingScore >= 50 ? CATEGORIES.생활역동형 : CATEGORIES.생활정체형,
    safetyScore >= 50 ? CATEGORIES.안전회복형 : CATEGORIES.안전정진형,
  ];
}

// 카테고리가 활성화된 카테고리인지 확인하는 함수
export function isActiveCategory(
  category: string,
  growthScore: number,
  economyScore: number,
  livingScore: number,
  safetyScore: number
): boolean {
  const activeCategories = getCategoryByScore(growthScore, economyScore, livingScore, safetyScore);
  return activeCategories.includes(category);
} 