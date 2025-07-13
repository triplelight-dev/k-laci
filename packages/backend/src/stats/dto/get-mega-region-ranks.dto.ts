import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

// 메가 지역 타입 정의
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

export type MegaRegionType = (typeof MEGA_REGION_TYPES)[number];

export class GetMegaRegionRanksDto {
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
    description: 'Type to filter mega regions by',
    example: '수도권',
    enum: MEGA_REGION_TYPES,
  })
  @IsOptional()
  @IsString()
  @IsIn(MEGA_REGION_TYPES)
  type?: MegaRegionType;
}
