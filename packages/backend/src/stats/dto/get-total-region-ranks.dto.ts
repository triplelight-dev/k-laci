import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class GetTotalRegionRanksDto {
  @ApiPropertyOptional({
    description: 'Number of top regions to return',
    default: 100,
    minimum: 1,
    maximum: 1000,
    example: 50,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Limit must be an integer' })
  @Min(1, { message: 'Limit must be at least 1' })
  @Max(1000, { message: 'Limit cannot exceed 1000' })
  limit?: number;

  @ApiPropertyOptional({
    description: 'Year to get rankings for',
    default: 'Current year',
    minimum: 2025,
    example: 2025,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Year must be an integer' })
  @Min(2025, { message: 'Year must be at least 2025' })
  year?: number;
}
