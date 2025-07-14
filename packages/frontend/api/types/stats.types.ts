// Province 타입
export interface Province {
  id: number;
  name: string;
  full_name?: string;
  name_eng?: string;
  created_at?: string;
  updated_at?: string;
}

// KLACI Code 타입
export interface KlaciCode {
  id: number;
  code: string;
  nickname: string;
  type: string;
  trait: string;
  opportunity: string;
  strategy: string;
  summary: string;
  created_at?: string;
  updated_at?: string;
}

// Key Index 타입
export interface KeyIndex {
  id: number;
  code: string;
  name: string;
  category: string;
  description?: string;
  source?: string;
  unit?: string;
  name_eng?: string;
}

// Region 타입
export interface Region {
  id: number;
  name: string;
  province_id?: number;
  klaci_code_id?: number;
  weight_class?: string; // weight_class 추가
  created_at?: string;
  updated_at?: string;
  province: Province;
  klaci: KlaciCode;
}

// 통일된 Region Rank 타입 (모든 ranking API에서 사용)
export interface RegionRank {
  id: number;
  total_rank: number;
  region_id: number;
  strength_indexes_details: KeyIndex[];
  total_score: number;
  year: number;
  region: Region;
  type?: MegaRegionType | KlaciCodeType; // KLACI 코드 타입도 지원하도록 확장
}

// 기존 호환성을 위한 별칭
export type TotalRegionRank = RegionRank;

// API 요청 파라미터 타입 (모든 ranking API에서 공통 사용)
export interface GetRankingParams {
  limit?: number;
  year?: number;
}

// 기존 호환성을 위한 별칭
export type GetTotalRegionRanksParams = GetRankingParams;

// API 응답 타입 (모든 ranking API에서 공통 사용)
export interface GetRankingResponse {
  data: RegionRank[];
}

// 기존 호환성을 위한 별칭
export type GetTotalRegionRanksResponse = GetRankingResponse;

// 메가 지역 타입 정의 (백엔드와 동일)
export const MEGA_REGION_TYPES = [
  '동남권',
  '전북특별자치도',
  '중부권',
  '대경권',
  '제주특별자치도',
  '서남권',
  '강원특별자치도',
  '수도권',
] as const;

export type MegaRegionType = typeof MEGA_REGION_TYPES[number];

// KLACI 코드 타입 정의 (백엔드와 동일) - 16개로 확장
export const KLACI_CODE_TYPES = [
  'GTVR',
  'GTVA',
  'GTMR',
  'GTMA',
  'GCVR',
  'GCVA',
  'GCMR',
  'GCMA',
  'STVR',
  'STVA',
  'STMR',
  'STMA',
  'SCVR',
  'SCVA',
  'SCMR',
  'SCMA',
] as const;

export type KlaciCodeType = typeof KLACI_CODE_TYPES[number];

// MegaRegion용 확장된 파라미터 타입
export interface GetMegaRegionRanksParams extends GetRankingParams {
  type?: MegaRegionType;
}

export interface GetKlaciCodeRanksParams extends GetRankingParams {
  type?: KlaciCodeType;
}

export interface GetProvinceRanksParams extends GetRankingParams {
  // province rank API에 특별한 파라미터가 있다면 여기에 추가
}

export interface GetCategoryRanksParams extends GetRankingParams {
  // categoryId 제거 - 전체 데이터를 받아서 클라이언트 사이드에서 type으로 필터링
}

// Top Region Card 타입
export interface CategoryScore {
  growth_score: number;
  economy_score: number;
  living_score: number;
  safety_score: number;
}

export interface TopRegionCard {
  regionId: number;
  regionName: string;
  provinceName: string;
  rank: number;
  totalScore: number;
  klaciCode: string;
  klaciType: string;
  klaciNickname: string;
  categoryScore: CategoryScore;
}

export interface GetTopRegionsForCardParams {
  limit?: number;
}

export interface GetTopRegionsForCardResponse {
  data: TopRegionCard[];
} 