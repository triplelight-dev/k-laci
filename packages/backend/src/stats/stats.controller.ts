import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '../auth/decorators/public.decorator';
import { GetCategoryRanksDto } from './dto/get-category-ranks.dto';
import { GetDistrictTypeRanksDto } from './dto/get-district-type-ranks.dto';
import { GetKlaciCodeRanksDto } from './dto/get-klaci-code-ranks.dto';
import { GetMegaRegionRanksDto } from './dto/get-mega-region-ranks.dto';
import { GetProvinceRanksDto } from './dto/get-province-ranks.dto';
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

  @Public()
  @Get('major-provinces')
  @ApiOperation({
    summary: 'Get top N major provinces ranks for a specific year',
    description:
      'Retrieve the top N major provinces ranked by total score for a specific year. Returns comprehensive data including region details, province information, and KLACI codes.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved top N major provinces ranks',
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
  async getMajorProvincesRanks(@Query() query: GetTotalRegionRanksDto) {
    return this.statsService.getMajorProvincesRanks(query.limit, query.year);
  }

  @Public()
  @Get('selected-provinces')
  @ApiOperation({
    summary: 'Get top N selected provinces ranks for a specific year',
    description:
      'Retrieve the top N selected provinces ranked by total score for a specific year. Returns comprehensive data including region details, province information, and KLACI codes.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved top N selected provinces ranks',
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
  async getSelectedProvincesRanks(@Query() query: GetTotalRegionRanksDto) {
    return this.statsService.getSelectedProvincesRanks(query.limit, query.year);
  }

  @Public()
  @Get('free-economy-zone')
  @ApiOperation({
    summary: 'Get top N free economy zone ranks for a specific year',
    description:
      'Retrieve the top N free economy zones ranked by total score for a specific year. Returns comprehensive data including region details, province information, and KLACI codes.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved top N free economy zone ranks',
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
  async getFreeEconomyZoneRanks(@Query() query: GetTotalRegionRanksDto) {
    return this.statsService.getFreeEconomyZoneRanks(query.limit, query.year);
  }

  @Public()
  @Get('growth-boost-zone')
  @ApiOperation({
    summary: 'Get top N growth boost zone ranks for a specific year',
    description:
      'Retrieve the top N growth boost zones ranked by total score for a specific year. Returns comprehensive data including region details, province information, and KLACI codes.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved top N growth boost zone ranks',
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
  async getGrowthBoostZoneRanks(@Query() query: GetTotalRegionRanksDto) {
    return this.statsService.getGrowthBoostZoneRanks(query.limit, query.year);
  }

  @Public()
  @Get('national-industrial-zone')
  @ApiOperation({
    summary: 'Get top N national industrial zone ranks for a specific year',
    description:
      'Retrieve the top N national industrial zones ranked by total score for a specific year. Returns comprehensive data including region details, province information, and KLACI codes.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved top N national industrial zone ranks',
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
  async getNationalIndustrialZoneRanks(@Query() query: GetTotalRegionRanksDto) {
    return this.statsService.getNationalIndustrialZoneRanks(
      query.limit,
      query.year,
    );
  }

  @Public()
  @Get('costal-city')
  @ApiOperation({
    summary: 'Get top N costal city ranks for a specific year',
    description:
      'Retrieve the top N costal cities ranked by total score for a specific year. Returns comprehensive data including region details, province information, and KLACI codes.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved top N costal city ranks',
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
  async getCostalCityRanks(@Query() query: GetTotalRegionRanksDto) {
    return this.statsService.getCostalCityRanks(query.limit, query.year);
  }

  @Public()
  @Get('mega-region')
  @ApiOperation({
    summary: 'Get top N mega region ranks for a specific year and type',
    description:
      'Retrieve the top N mega regions ranked by total score for a specific year and optional type filter. Available types: 동남권, 전북특별자치도, 중부권, 대경권, 제주특별자치도, 서남권, 강원특별자치도, 수도권',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved top N mega region ranks',
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
  async getMegaRegionRanks(@Query() query: GetMegaRegionRanksDto) {
    return this.statsService.getMegaRegionRanks(
      query.limit,
      query.year,
      query.type,
    );
  }

  @Public()
  @Get('klaci-code')
  @ApiOperation({
    summary: 'Get top N KLACI code ranks for a specific year and type',
    description:
      'Retrieve the top N KLACI code regions ranked by total score for a specific year and optional type filter. Available types: GTVR, GTMR, GTMA, GCVR, GCVA, GCMR, GCMA, STVR, SCVR, SCVA, SCMR, SCMA',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved top N KLACI code ranks',
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
  async getKlaciCodeRanks(@Query() query: GetKlaciCodeRanksDto) {
    return this.statsService.getKlaciCodeRanks(
      query.limit,
      query.year,
      query.type,
    );
  }

  @Public()
  @Get('province')
  @ApiOperation({
    summary: 'Get top N province ranks for a specific year',
    description:
      'Retrieve the top N province regions ranked by total score for a specific year. Optionally filter by province ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved top N province ranks',
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
  async getProvinceRanks(@Query() query: GetProvinceRanksDto) {
    return this.statsService.getProvinceRanks(
      query.limit,
      query.year,
      query.provinceId,
    );
  }

  @Public()
  @Get('category')
  @ApiOperation({
    summary: 'Get top N category ranks for a specific year',
    description:
      'Retrieve the top N category regions ranked by total score for a specific year. Optionally filter by category ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved top N category ranks',
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
  async getCategoryRanks(@Query() query: GetCategoryRanksDto) {
    return this.statsService.getCategoryRanks(
      query.limit,
      query.year,
      query.categoryId,
    );
  }

  @Public()
  @Get('district-type')
  @ApiOperation({
    summary: 'Get all district type ranks',
    description:
      'Retrieve all district type regions with their ranks. Returns all data without pagination.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all district type ranks',
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
  async getDistrictTypeRanks(@Query() query: GetDistrictTypeRanksDto) {
    return this.statsService.getDistrictTypeRanks();
  }
}
