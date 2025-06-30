import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import {
    CompleteSignupDto,
    CompleteSignupResponseDto,
} from './dto/complete-signup.dto';
import {
    SendVerificationEmailDto,
    SendVerificationEmailResponseDto,
} from './dto/send-verification-email.dto';
import { SignUpDto, SignUpResponseDto } from './dto/sign-up.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('send-verification-email')
  @ApiOperation({ summary: 'Send verification email for signup' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Verification email sent successfully',
    type: SendVerificationEmailResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid email format' })
  @ApiResponse({
    status: 401,
    description: 'Email already exists or other error',
  })
  async sendVerificationEmail(
    @Body() dto: SendVerificationEmailDto,
  ): Promise<SendVerificationEmailResponseDto> {
    return this.authService.sendVerificationEmail(dto);
  }

  @Public()
  @Post('complete-signup')
  @ApiOperation({ summary: 'Complete signup with user information' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User signup completed successfully',
    type: CompleteSignupResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 401, description: 'Invalid token or other error' })
  async completeSignup(
    @Body() dto: CompleteSignupDto,
  ): Promise<CompleteSignupResponseDto> {
    return this.authService.completeSignup(dto);
  }

  @Public()
  @Post('signup')
  @ApiOperation({ summary: 'Sign up a new user (legacy method)' })
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
