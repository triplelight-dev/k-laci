import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/decorators/public.decorator';
import { DataService } from './data.service';

@ApiTags('data')
@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Public()
  @Get('regions')
  @ApiOperation({ summary: 'Get all regions' })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of regions to return',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    type: Number,
    description: 'Number of regions to skip',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of regions',
  })
  async getRegions(
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
  ) {
    return this.dataService.getRegions(limit, offset);
  }

  @Public()
  @Get('regions/adjacent/:rank/:direction')
  @ApiOperation({ summary: 'Get adjacent region by total rank' })
  @ApiQuery({
    name: 'rank',
    required: true,
    type: Number,
    description: 'Current total rank',
  })
  @ApiQuery({
    name: 'direction',
    required: true,
    enum: ['prev', 'next'],
    description: 'Direction to navigate (prev or next)',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the adjacent region based on total rank',
  })
  @ApiResponse({
    status: 404,
    description: 'Region not found',
  })
  async getAdjacentRegionByRank(
    @Param('rank') rank: string,
    @Param('direction') direction: 'prev' | 'next',
  ) {
    const currentRank = Number(rank);
    if (isNaN(currentRank)) {
      throw new Error('Invalid rank');
    }

    if (direction !== 'prev' && direction !== 'next') {
      throw new Error('Invalid direction. Must be "prev" or "next"');
    }

    return this.dataService.getAdjacentRegionByRank(currentRank, direction);
  }

  @Public()
  @Get('regions/:id/key-index-ranks')
  @ApiOperation({ summary: 'Get key index ranks for a specific region' })
  @ApiResponse({
    status: 200,
    description:
      'Returns key index ranks with key index details for the region',
  })
  @ApiResponse({
    status: 404,
    description: 'Region not found',
  })
  async getRegionKeyIndexRanks(@Param('id') id: string) {
    const regionId = Number(id);
    if (isNaN(regionId)) {
      throw new Error('Invalid region ID');
    }
    return this.dataService.getRegionKeyIndexRanks(regionId);
  }

  @Public()
  @Get('regions/:id/key-index-ranks/:year')
  @ApiOperation({
    summary: 'Get key index ranks for a specific region and year',
  })
  @ApiResponse({
    status: 200,
    description:
      'Returns key index ranks with key index details for the region and year',
  })
  @ApiResponse({
    status: 404,
    description: 'Region or year not found',
  })
  async getRegionKeyIndexRanksByYear(
    @Param('id') id: string,
    @Param('year') year: string,
  ) {
    const regionId = Number(id);
    const yearNumber = Number(year);

    if (isNaN(regionId)) {
      throw new Error('Invalid region ID');
    }
    if (isNaN(yearNumber)) {
      throw new Error('Invalid year');
    }

    return this.dataService.getRegionKeyIndexRanksByYear(regionId, yearNumber);
  }

  @Public()
  @Get('regions/:id')
  @ApiOperation({ summary: 'Get a specific region by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the region with the specified ID',
  })
  @ApiResponse({
    status: 404,
    description: 'Region not found',
  })
  async getRegion(@Param('id') id: string) {
    return this.dataService.getRegion(id);
  }

  @Public()
  @Get('provinces-with-regions')
  @ApiOperation({ summary: 'Get all provinces with their regions' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of provinces, each with its regions',
  })
  async getProvincesWithRegions() {
    return this.dataService.getProvincesWithRegions();
  }

  @Public()
  @Get('province/:id')
  @ApiOperation({ summary: 'Get a specific province with its regions' })
  @ApiQuery({
    name: 'scoreType',
    required: false,
    type: String,
    description: 'Sort regions by score type: growth, economy, living, safety',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Limit the number of regions returned',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the province with its regions',
  })
  @ApiResponse({
    status: 404,
    description: 'Province not found',
  })
  async getProvinceWithRegions(
    @Param('id') id: string,
    @Query('scoreType') scoreType?: 'growth' | 'economy' | 'living' | 'safety',
    @Query('limit') limit?: number,
  ) {
    const provinceId = Number(id);
    if (isNaN(provinceId)) return null;
    return this.dataService.getProvinceWithRegions(
      provinceId,
      scoreType,
      limit,
    );
  }

  @Public()
  @Get('key-indexes/:id')
  @ApiOperation({ summary: 'Get key index data by ID' })
  @ApiQuery({
    name: 'year',
    required: false,
    type: Number,
    description: 'Year for yearly average score (defaults to current year)',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the key index data with the specified ID',
  })
  @ApiResponse({
    status: 404,
    description: 'Key index not found',
  })
  async getKeyIndexData(@Param('id') id: string, @Query('year') year?: string) {
    const indexId = Number(id);
    if (isNaN(indexId)) {
      throw new Error('Invalid key index ID');
    }

    let yearNumber: number | undefined;
    if (year) {
      yearNumber = Number(year);
      if (isNaN(yearNumber)) {
        throw new Error('Invalid year');
      }
    }

    return this.dataService.getKeyIndexData(indexId, yearNumber);
  }

  @Public()
  @Get('regions/:id/same-code-regions')
  @ApiOperation({
    summary: 'Get regions with the same KLACI code as the specified region',
  })
  @ApiResponse({
    status: 200,
    description:
      'Returns regions with the same KLACI code as the specified region (excluding the region itself)',
  })
  @ApiResponse({
    status: 404,
    description: 'Region not found',
  })
  async getSameCodeRegionsByRegionId(@Param('id') id: string) {
    try {
      const regionId = Number(id);
      if (isNaN(regionId)) {
        throw new Error('Invalid region ID');
      }
      console.log(
        'Controller: getSameCodeRegionsByRegionId called with id:',
        id,
        'regionId:',
        regionId,
      );
      const result =
        await this.dataService.getSameCodeRegionsByRegionId(regionId);
      console.log(
        'Controller: returning result with',
        result.length,
        'regions',
      );
      return result;
    } catch (error) {
      console.error('Controller error:', error);
      throw error;
    }
  }

  @Public()
  @Get('regions/same-code/:klaciCode')
  @ApiOperation({ summary: 'Get regions with the same KLACI code' })
  @ApiResponse({
    status: 200,
    description: 'Returns regions with the same KLACI code (case-insensitive)',
  })
  @ApiResponse({
    status: 404,
    description: 'No regions found with the specified KLACI code',
  })
  async getSameCodeRegions(@Param('klaciCode') klaciCode: string) {
    return this.dataService.getSameCodeRegions(klaciCode);
  }

  @Public()
  @Get('regions/:regionId/key-indexes/:keyIndexId/score')
  @ApiOperation({ summary: 'Get specific region key index score with details' })
  @ApiResponse({
    status: 200,
    description:
      'Returns region key index score with average score and key index details',
  })
  @ApiResponse({
    status: 404,
    description: 'Region key index score not found',
  })
  async getRegionKeyIndexScore(
    @Param('regionId') regionId: string,
    @Param('keyIndexId') keyIndexId: string,
  ) {
    const regionIdNum = Number(regionId);
    const keyIndexIdNum = Number(keyIndexId);

    if (isNaN(regionIdNum)) {
      throw new Error('Invalid region ID');
    }
    if (isNaN(keyIndexIdNum)) {
      throw new Error('Invalid key index ID');
    }

    return this.dataService.getRegionKeyIndexScore(regionIdNum, keyIndexIdNum);
  }

  @Public()
  @Get('regions/:id/strength-indexes')
  @ApiOperation({
    summary: 'Get strength and weakness indexes for a specific region',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns strength and weakness indexes for the region',
  })
  @ApiResponse({
    status: 404,
    description: 'Region not found',
  })
  async getRegionStrengthIndexes(@Param('id') id: string) {
    const regionId = Number(id);
    if (isNaN(regionId)) {
      throw new Error('Invalid region ID');
    }
    return this.dataService.getRegionStrengthIndexes(regionId);
  }

  @Public()
  @Get('regions/:id/strength-indexes-with-details')
  @ApiOperation({
    summary:
      'Get strength and weakness indexes with key index details for a specific region',
  })
  @ApiResponse({
    status: 200,
    description:
      'Returns strength and weakness indexes with complete key index details for the region',
  })
  @ApiResponse({
    status: 404,
    description: 'Region not found',
  })
  async getRegionStrengthIndexesWithDetails(@Param('id') id: string) {
    const regionId = Number(id);
    if (isNaN(regionId)) {
      throw new Error('Invalid region ID');
    }
    return this.dataService.getRegionStrengthIndexesWithDetails(regionId);
  }
}
