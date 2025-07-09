/**
 * 지역 데이터를 기반으로 레이더 차트 데이터를 생성하는 함수
 * @param region - 지역 데이터 객체
 * @returns 레이더 차트에 사용할 8개 값의 배열
 */
export const generateChartData = (region: any): number[] => {
  if (
    !region ||
    region.growth_score === undefined ||
    region.economy_score === undefined ||
    region.living_score === undefined ||
    region.safety_score === undefined
  ) {
    return [0, 0, 0, 0, 0, 0, 0, 0];
  }

  const { growth_score, economy_score, living_score, safety_score } = region;

  // RadarChart의 categories 순서에 맞춰 반환:
  // ['생활역동형', '안전복원형', '인구정착형', '경제정속형', '생활정주형', '안전정진형', '인구성장형', '경제혁신형']
  return [
    living_score, // index 0: 생활역동형
    safety_score, // index 1: 안전복원형
    100 - growth_score, // index 2: 인구정착형
    100 - economy_score, // index 3: 경제정속형
    100 - living_score, // index 4: 생활정주형
    100 - safety_score, // index 5: 안전정진형
    growth_score, // index 6: 인구성장형
    economy_score, // index 7: 경제혁신형
  ];
}; 