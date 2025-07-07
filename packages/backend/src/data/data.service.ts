import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Cache } from 'cache-manager';
import {
    CategoryKeyIndexRank,
    KeyIndexData,
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
        province:provinces(id, name, full_name, name_eng),
        klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary)
        `,
      )
      .eq('id', id)
      .single();

    if (regionError) {
      throw regionError;
    }

    region = regionData as RegionWithDetails;

    // 새로운 category_ranks 조회 추가
    try {
      const { data: categoryRanksData, error: categoryRanksError } =
        await this.supabase
          .from('region_category_ranks')
          .select(
            `
          id,
          region_id,
          category_id,
          rank,
          year,
          category:categories(id, name)
        `,
          )
          .eq('region_id', id)
          .order('rank', { ascending: true });

      if (!categoryRanksError && categoryRanksData) {
        const categoryRanks = categoryRanksData.map((item: any) => ({
          id: item.id,
          region_id: item.region_id,
          category_id: item.category_id,
          rank: item.rank,
          year: item.year,
          category: item.category || {
            id: item.category_id,
            name: 'Unknown',
          },
        }));

        region.category_ranks = categoryRanks;
      }
    } catch (error) {
      console.error('Error fetching category ranks:', error);
      // 에러가 발생해도 기본 region 정보는 반환
    }

    // 기존 key index ranks 조회 (유지)
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
            name,
            category,
            description
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
            category: 'Unknown',
            description: 'Unknown',
          },
        }));

        // 상위 N개와 하위 N개 분리
        const topRanks = allRanks.slice(0, topBottomCount);
        const bottomRanks = allRanks.slice(-topBottomCount).reverse(); // 하위는 내림차순으로 정렬

        // 카테고리별로 그룹화
        const growthCategoryRanks: CategoryKeyIndexRank[] = [];
        const economyCategoryRanks: CategoryKeyIndexRank[] = [];
        const livingCategoryRanks: CategoryKeyIndexRank[] = [];
        const safetyCategoryRanks: CategoryKeyIndexRank[] = [];

        allRanks.forEach((rank) => {
          const categoryRank: CategoryKeyIndexRank = {
            key_index_id: rank.key_index_id,
            name: rank.key_index.name,
            rank: rank.rank,
          };

          switch (rank.key_index.category) {
            case '인구성장력':
              growthCategoryRanks.push(categoryRank);
              break;
            case '경제활동력':
              economyCategoryRanks.push(categoryRank);
              break;
            case '생활기반력':
              livingCategoryRanks.push(categoryRank);
              break;
            case '안전회복력':
              safetyCategoryRanks.push(categoryRank);
              break;
            default:
              // 카테고리가 명확하지 않은 경우 기본값으로 처리
              break;
          }
        });

        // 각 카테고리별로 rank 순으로 정렬
        growthCategoryRanks.sort((a, b) => a.rank - b.rank);
        economyCategoryRanks.sort((a, b) => a.rank - b.rank);
        livingCategoryRanks.sort((a, b) => a.rank - b.rank);
        safetyCategoryRanks.sort((a, b) => a.rank - b.rank);

        region.key_index_ranks = {
          top: topRanks,
          bottom: bottomRanks,
          growth_category_ranks: growthCategoryRanks,
          economy_category_ranks: economyCategoryRanks,
          living_category_ranks: livingCategoryRanks,
          safety_category_ranks: safetyCategoryRanks,
        };
      } else {
        region.key_index_ranks = {
          top: [],
          bottom: [],
          growth_category_ranks: [],
          economy_category_ranks: [],
          living_category_ranks: [],
          safety_category_ranks: [],
        };
      }
    } catch (error) {
      console.error('Error fetching key index ranks:', error);
    }

    // 캐시에 저장
    await this.cacheManager.set(cacheKey, region, 300);
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
    // 캐시 키에 버전을 추가하여 캐시 무효화
    const cacheKey = 'provinces-with-regions-v2';
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

    // provinces를 가나다순으로 정렬
    const sortedProvinces = (provinces as { id: number; name: string }[]).sort(
      (a, b) => a.name.localeCompare(b.name, 'ko'),
    );

    // provinces별로 하위 regions를 가나다(오름차순)로 정렬하여 묶음
    const result = sortedProvinces.map((province) => ({
      id: province.id,
      name: province.name,
      regions: (regions as Region[])
        .filter((r) => r.province_id === province.id)
        .sort((a, b) => a.name.localeCompare(b.name, 'ko')),
    }));
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
          name,
          category,
          description
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
        category: 'Unknown',
        description: 'Unknown',
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
          name,
          category,
          description
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
        category: 'Unknown',
        description: 'Unknown',
      },
    }));

    // 캐시에 저장 (5분 TTL)
    await this.cacheManager.set(cacheKey, result, 300);

    return result;
  }

  async getKeyIndexData(indexId: number, year?: number): Promise<KeyIndexData> {
    // year가 없으면 현재 연도 사용
    const targetYear = year || new Date().getFullYear();
    const cacheKey = `key_index:${indexId}:${targetYear}`;

    let keyIndexData = await this.cacheManager.get<KeyIndexData>(cacheKey);
    if (keyIndexData) {
      return keyIndexData;
    }

    // key_indexes 테이블에서 기본 정보 조회 (source 포함)
    const { data: keyIndex, error: keyIndexError } = await this.supabase
      .from('key_indexes')
      .select('*')
      .eq('id', indexId)
      .single();

    if (keyIndexError) {
      throw keyIndexError;
    }

    if (!keyIndex) {
      throw new Error('Key index not found');
    }

    // key_index_yearly_avgs 테이블에서 연도별 평균점수 조회
    const { data: yearlyAvg, error: yearlyAvgError } = await this.supabase
      .from('key_index_yearly_avgs')
      .select('avg_score')
      .eq('key_index_id', indexId)
      .eq('year', targetYear)
      .single();

    if (yearlyAvgError && yearlyAvgError.code !== 'PGRST116') {
      // PGRST116는 결과가 없는 경우의 에러 코드
      throw yearlyAvgError;
    }

    keyIndexData = {
      ...keyIndex,
      yearly_avg_score: yearlyAvg?.avg_score || null,
      year: targetYear, // 연도 정보 추가
    } as KeyIndexData;

    await this.cacheManager.set(cacheKey, keyIndexData, 300);
    return keyIndexData;
  }

  async getAdjacentRegionByRank(
    currentRank: number,
    direction: 'prev' | 'next',
  ): Promise<RegionWithDetails | null> {
    const cacheKey = `adjacent-region:${currentRank}:${direction}`;
    const cached = await this.cacheManager.get<RegionWithDetails>(cacheKey);
    if (cached) {
      return cached;
    }

    // 전체 regions를 total_rank 순으로 가져오기
    const { data: regions, error } = await this.supabase
      .from('regions')
      .select(
        `
        *,
        province:provinces(id, name, full_name, name_eng),
        klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary)
        `,
      )
      .order('total_rank', { ascending: true });

    if (error || !regions) {
      throw error;
    }

    const totalRegions = regions.length;
    let targetRank: number;

    if (direction === 'prev') {
      // 이전 순위 (더 높은 순위, 더 작은 숫자)
      targetRank = currentRank === 1 ? totalRegions : currentRank - 1;
    } else {
      // 다음 순위 (더 낮은 순위, 더 큰 숫자)
      targetRank = currentRank === totalRegions ? 1 : currentRank + 1;
    }

    // targetRank에 해당하는 region 찾기
    const targetRegion = regions.find(
      (region) => region.total_rank === targetRank,
    );

    if (!targetRegion) {
      return null;
    }

    // RegionWithDetails 형태로 변환하고 상세 정보 추가
    const regionWithDetails: RegionWithDetails = {
      ...targetRegion,
      province: targetRegion.province,
      klaci: targetRegion.klaci,
    };

    // category_ranks 조회 추가
    try {
      const { data: categoryRanksData, error: categoryRanksError } =
        await this.supabase
          .from('region_category_ranks')
          .select(
            `
          id,
          region_id,
          category_id,
          rank,
          year,
          category:categories(id, name)
        `,
          )
          .eq('region_id', targetRegion.id)
          .order('rank', { ascending: true });

      if (!categoryRanksError && categoryRanksData) {
        const categoryRanks = categoryRanksData.map((item: any) => ({
          id: item.id,
          region_id: item.region_id,
          category_id: item.category_id,
          rank: item.rank,
          year: item.year,
          category: item.category || {
            id: item.category_id,
            name: 'Unknown',
          },
        }));

        regionWithDetails.category_ranks = categoryRanks;
      }
    } catch (error) {
      console.error('Error fetching category ranks:', error);
    }

    // key_index_ranks 조회 추가
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
            name,
            category,
            description
          )
        `,
        )
        .eq('region_id', targetRegion.id)
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
            category: 'Unknown',
            description: 'Unknown',
          },
        }));

        // 상위 10개와 하위 10개 분리
        const topRanks = allRanks.slice(0, 10);
        const bottomRanks = allRanks.slice(-10).reverse();

        // 카테고리별로 그룹화
        const growthCategoryRanks: CategoryKeyIndexRank[] = [];
        const economyCategoryRanks: CategoryKeyIndexRank[] = [];
        const livingCategoryRanks: CategoryKeyIndexRank[] = [];
        const safetyCategoryRanks: CategoryKeyIndexRank[] = [];

        allRanks.forEach((rank) => {
          const categoryRank: CategoryKeyIndexRank = {
            key_index_id: rank.key_index_id,
            name: rank.key_index.name,
            rank: rank.rank,
          };

          switch (rank.key_index.category) {
            case '인구성장력':
              growthCategoryRanks.push(categoryRank);
              break;
            case '경제활동력':
              economyCategoryRanks.push(categoryRank);
              break;
            case '생활기반력':
              livingCategoryRanks.push(categoryRank);
              break;
            case '안전회복력':
              safetyCategoryRanks.push(categoryRank);
              break;
            default:
              break;
          }
        });

        // 각 카테고리별로 rank 순으로 정렬
        growthCategoryRanks.sort((a, b) => a.rank - b.rank);
        economyCategoryRanks.sort((a, b) => a.rank - b.rank);
        livingCategoryRanks.sort((a, b) => a.rank - b.rank);
        safetyCategoryRanks.sort((a, b) => a.rank - b.rank);

        regionWithDetails.key_index_ranks = {
          top: topRanks,
          bottom: bottomRanks,
          growth_category_ranks: growthCategoryRanks,
          economy_category_ranks: economyCategoryRanks,
          living_category_ranks: livingCategoryRanks,
          safety_category_ranks: safetyCategoryRanks,
        };
      } else {
        regionWithDetails.key_index_ranks = {
          top: [],
          bottom: [],
          growth_category_ranks: [],
          economy_category_ranks: [],
          living_category_ranks: [],
          safety_category_ranks: [],
        };
      }
    } catch (error) {
      console.error('Error fetching key index ranks:', error);
    }

    await this.cacheManager.set(cacheKey, regionWithDetails, 300);
    return regionWithDetails;
  }

  async getSameCodeRegionsByRegionId(
    regionId: number,
  ): Promise<RegionWithDetails[]> {
    const cacheKey = `same-code-regions-by-id:${regionId}`;
    const cached = await this.cacheManager.get<RegionWithDetails[]>(cacheKey);
    if (cached) {
      return cached;
    }

    // 먼저 해당 region의 KLACI 코드를 조회
    const { data: regionData, error: regionError } = await this.supabase
      .from('regions')
      .select('klaci_code')
      .eq('id', regionId)
      .single();

    if (regionError || !regionData) {
      throw new Error(`Region with id ${regionId} not found`);
    }

    const klaciCode = regionData.klaci_code;
    const upperKlaciCode = klaciCode.toUpperCase();

    // KLACI 코드가 같은 지역들을 조회 (자기 자신 제외)
    const { data: regions, error } = await this.supabase
      .from('regions')
      .select(
        `
        *,
        province:provinces(id, name),
        klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary)
        `,
      )
      .ilike('klaci_code', upperKlaciCode)
      .neq('id', regionId) // 자기 자신 제외
      .order('total_rank', { ascending: true });

    if (error) {
      throw error;
    }

    const regionsWithDetails = regions as RegionWithDetails[];

    // 각 지역에 대해 category_ranks 조회
    for (const region of regionsWithDetails) {
      try {
        const { data: categoryRanksData, error: categoryRanksError } =
          await this.supabase
            .from('region_category_ranks')
            .select(
              `
            id,
            region_id,
            category_id,
            rank,
            year,
            category:categories(id, name)
          `,
            )
            .eq('region_id', region.id)
            .order('rank', { ascending: true });

        if (!categoryRanksError && categoryRanksData) {
          const categoryRanks = categoryRanksData.map((item: any) => ({
            id: item.id,
            region_id: item.region_id,
            category_id: item.category_id,
            rank: item.rank,
            year: item.year,
            category: item.category || {
              id: item.category_id,
              name: 'Unknown',
            },
          }));

          region.category_ranks = categoryRanks;
        }
      } catch (error) {
        console.error(
          `Error fetching category ranks for region ${region.id}:`,
          error,
        );
      }
    }

    await this.cacheManager.set(cacheKey, regionsWithDetails, 300);
    return regionsWithDetails;
  }

  // 기존 메서드는 유지 (필요시 사용)
  async getSameCodeRegions(klaciCode: string): Promise<RegionWithDetails[]> {
    const cacheKey = `same-code-regions:${klaciCode.toUpperCase()}`;
    const cached = await this.cacheManager.get<RegionWithDetails[]>(cacheKey);
    if (cached) {
      return cached;
    }

    // KLACI 코드를 대문자로 변환하여 대소문자 상관없이 검색
    const upperKlaciCode = klaciCode.toUpperCase();

    const { data: regions, error } = await this.supabase
      .from('regions')
      .select(
        `
        *,
        province:provinces(id, name),
        klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary)
        `,
      )
      .ilike('klaci_code', upperKlaciCode) // 대소문자 상관없이 검색
      .order('total_rank', { ascending: true });

    if (error) {
      throw error;
    }

    const regionsWithDetails = regions as RegionWithDetails[];

    // 각 지역에 대해 category_ranks 조회
    for (const region of regionsWithDetails) {
      try {
        const { data: categoryRanksData, error: categoryRanksError } =
          await this.supabase
            .from('region_category_ranks')
            .select(
              `
            id,
            region_id,
            category_id,
            rank,
            year,
            category:categories(id, name)
          `,
            )
            .eq('region_id', region.id)
            .order('rank', { ascending: true });

        if (!categoryRanksError && categoryRanksData) {
          const categoryRanks = categoryRanksData.map((item: any) => ({
            id: item.id,
            region_id: item.region_id,
            category_id: item.category_id,
            rank: item.rank,
            year: item.year,
            category: item.category || {
              id: item.category_id,
              name: 'Unknown',
            },
          }));

          region.category_ranks = categoryRanks;
        }
      } catch (error) {
        console.error(
          `Error fetching category ranks for region ${region.id}:`,
          error,
        );
      }
    }

    await this.cacheManager.set(cacheKey, regionsWithDetails, 300);
    return regionsWithDetails;
  }
}
