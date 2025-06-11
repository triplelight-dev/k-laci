import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';
import { DataService } from './data.service';

@ApiTags('regions')
@Controller('regions')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
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

  @Get(':id')
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
}
