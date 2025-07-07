import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserLogDto } from './dto/create-user-log.dto';
import { UserLoggingService } from './user-logging.service';

@Controller('user-logging')
export class UserLoggingController {
  constructor(private readonly userLoggingService: UserLoggingService) {}

  @Post()
  async createLog(@Body() createUserLogDto: CreateUserLogDto) {
    return await this.userLoggingService.createLog(createUserLogDto);
  }

  @Get('user/:userId')
  async getLogsByUserId(
    @Param('userId') userId: string,
    @Query('limit') limit?: string,
  ) {
    const limitNumber = limit ? parseInt(limit, 10) : 100;
    return await this.userLoggingService.getLogsByUserId(userId, limitNumber);
  }

  @Get('action/:actionType')
  async getLogsByActionType(
    @Param('actionType') actionType: string,
    @Query('limit') limit?: string,
  ) {
    const limitNumber = limit ? parseInt(limit, 10) : 100;
    return await this.userLoggingService.getLogsByActionType(
      actionType,
      limitNumber,
    );
  }
}
