import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { RegionWithDetails, RegionsResponse } from './types/region.types';

@Injectable()
export class DataService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.getOrThrow<string>('SUPABASE_URL');
    const supabaseKey =
      this.configService.getOrThrow<string>('SUPABASE_ANON_KEY');

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async getRegions(limit?: number, offset?: number): Promise<RegionsResponse> {
    let query = this.supabase
      .from('regions')
      .select(
        `
        *,
        province:provinces(id, name),
        weight_class:weight_classes(id, name),
        klaci:klaci_codes(code, nickname)
        `,
        { count: 'exact' },
      )
      .order('name', { ascending: true });

    if (limit) {
      query = query.limit(limit);
    }
    if (offset) {
      query = query.range(offset, offset + (limit || 10) - 1);
    }

    const { data, error, count } = await query;

    if (error) {
      throw error;
    }

    return {
      data: data as RegionWithDetails[],
      meta: {
        total: count || 0,
        limit: limit || 10,
        offset: offset || 0,
      },
    };
  }

  async getRegion(id: string): Promise<RegionWithDetails> {
    const { data, error } = await this.supabase
      .from('regions')
      .select(
        `
        *,
        province:provinces(id, name),
        weight_class:weight_classes(id, name),
        klaci:klaci_codes(code, nickname)
        `,
      )
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data as RegionWithDetails;
  }
}
