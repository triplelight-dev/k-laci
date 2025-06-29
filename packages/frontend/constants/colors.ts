// 카테고리별 색상 매핑
export const categoryColors = {
  // 4대 영역
  안전회복력: '#23CB71',
  인구성장력: '#ED4F34',
  경제활동력: '#FFA602',
  생활기반력: '#9E74FC',

  // 8개 유형
  생활역동형: '#ACAAE8',
  안전회복형: '#74BF9E',
  인구정착형: '#F56542',
  경제정속형: '#F4B04D',
  생활정체형: '#ACAAE8',
  안전정진형: '#74BF9E',
  인구성장형: '#F56542',
  경제혁신형: '#F4B04D',
} as const;

// 색상 타입 정의
export type CategoryColorKey = keyof typeof categoryColors;

// 4대 영역 카테고리 이름 상수
export const CATEGORY_NAMES = {
  GROWTH: '인구성장력',
  ECONOMY: '경제활동력',
  LIVING: '생활기반력',
  SAFETY: '안전회복력',
} as const;

// 카테고리 이름 타입 정의
export type CategoryName = typeof CATEGORY_NAMES[keyof typeof CATEGORY_NAMES];

// 그라데이션 색상 쌍 (RadarChart에서 사용)
export const gradientColorPairs: [string, string][] = [
  ['#ACAAE8', '#8E8AE5'], // 생활역동형
  ['#74BF9E', '#59A37D'], // 안전복원형
  ['#F56542', '#D64A2E'], // 인구정착형
  ['#F4B04D', '#D09B3F'], // 경제정속형
  ['#ACAAE8', '#8E8AE5'], // 생활정주형
  ['#74BF9E', '#59A37D'], // 안전정진형
  ['#F56542', '#D64A2E'], // 인구성장형
  ['#F4B04D', '#D09B3F'], // 경제혁신형
];

// 카테고리 목록
export const categories = [
  '생활역동형',
  '안전복원형',
  '인구정착형',
  '경제정속형',
  '생활정주형',
  '안전정진형',
  '인구성장형',
  '경제혁신형',
] as const;
