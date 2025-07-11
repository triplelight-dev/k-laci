// 기존 타입들에 추가
export type RegionSelectionSource = 
  | 'url'                    // URL에서 직접 접근
  | 'interest'               // 사용자 관심지역
  | 'default'                // 기본값
  | 'select'                 // Select 컴포넌트
  | 'navigation'             // 좌우 버튼
  | 'summary_ranking'        // Summary 페이지에서
  | 'similar_region_card'    // SimilarRegionSection에서
  | 'search_autocomplete'    // 검색 자동완성
  | 'system';                // 시스템

export interface RegionNavigationOptions {
  scrollToChart?: boolean;
  scrollOffset?: number;
} 