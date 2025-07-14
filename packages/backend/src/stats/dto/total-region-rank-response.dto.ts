import { ApiProperty } from '@nestjs/swagger';

export class ProvinceDto {
  @ApiProperty({ description: 'Province ID', example: 1 })
  id: number;

  @ApiProperty({ description: 'Province name', example: '서울특별시' })
  name: string;

  @ApiProperty({
    description: 'Province full name',
    example: '서울특별시',
    required: false,
  })
  full_name?: string;

  @ApiProperty({
    description: 'Province English name',
    example: 'Seoul',
    required: false,
  })
  name_eng?: string;

  @ApiProperty({
    description: 'Created at timestamp',
    example: '2024-01-01T00:00:00Z',
    required: false,
  })
  created_at?: string;

  @ApiProperty({
    description: 'Updated at timestamp',
    example: '2024-01-01T00:00:00Z',
    required: false,
  })
  updated_at?: string;
}

export class KlaciCodeDto {
  @ApiProperty({ description: 'KLACI code ID', example: 1 })
  id: number;

  @ApiProperty({ description: 'KLACI code', example: 'A01' })
  code: string;

  @ApiProperty({ description: 'KLACI nickname', example: '혁신도시' })
  nickname: string;

  @ApiProperty({ description: 'KLACI type', example: '혁신' })
  type: string;

  @ApiProperty({ description: 'KLACI trait', example: '혁신적 특성' })
  trait: string;

  @ApiProperty({ description: 'KLACI opportunity', example: '기회요인' })
  opportunity: string;

  @ApiProperty({ description: 'KLACI strategy', example: '전략방향' })
  strategy: string;

  @ApiProperty({ description: 'KLACI summary', example: '요약' })
  summary: string;

  @ApiProperty({
    description: 'KLACI multiline nickname',
    example: ['혁신', '도시'],
    required: false,
  })
  nickname_multiline?: string;

  @ApiProperty({
    description: 'Created at timestamp',
    example: '2024-01-01T00:00:00Z',
    required: false,
  })
  created_at?: string;

  @ApiProperty({
    description: 'Updated at timestamp',
    example: '2024-01-01T00:00:00Z',
    required: false,
  })
  updated_at?: string;
}

export class KeyIndexDto {
  @ApiProperty({ description: 'Key index ID', example: 1 })
  id: number;

  @ApiProperty({ description: 'Key index code', example: 'A01' })
  code: string;

  @ApiProperty({ description: 'Key index name', example: '혁신지수' })
  name: string;

  @ApiProperty({ description: 'Key index category', example: '혁신' })
  category: string;

  @ApiProperty({
    description: 'Key index description',
    example: '혁신 관련 지표',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Key index source',
    example: '통계청',
    required: false,
  })
  source?: string;

  @ApiProperty({
    description: 'Key index unit',
    example: '점수',
    required: false,
  })
  unit?: string;

  @ApiProperty({
    description: 'Key index English name',
    example: 'Innovation Index',
    required: false,
  })
  name_eng?: string;
}

export class RegionDto {
  @ApiProperty({ description: 'Region ID', example: 1 })
  id: number;

  @ApiProperty({ description: 'Region name', example: '강남구' })
  name: string;

  @ApiProperty({ description: 'Province ID', example: 1, required: false })
  province_id?: number;

  @ApiProperty({ description: 'KLACI code ID', example: 1, required: false })
  klaci_code_id?: number;

  @ApiProperty({
    description: 'Created at timestamp',
    example: '2024-01-01T00:00:00Z',
    required: false,
  })
  created_at?: string;

  @ApiProperty({
    description: 'Updated at timestamp',
    example: '2024-01-01T00:00:00Z',
    required: false,
  })
  updated_at?: string;

  @ApiProperty({ description: 'Province information', type: ProvinceDto })
  province: ProvinceDto;

  @ApiProperty({ description: 'KLACI code information', type: KlaciCodeDto })
  klaci: KlaciCodeDto;
}

export class TotalRegionRankDto {
  @ApiProperty({ description: 'Record ID', example: 1 })
  id: number;

  @ApiProperty({ description: 'Total rank', example: 1 })
  total_rank: number;

  @ApiProperty({ description: 'Region ID', example: 1 })
  region_id: number;

  @ApiProperty({
    description: 'Strength indexes detailed information',
    type: [KeyIndexDto],
  })
  strength_indexes_details: KeyIndexDto[];

  @ApiProperty({ description: 'Total score', example: 85.5 })
  total_score: number;

  @ApiProperty({ description: 'Year', example: 2024 })
  year: number;

  @ApiProperty({ description: 'Region information', type: RegionDto })
  region: RegionDto;
}
