import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Cache } from 'cache-manager';
import {
  Region,
  RegionKeyIndexScore,
  RegionKeyIndexScoreRaw,
  RegionsResponse,
  RegionWithDetails,
} from './types/region.types';

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
    console.log('🔍 Checking cache for key:', cacheKey);

    let regionsResponse =
      await this.cacheManager.get<RegionsResponse>(cacheKey);
    if (regionsResponse) {
      console.log('✅ Cache HIT - returning cached data');
      return regionsResponse;
    }

    console.log('❌ Cache MISS - fetching from database');
    let query = this.supabase
      .from('regions')
      .select(
        `
        *,
        province:provinces(id, name),
        klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary)
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

    console.log('data', data);
    console.log('error', error);
    console.log('count', count);

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

    console.log('💾 Storing in cache with key:', cacheKey);
    await this.cacheManager.set(cacheKey, regionsResponse, 300);
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
        klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary)
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
    // 하위 regions 조회 (새로운 필드들 포함)
    const { data: regions, error: regionError } = await this.supabase
      .from('regions')
      .select(
        'id, name, province_id, district_type, weight_class, klaci_code, growth_score, economy_score, living_score, safety_score, total_score, total_rank',
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
    if (provinceError || !provinces) {
      throw provinceError;
    }
    const { data: regions, error: regionError } = await this.supabase
      .from('regions')
      .select(
        'id, name, province_id, district_type, weight_class, klaci_code, growth_score, economy_score, living_score, safety_score, total_score, total_rank',
      );
    if (regionError || !regions) {
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

  async getRegionKeyIndexScores(
    regionId: number,
  ): Promise<RegionKeyIndexScore[]> {
    const cacheKey = `region-key-index-scores:${regionId}`;

    // 캐시 확인
    const cached = await this.cacheManager.get<RegionKeyIndexScore[]>(cacheKey);
    if (cached) {
      return cached;
    }

    // region_keyindex_scores 테이블에서 key_indexes 정보와 함께 조회
    const { data, error } = await this.supabase
      .from('region_keyindex_scores')
      .select(
        `
        id,
        region_id,
        key_index_id,
        score,
        year,
        key_index:key_indexes(
          id,
          code,
          name
        )
      `,
      )
      .eq('region_id', regionId)
      .order('key_index_id', { ascending: true });

    if (error) {
      throw error;
    }

    // Supabase JOIN 결과를 올바른 타입으로 변환
    const rawData = data as RegionKeyIndexScoreRaw[];
    const result: RegionKeyIndexScore[] = rawData.map((item) => ({
      id: item.id,
      region_id: item.region_id,
      key_index_id: item.key_index_id,
      score: item.score,
      year: item.year,
      key_index: item.key_index[0], // 배열의 첫 번째 요소 사용
    }));

    // 캐시에 저장 (5분 TTL)
    await this.cacheManager.set(cacheKey, result, 300);

    return result;
  }

  async getRegionKeyIndexScoresByYear(
    regionId: number,
    year: number,
  ): Promise<RegionKeyIndexScore[]> {
    const cacheKey = `region-key-index-scores:${regionId}:${year}`;

    // 캐시 확인
    const cached = await this.cacheManager.get<RegionKeyIndexScore[]>(cacheKey);
    if (cached) {
      return cached;
    }

    // 특정 연도의 데이터만 조회
    const { data, error } = await this.supabase
      .from('region_keyindex_scores')
      .select(
        `
        id,
        region_id,
        key_index_id,
        score,
        year,
        key_index:key_indexes(
          id,
          code,
          name
        )
      `,
      )
      .eq('region_id', regionId)
      .eq('year', year)
      .order('key_index_id', { ascending: true });

    if (error) {
      throw error;
    }

    // Supabase JOIN 결과를 올바른 타입으로 변환
    const rawData = data as RegionKeyIndexScoreRaw[];
    const result: RegionKeyIndexScore[] = rawData.map((item) => ({
      id: item.id,
      region_id: item.region_id,
      key_index_id: item.key_index_id,
      score: item.score,
      year: item.year,
      key_index: item.key_index[0], // 배열의 첫 번째 요소 사용
    }));

    // 캐시에 저장 (5분 TTL)
    await this.cacheManager.set(cacheKey, result, 300);

    return result;
  }
}
