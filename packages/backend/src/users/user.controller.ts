import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../auth/decorators/user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateUserProfileDto, UserProfileResponse } from './types/user.types';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({
    status: 200,
    description: 'Returns the current user profile',
    type: UserProfileResponse,
  })
  async getCurrentUserProfile(
    @User('sub') userId: string,
  ): Promise<UserProfileResponse> {
    return this.userService.getUserProfile(userId);
  }

  @Get('profile/:userId')
  @ApiOperation({ summary: 'Get user profile by ID' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the user profile',
    type: UserProfileResponse,
  })
  async getUserProfileById(
    @Param('userId') userId: string,
  ): Promise<UserProfileResponse> {
    return this.userService.getUserProfile(userId);
  }

  @Put('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update current user profile' })
  @ApiResponse({
    status: 200,
    description: 'Returns the updated user profile',
    type: UserProfileResponse,
  })
  async updateCurrentUserProfile(
    @User('sub') userId: string,
    @Body() updateDto: UpdateUserProfileDto,
  ): Promise<UserProfileResponse> {
    return this.userService.updateUserProfile(userId, updateDto);
  }

  @Put('profile/:userId')
  @ApiOperation({ summary: 'Update user profile by ID' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the updated user profile',
    type: UserProfileResponse,
  })
  async updateUserProfileById(
    @Param('userId') userId: string,
    @Body() updateDto: UpdateUserProfileDto,
  ): Promise<UserProfileResponse> {
    return this.userService.updateUserProfile(userId, updateDto);
  }

  @Post('report-agreement/:userId')
  @ApiOperation({ summary: 'Agree to report reservation' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({
    status: 200,
    description: 'Report agreement updated successfully',
    type: UserProfileResponse,
  })
  async agreeToReportReservation(
    @Param('userId') userId: string,
  ): Promise<UserProfileResponse> {
    return await this.userService.agreeToReportReservation(userId);
  }

  @Delete('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete current user account' })
  @ApiResponse({
    status: 200,
    description: 'User account and profile have been deleted',
  })
  async deleteCurrentUser(@User('sub') userId: string): Promise<void> {
    return this.userService.deleteUser(userId);
  }
}
