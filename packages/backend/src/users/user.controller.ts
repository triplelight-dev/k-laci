import { Controller, Get, Put, Delete, Body, UseGuards } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { UpdateUserProfileDto, UserProfileResponse } from './types/user.types';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from '../auth/decorators/user.decorator';

@ApiTags('users')
@Controller('users')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
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

  @Put('profile')
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

  @Delete('profile')
  @ApiOperation({ summary: 'Delete current user account' })
  @ApiResponse({
    status: 200,
    description: 'User account and profile have been deleted',
  })
  async deleteCurrentUser(@User('sub') userId: string): Promise<void> {
    return this.userService.deleteUser(userId);
  }
}
