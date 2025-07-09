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

// Total Region Rank 타입
export interface TotalRegionRank {
  id: number;
  total_rank: number;
  region_id: number;
  strength_indexes_details: KeyIndex[];
  total_score: number;
  year: number;
  region: Region;
}

// API 요청 파라미터 타입
export interface GetTotalRegionRanksParams {
  limit?: number;
  year?: number;
}

// API 응답 타입
export interface GetTotalRegionRanksResponse {
  data: TotalRegionRank[];
} 