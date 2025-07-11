import { ApiProperty } from '@nestjs/swagger';

export interface Province {
  id: number;
  name: string;
  full_name?: string;
  name_eng?: string;
}

export interface KlaciCode {
  code: string;
  nickname: string;
  type?: string;
  trait?: string[] | null;
  opportunity?: string[] | null;
  strategy?: string[] | null;
  summary?: string[] | null;
}

// 새로운 Category 타입 추가
export interface Category {
  id: number;
  name: string;
}

// 새로운 RegionCategoryRank 타입 추가
export interface RegionCategoryRank {
  id: number;
  region_id: number;
  category_id: number;
  rank: number;
  year: number;
  category: Category; // JOIN으로 가져올 category 정보
}

export interface Region {
  id: number;
  name: string;
  province_id: number;
  district_type: string;
  weight_class: string;
  klaci_code: string;
  growth_score: number;
  economy_score: number;
  living_score: number;
  safety_score: number;
  total_score: number;
  total_rank: number;
}

// 선택 조건 태그 타입 추가
export type SelectionTag =
  | 'SAME_CODE' // 같은 KLACI 코드
  | 'ADJACENT_RANK' // 종합순위 위아래
  | 'SAME_TYPE_RANK' // 같은 유형에서 가까운 순위
  | 'SHARED_STRENGTH' // 강점 TOP3 중 일치
  | 'SAME_WEIGHT_CLASS'; // 같은 체급

// 태그별 표시 타입 추가
export type SelectionDisplayType =
  | '유형이 비슷한'
  | '순위가 비슷한'
  | '강점이 비슷한'
  | '체급이 비슷한';

// 태그와 표시 타입 매핑
export const SELECTION_TAG_DISPLAY_MAP: Record<
  SelectionTag,
  SelectionDisplayType
> = {
  SAME_CODE: '유형이 비슷한',
  ADJACENT_RANK: '순위가 비슷한',
  SAME_TYPE_RANK: '유형이 비슷한',
  SHARED_STRENGTH: '강점이 비슷한',
  SAME_WEIGHT_CLASS: '체급이 비슷한',
};

// RegionWithDetails에 selection_tags와 display_type 필드 추가
export interface RegionWithDetails extends Region {
  province: Province;
  klaci: KlaciCode;
  key_index_ranks?: {
    top: RegionKeyIndexRank[];
    bottom: RegionKeyIndexRank[];
    growth_category_ranks: CategoryKeyIndexRank[];
    economy_category_ranks: CategoryKeyIndexRank[];
    living_category_ranks: CategoryKeyIndexRank[];
    safety_category_ranks: CategoryKeyIndexRank[];
  };
  category_ranks?: RegionCategoryRank[];
  selection_tags?: SelectionTag[]; // 선택 조건 태그 추가
  display_type?: SelectionDisplayType; // 표시 타입 추가
}

export interface RegionsResponse {
  data: RegionWithDetails[];
  meta: {
    total: number;
    limit: number;
    offset: number;
  };
}

export interface KeyIndex {
  id: number;
  code: string;
  name: string;
  category?: string;
  description?: string;
}

// 새로운 KeyIndexData 타입 추가
export interface KeyIndexData {
  id: number;
  code: string;
  name: string;
  category: string;
  description: string;
  unit?: string;
  source?: string;
  calculation_method?: string;
  created_at?: string;
  updated_at?: string;
  yearly_avg_score?: number; // 연도별 평균점수 추가
  year?: number; // 연도 정보 추가
}

// Supabase JOIN 결과를 위한 타입 (수정됨)
export interface RegionKeyIndexRankRaw {
  id: number;
  region_id: number;
  key_index_id: number;
  rank: number;
  year: number;
  key_indexes: KeyIndex; // 배열이 아닌 단일 객체
}

export interface RegionKeyIndexRank {
  id: number;
  region_id: number;
  key_index_id: number;
  rank: number;
  year: number;
  score?: number; // 점수 필드 추가
  key_index: KeyIndex;
}

// 카테고리별 key_index rank를 위한 새로운 타입
export interface CategoryKeyIndexRank {
  key_index_id: number;
  name: string;
  rank: number;
  score?: number; // 점수 필드 추가
}

// DTOs
export class ProvinceResponseDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty({ required: false })
  full_name?: string;
  @ApiProperty({ required: false })
  name_eng?: string;
}

export class KeyIndexResponseDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  code: string;
  @ApiProperty()
  name: string;
  @ApiProperty({ required: false })
  category?: string;
  @ApiProperty({ required: false })
  description?: string;
}

export class RegionKeyIndexRankResponseDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  region_id: number;
  @ApiProperty()
  key_index_id: number;
  @ApiProperty()
  rank: number;
  @ApiProperty()
  year: number;
  @ApiProperty({ required: false })
  score?: number; // 점수 필드 추가
  @ApiProperty()
  key_index: KeyIndexResponseDto;
}

export class CategoryKeyIndexRankResponseDto {
  @ApiProperty()
  key_index_id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  rank: number;
  @ApiProperty({ required: false })
  score?: number; // 점수 필드 추가
}

export class KeyIndexRanksResponseDto {
  @ApiProperty({ type: [RegionKeyIndexRankResponseDto] })
  top: RegionKeyIndexRankResponseDto[];

  @ApiProperty({ type: [RegionKeyIndexRankResponseDto] })
  bottom: RegionKeyIndexRankResponseDto[];

  @ApiProperty({ type: [CategoryKeyIndexRankResponseDto] })
  growth_category_ranks: CategoryKeyIndexRankResponseDto[];

  @ApiProperty({ type: [CategoryKeyIndexRankResponseDto] })
  economy_category_ranks: CategoryKeyIndexRankResponseDto[];

  @ApiProperty({ type: [CategoryKeyIndexRankResponseDto] })
  living_category_ranks: CategoryKeyIndexRankResponseDto[];

  @ApiProperty({ type: [CategoryKeyIndexRankResponseDto] })
  safety_category_ranks: CategoryKeyIndexRankResponseDto[];
}

export class RegionResponseDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  province_id: number;
  @ApiProperty()
  district_type: string;
  @ApiProperty()
  weight_class: string;
  @ApiProperty()
  klaci_code: string;
  @ApiProperty()
  growth_score: number;
  @ApiProperty()
  economy_score: number;
  @ApiProperty()
  living_score: number;
  @ApiProperty()
  safety_score: number;
  @ApiProperty()
  total_score: number;
  @ApiProperty()
  total_rank: number;
  @ApiProperty({ type: KeyIndexRanksResponseDto, required: false })
  key_index_ranks?: KeyIndexRanksResponseDto;
}

// 새로운 DTO들 추가
export class CategoryResponseDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}

export class RegionCategoryRankResponseDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  region_id: number;
  @ApiProperty()
  category_id: number;
  @ApiProperty()
  rank: number;
  @ApiProperty()
  year: number;
  @ApiProperty()
  category: CategoryResponseDto;
}

// 새로운 DTO 추가
export class KeyIndexDataResponseDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  code: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  category: string;
  @ApiProperty()
  description: string;
  @ApiProperty({ required: false })
  unit?: string;
  @ApiProperty({ required: false })
  source?: string;
  @ApiProperty({ required: false })
  calculation_method?: string;
  @ApiProperty({ required: false })
  created_at?: string;
  @ApiProperty({ required: false })
  updated_at?: string;
  @ApiProperty({ required: false })
  yearly_avg_score?: number; // 연도별 평균점수 추가
  @ApiProperty({ required: false })
  year?: number; // 연도 정보 추가
}

// 새로운 타입 추가 (파일 끝에 추가)
export interface RegionKeyIndexScore {
  id: number;
  region_id: number;
  key_index_id: number;
  year: number;
  score: number;
}

export interface KeyIndexWithDetails {
  id: number;
  code: string;
  name: string;
  category: string;
  description: string;
  source?: string;
  unit?: string;
  name_eng?: string;
}

export interface RegionKeyIndexScoreResponse {
  region_key_index_score: RegionKeyIndexScore;
  avg_score: number;
  key_index: KeyIndexWithDetails;
}

// 새로운 DTO 추가 (파일 끝에 추가)
export class RegionKeyIndexScoreDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  region_id: number;
  @ApiProperty()
  key_index_id: number;
  @ApiProperty()
  year: number;
  @ApiProperty()
  score: number;
}

export class KeyIndexWithDetailsDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  code: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  category: string;
  @ApiProperty()
  description: string;
  @ApiProperty({ required: false })
  source?: string;
  @ApiProperty({ required: false })
  unit?: string;
  @ApiProperty({ required: false })
  name_eng?: string;
}

export class RegionKeyIndexScoreResponseDto {
  @ApiProperty({ type: RegionKeyIndexScoreDto })
  region_key_index_score: RegionKeyIndexScoreDto;

  @ApiProperty()
  avg_score: number;

  @ApiProperty({ type: KeyIndexWithDetailsDto })
  key_index: KeyIndexWithDetailsDto;
}

// Region Strength Index 타입 추가 (파일 끝에 추가)
export interface RegionStrengthIndex {
  id: number;
  region_id: number;
  type: 'strength' | 'weakness';
  rank: number;
  code: string;
}

export interface RegionStrengthIndexesResponse {
  strengths: RegionStrengthIndex[];
  weaknesses: RegionStrengthIndex[];
}

// DTO 추가 (파일 끝에 추가)
export class RegionStrengthIndexResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  region_id: number;

  @ApiProperty({ enum: ['strength', 'weakness'] })
  type: 'strength' | 'weakness';

  @ApiProperty()
  rank: number;

  @ApiProperty()
  code: string;
}

export class RegionStrengthIndexesResponseDto {
  @ApiProperty({ type: [RegionStrengthIndexResponseDto] })
  strengths: RegionStrengthIndexResponseDto[];

  @ApiProperty({ type: [RegionStrengthIndexResponseDto] })
  weaknesses: RegionStrengthIndexResponseDto[];
}

// Region Strength Index with Key Index Details 타입 추가 (파일 끝에 추가)
export interface RegionStrengthIndexWithDetails {
  id: number;
  region_id: number;
  type: 'strength' | 'weakness';
  rank: number;
  code: string;
  key_index: KeyIndexData; // key_indexes 테이블의 모든 속성 포함
}

export interface RegionStrengthIndexesWithDetailsResponse {
  strengths: RegionStrengthIndexWithDetails[];
  weaknesses: RegionStrengthIndexWithDetails[];
}

// DTO 추가 (파일 끝에 추가)
export class RegionStrengthIndexWithDetailsResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  region_id: number;

  @ApiProperty({ enum: ['strength', 'weakness'] })
  type: 'strength' | 'weakness';

  @ApiProperty()
  rank: number;

  @ApiProperty()
  code: string;

  @ApiProperty({ type: KeyIndexDataResponseDto })
  key_index: KeyIndexDataResponseDto;
}

export class RegionStrengthIndexesWithDetailsResponseDto {
  @ApiProperty({ type: [RegionStrengthIndexWithDetailsResponseDto] })
  strengths: RegionStrengthIndexWithDetailsResponseDto[];

  @ApiProperty({ type: [RegionStrengthIndexWithDetailsResponseDto] })
  weaknesses: RegionStrengthIndexWithDetailsResponseDto[];
}
