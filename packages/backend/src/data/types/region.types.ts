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
}

// Supabase JOIN 결과를 위한 타입
export interface RegionKeyIndexScoreRaw {
  id: number;
  region_id: number;
  key_index_id: number;
  score: number;
  year: number;
  key_index: KeyIndex[];
}

export interface RegionKeyIndexScore {
  id: number;
  region_id: number;
  key_index_id: number;
  score: number;
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
}
