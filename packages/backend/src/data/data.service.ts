import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import {
  RegionWithDetails,
  RegionsResponse,
  Region,
} from './types/region.types';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

export const REGION_SCORE_TYPES = {
  growth: 'growth',
  economy: 'economy',
  living: 'living',
  safety: 'safety',
} as const;

export type RegionScoreType = keyof typeof REGION_SCORE_TYPES;

@Injectable()
export class DataService {
  private supabase: SupabaseClient;

  constructor(
    private configService: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    const supabaseUrl = this.configService.getOrThrow<string>('SUPABASE_URL');
    const supabaseKey =
      this.configService.getOrThrow<string>('SUPABASE_ANON_KEY');
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async getRegions(limit?: number, offset?: number): Promise<RegionsResponse> {
    const cacheKey = `regions:limit=${limit ?? 'none'}:offset=${offset ?? 'none'}`;
    let regionsResponse =
      await this.cacheManager.get<RegionsResponse>(cacheKey);
    if (regionsResponse) {
      return regionsResponse;
    }
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

    regionsResponse = {
      data: data as RegionWithDetails[],
      meta: {
        total: count || 0,
        limit: limit || 10,
        offset: offset || 0,
      },
    };
    await this.cacheManager.set(cacheKey, regionsResponse, 300); // 5분 TTL
    return regionsResponse;
  }

  async getRegion(id: string): Promise<RegionWithDetails> {
    const cacheKey = `region:${id}`;
    let region = await this.cacheManager.get<RegionWithDetails>(cacheKey);
    if (region) {
      return region;
    }
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

    region = data as RegionWithDetails;
    await this.cacheManager.set(cacheKey, region, 300); // 5분 TTL
    return region;
  }

  async getProvinceWithRegions(
    provinceId: number,
    scoreType?: RegionScoreType,
    limit?: number,
  ): Promise<Region[] | null> {
    // 캐시 키에 provinceId, scoreType, limit을 포함
    const cacheKey = `province-with-regions:${provinceId}:${scoreType ?? 'name'}:${limit ?? 'all'}`;
    const cached = await this.cacheManager.get<Region[]>(cacheKey);
    if (cached) {
      return cached;
    }
    // province 정보 조회 (존재 확인용)
    const { data: province, error: provinceError } = await this.supabase
      .from('provinces')
      .select('id, name')
      .eq('id', provinceId)
      .single();
    if (provinceError || !province) {
      return null;
    }
    // 하위 regions 조회 (district_type, weight_class 포함)
    const { data: regions, error: regionError } = await this.supabase
      .from('regions')
      .select(
        'id, name, province_id, district_type, weight_class, klaci_code, growth_score, economy_score, living_score, safety_score',
      )
      .eq('province_id', provinceId);
    if (regionError) {
      throw regionError;
    }
    let sortedRegions = regions as Region[];
    if (scoreType === REGION_SCORE_TYPES.growth) {
      sortedRegions = sortedRegions.sort(
        (a, b) => (b.growth_score ?? 0) - (a.growth_score ?? 0),
      );
    } else if (scoreType === REGION_SCORE_TYPES.economy) {
      sortedRegions = sortedRegions.sort(
        (a, b) => (b.economy_score ?? 0) - (a.economy_score ?? 0),
      );
    } else if (scoreType === REGION_SCORE_TYPES.living) {
      sortedRegions = sortedRegions.sort(
        (a, b) => (b.living_score ?? 0) - (a.living_score ?? 0),
      );
    } else if (scoreType === REGION_SCORE_TYPES.safety) {
      sortedRegions = sortedRegions.sort(
        (a, b) => (b.safety_score ?? 0) - (a.safety_score ?? 0),
      );
    } else {
      sortedRegions = sortedRegions.sort((a, b) =>
        a.name.localeCompare(b.name, 'ko'),
      );
    }
    if (limit && limit > 0) {
      sortedRegions = sortedRegions.slice(0, limit);
    }
    await this.cacheManager.set(cacheKey, sortedRegions, 300); // 5분 TTL
    return sortedRegions;
  }

  async getProvincesWithRegions(): Promise<
    {
      id: number;
      name: string;
      regions: Region[];
    }[]
  > {
    const cacheKey = 'provinces-with-regions';
    const cached = await this.cacheManager.get<any[]>(cacheKey);
    if (cached) {
      return cached;
    }
    // 모든 provinces와 regions를 한 번에 가져옴
    const { data: provinces, error: provinceError } = await this.supabase
      .from('provinces')
      .select('id, name');
    if (provinceError) {
      throw provinceError;
    }
    const { data: regions, error: regionError } = await this.supabase
      .from('regions')
      .select(
        'id, name, province_id, district_type, weight_class, klaci_code, growth_score, economy_score, living_score, safety_score',
      );
    if (regionError) {
      throw regionError;
    }
    // provinces별로 하위 regions를 가나다(오름차순)로 정렬하여 묶음
    const result = (provinces as { id: number; name: string }[]).map(
      (province) => ({
        id: province.id,
        name: province.name,
        regions: (regions as Region[])
          .filter((r) => r.province_id === province.id)
          .sort((a, b) => a.name.localeCompare(b.name, 'ko')),
      }),
    );
    await this.cacheManager.set(cacheKey, result, 300); // 5분 TTL
    return result;
  }
}
