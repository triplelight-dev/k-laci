import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

// KLACI 코드 타입 정의 - 16개로 확장
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

export type KlaciCodeType = (typeof KLACI_CODE_TYPES)[number];

export class GetKlaciCodeRanksDto {
  @ApiPropertyOptional({
    description: 'Maximum number of results to return',
    example: 100,
    default: 100,
    minimum: 1,
    maximum: 1000,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(1000)
  limit?: number = 100;

  @ApiPropertyOptional({
    description: 'Year to filter results by',
    example: 2025,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(2020)
  @Max(2030)
  year?: number;

  @ApiPropertyOptional({
    description: 'KLACI code type to filter by',
    example: 'GTVR',
    enum: KLACI_CODE_TYPES,
  })
  @IsOptional()
  @IsString()
  @IsIn(KLACI_CODE_TYPES)
  type?: KlaciCodeType;
}
