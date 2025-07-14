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

export interface RegionCardData {
  id: string | number;
  name: string;
  province: string;
  similarity: number; // 유사도 점수 (0-100)
  rank: number;
  score: number;
  radarData?: number[]; // 레이더 차트 데이터
  klaciCode?: string; // KLACI 코드
  klaciType?: string; // 지역 타입
  klaciNickname?: string; // 닉네임
  display_type?: string; // API에서 받은 표시 타입
  selection_tags?: string[]; // 선택 조건 태그
  [key: string]: any; // 추가 속성들을 위한 인덱스 시그니처
}

export interface RegionCardProps {
  data: RegionCardData;
  onClick?: (item: RegionCardData) => void;
  style?: React.CSSProperties;
  topDivStyle?: React.CSSProperties;
  isHideBadge?: boolean;
  bottomDivStyle?: React.CSSProperties;
} 