import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Cache } from 'cache-manager';
import {
  Region,
  RegionKeyIndexRank,
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
    console.log('�� Checking cache for key:', cacheKey);

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

  async getRegion(
    id: string,
    topBottomCount: number = 10,
  ): Promise<RegionWithDetails> {
    const cacheKey = `region:${id}:topBottom:${topBottomCount}`;
    let region = await this.cacheManager.get<RegionWithDetails>(cacheKey);
    if (region) {
      return region;
    }

    // 기본 region 정보 조회
    const { data: regionData, error: regionError } = await this.supabase
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

    if (regionError) {
      throw regionError;
    }

    region = regionData as RegionWithDetails;

    // key index ranks 조회 - key_indexes의 id, code, name 포함
    try {
      const { data: keyIndexData, error: keyIndexError } = await this.supabase
        .from('region_key_index_ranks')
        .select(
          `
          id,
          region_id,
          key_index_id,
          rank,
          year,
          key_indexes!key_index_id(
            id,
            code,
            name
          )
        `,
        )
        .eq('region_id', id)
        .order('rank', { ascending: true });

      if (!keyIndexError && keyIndexData) {
        const rawData = keyIndexData as any[];
        const allRanks = rawData.map((item) => ({
          id: item.id,
          region_id: item.region_id,
          key_index_id: item.key_index_id,
          rank: item.rank,
          year: item.year,
          key_index: item.key_indexes || {
            id: item.key_index_id,
            code: 'Unknown',
            name: 'Unknown',
          },
        }));

        // 상위 N개와 하위 N개 분리
        const topRanks = allRanks.slice(0, topBottomCount);
        const bottomRanks = allRanks.slice(-topBottomCount).reverse(); // 하위는 내림차순으로 정렬

        region.key_index_ranks = {
          top: topRanks,
          bottom: bottomRanks,
        };
      } else {
        region.key_index_ranks = {
          top: [],
          bottom: [],
        };
      }
    } catch (keyIndexError) {
      console.warn('Failed to fetch key index ranks:', keyIndexError);
      region.key_index_ranks = {
        top: [],
        bottom: [],
      };
    }

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

  async getRegionKeyIndexRanks(
    regionId: number,
  ): Promise<RegionKeyIndexRank[]> {
    const cacheKey = `region-key-index-ranks:${regionId}`;

    // 캐시 확인
    const cached = await this.cacheManager.get<RegionKeyIndexRank[]>(cacheKey);
    if (cached) {
      return cached;
    }

    // region_key_index_ranks 테이블에서 key_indexes 정보와 함께 조회
    const { data, error } = await this.supabase
      .from('region_key_index_ranks')
      .select(
        `
        id,
        region_id,
        key_index_id,
        rank,
        year,
        key_indexes!key_index_id(
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
    const rawData = data as any[];
    const result: RegionKeyIndexRank[] = rawData.map((item) => ({
      id: item.id,
      region_id: item.region_id,
      key_index_id: item.key_index_id,
      rank: item.rank,
      year: item.year,
      key_index: item.key_indexes || {
        id: item.key_index_id,
        code: 'Unknown',
        name: 'Unknown',
      },
    }));

    // 캐시에 저장 (5분 TTL)
    await this.cacheManager.set(cacheKey, result, 300);

    return result;
  }

  async getRegionKeyIndexRanksByYear(
    regionId: number,
    year: number,
  ): Promise<RegionKeyIndexRank[]> {
    const cacheKey = `region-key-index-ranks:${regionId}:${year}`;

    // 캐시 확인
    const cached = await this.cacheManager.get<RegionKeyIndexRank[]>(cacheKey);
    if (cached) {
      return cached;
    }

    // JOIN 구문 수정 - key_indexes!key_index_id 사용
    const { data, error } = await this.supabase
      .from('region_key_index_ranks')
      .select(
        `
        id,
        region_id,
        key_index_id,
        rank,
        year,
        key_indexes!key_index_id(
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
    const rawData = data as any[];
    const result: RegionKeyIndexRank[] = rawData.map((item) => ({
      id: item.id,
      region_id: item.region_id,
      key_index_id: item.key_index_id,
      rank: item.rank,
      year: item.year,
      key_index: item.key_indexes || {
        id: item.key_index_id,
        code: 'Unknown',
        name: 'Unknown',
      },
    }));

    // 캐시에 저장 (5분 TTL)
    await this.cacheManager.set(cacheKey, result, 300);

    return result;
  }
}
