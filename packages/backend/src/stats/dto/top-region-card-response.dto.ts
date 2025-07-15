import { ApiProperty } from '@nestjs/swagger';

export class CategoryScoreDto {
  @ApiProperty({ description: 'Growth score', example: 75.2 })
  growth_score: number;

  @ApiProperty({ description: 'Economy score', example: 82.1 })
  economy_score: number;

  @ApiProperty({ description: 'Living score', example: 68.9 })
  living_score: number;

  @ApiProperty({ description: 'Safety score', example: 91.3 })
  safety_score: number;
}

export class TopRegionCardDto {
  @ApiProperty({ description: 'Region ID', example: 1 })
  regionId: number;

  @ApiProperty({ description: 'Region name', example: '강남구' })
  regionName: string;

  @ApiProperty({ description: 'Province name', example: '서울특별시' })
  provinceName: string;

  @ApiProperty({ description: 'Total rank', example: 1 })
  rank: number;

  @ApiProperty({ description: 'Total score', example: 85.5 })
  totalScore: number;

  @ApiProperty({ description: 'KLACI code', example: 'GTMA' })
  klaciCode: string;

  @ApiProperty({ description: 'KLACI type', example: '혁신' })
  klaciType: string;

  @ApiProperty({ description: 'KLACI nickname', example: '혁신도시' })
  klaciNickname: string;

  @ApiProperty({
    description: 'KLACI multiline nickname',
    example: ['혁신', '도시'],
    required: false,
  })
  klaciNicknameMultiline?: string[];

  @ApiProperty({ description: 'Category scores', type: CategoryScoreDto })
  categoryScore: CategoryScoreDto;
}

export class TopRegionCardResponseDto {
  @ApiProperty({ description: 'Top regions', type: [TopRegionCardDto] })
  topRegions: TopRegionCardDto[];
}
