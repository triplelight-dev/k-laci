import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '../auth/decorators/public.decorator';
import { GetTotalRegionRanksDto } from './dto/get-total-region-ranks.dto';
import { TotalRegionRankDto } from './dto/total-region-rank-response.dto';
import { StatsService } from './stats.service';

@ApiTags('stats')
@Controller('stats/rank')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Public()
  @Get('total')
  @ApiOperation({
    summary: 'Get top N region ranks for a specific year',
    description:
      'Retrieve the top N regions ranked by total score for a specific year. Returns comprehensive data including region details, province information, and KLACI codes.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved top N region total ranks',
    type: [TotalRegionRankDto],
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - Invalid parameters',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  async getTotalRegionRanks(@Query() query: GetTotalRegionRanksDto) {
    return this.statsService.getTotalRegionRanks(query.limit, query.year);
  }
}
