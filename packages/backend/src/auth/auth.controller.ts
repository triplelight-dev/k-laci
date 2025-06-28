import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { SignUpDto, SignUpResponseDto } from './dto/sign-up.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('signup')
  @ApiOperation({ summary: 'Sign up a new user' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User has been successfully created',
    type: SignUpResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async signUp(@Body() signUpDto: SignUpDto): Promise<SignUpResponseDto> {
    return this.authService.signup(signUpDto);
  }

  // @Public()
  // @Post('signin')
  // @HttpCode(HttpStatus.OK)
  // @ApiOperation({ summary: 'Sign in a user' })
  // @ApiResponse({
  //   status: HttpStatus.OK,
  //   description: 'User has been successfully signed in',
  //   type: SignInResponseDto,
  // })
  // @ApiResponse({ status: 401, description: 'Invalid credentials' })
  // async signIn(@Body() signInDto: SignInDto): Promise<SignInResponseDto> {
  //   return this.authService.sig(signInDto);
  // }

  @Post('signout')
  @ApiOperation({ summary: 'Sign out the current user' })
  @ApiResponse({
    status: 200,
    description: 'User successfully signed out',
    type: Object,
  })
  async signOut() {
    return this.authService.signOut();
  }

  @Get('session')
  @ApiOperation({ summary: 'Get current user session' })
  @ApiResponse({
    status: 200,
    description: 'Returns the current session',
    type: Object,
  })
  @ApiResponse({ status: 401, description: 'No active session' })
  async getSession() {
    return this.authService.getSession();
  }
}
