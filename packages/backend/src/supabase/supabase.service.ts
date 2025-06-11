import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from '@supabase/supabase-js';
import { SupabaseClientWithAuth, SupabaseConfig } from './types/supabase.types';

@Injectable()
export class SupabaseService implements OnModuleInit {
  private client: SupabaseClientWithAuth;

  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    const config: SupabaseConfig = {
      url: this.configService.getOrThrow<string>('SUPABASE_URL'),
      anonKey: this.configService.getOrThrow<string>('SUPABASE_ANON_KEY'),
    };

    this.client = createClient(
      config.url,
      config.anonKey,
    ) as SupabaseClientWithAuth;
  }

  getClient(): SupabaseClientWithAuth {
    if (!this.client) {
      throw new Error('Supabase client not initialized');
    }
    return this.client;
  }
}
