import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.getOrThrow<string>('SUPABASE_URL');
    const supabaseKey =
      this.configService.getOrThrow<string>('SUPABASE_ANON_KEY');

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async signUp(signUpDto: SignUpDto) {
    const { email, password, name } = signUpDto;

    // 1. Create user in auth.users
    const { data: authData, error: authError } =
      await this.supabase.auth.signUp({
        email,
        password,
      });

    if (authError) {
      throw new UnauthorizedException(authError.message);
    }

    if (!authData.user) {
      throw new UnauthorizedException('Failed to create user');
    }

    // 2. Create user profile in public.users
    const { error: profileError } = await this.supabase.from('user_profiles').insert([
      {
        id: authData.user.id,
        email: authData.user.email,
        name,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ]);

    if (profileError) {
      // If profile creation fails, we should clean up the auth user
      await this.supabase.auth.admin.deleteUser(authData.user.id);
      throw new UnauthorizedException(
        `Failed to create user profile: ${profileError.message}`,
      );
    }

    return authData;
  }

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;

    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return data;
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) {
      throw new UnauthorizedException(error.message);
    }
    return { message: 'Successfully signed out' };
  }

  async getSession() {
    const {
      data: { session },
      error,
    } = await this.supabase.auth.getSession();
    if (error) {
      throw new UnauthorizedException(error.message);
    }
    return session;
  }

  async getUserProfile(userId: string) {
    const { data, error } = await this.supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return data;
  }
}
