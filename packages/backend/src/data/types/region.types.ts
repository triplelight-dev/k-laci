import { ApiProperty } from '@nestjs/swagger';

export interface Province {
  id: number;
  name: string;
}

export interface KlaciCode {
  code: string;
  nickname: string;
  type?: string;
  trait?: string[] | null;
  opportunity?: string[] | null;
  strategy?: string[] | null;
  summary?: string | null;
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

export interface RegionWithDetails extends Region {
  province: Province;
  klaci: KlaciCode;
  key_index_ranks?: {
    top: RegionKeyIndexRank[];
    bottom: RegionKeyIndexRank[];
  };
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
  key_index: KeyIndex;
}

// DTOs
export class ProvinceResponseDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
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
  @ApiProperty()
  key_index: KeyIndexResponseDto;
}

export class KeyIndexRanksResponseDto {
  @ApiProperty({ type: [RegionKeyIndexRankResponseDto] })
  top: RegionKeyIndexRankResponseDto[];

  @ApiProperty({ type: [RegionKeyIndexRankResponseDto] })
  bottom: RegionKeyIndexRankResponseDto[];
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
