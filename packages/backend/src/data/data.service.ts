import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Cache } from 'cache-manager';
import {
  CategoryKeyIndexRank,
  KeyIndexData,
  KeyIndexWithDetails,
  Region,
  RegionKeyIndexRank,
  RegionKeyIndexScoreResponse,
  RegionsResponse,
  RegionStrengthIndexesResponse,
  RegionStrengthIndexesWithDetailsResponse,
  RegionWithDetails,
  SelectionDisplayType,
  SelectionTag,
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
        klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary, nickname_multiline)
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
        klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary, nickname_multiline)
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

    // key_index_averages 테이블에서 연도별 평균점수 조회
    let yearlyAvgScore: number | null = null;
    try {
      const { data: yearlyAvg, error: yearlyAvgError } = await this.supabase
        .from('key_index_averages')
        .select('avg_score')
        .eq('key_index_id', indexId)
        .eq('year', targetYear)
        .single();

      if (yearlyAvgError && yearlyAvgError.code !== 'PGRST116') {
        // PGRST116는 결과가 없는 경우의 에러 코드
        console.error('Error fetching key index average:', yearlyAvgError);
      } else if (yearlyAvg) {
        yearlyAvgScore = yearlyAvg.avg_score || null;
      }
    } catch (error) {
      console.error('Error in key_index_averages query:', error);
      // 에러가 발생해도 기본값 null을 사용하여 계속 진행
    }

    keyIndexData = {
      ...keyIndex,
      yearly_avg_score: yearlyAvgScore,
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
        klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary, nickname_multiline)
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

    // 먼저 해당 region의 정보를 조회
    const { data: regionData, error: regionError } = await this.supabase
      .from('regions')
      .select('klaci_code, total_rank, weight_class')
      .eq('id', regionId)
      .single();

    if (regionError || !regionData) {
      console.error('Region not found:', regionId, regionError);
      throw new Error(`Region with id ${regionId} not found`);
    }

    const klaciCode = regionData.klaci_code;
    const upperKlaciCode = klaciCode.toUpperCase();
    const currentTotalRank = regionData.total_rank;
    const currentWeightClass = regionData.weight_class;

    // 1. 종합순위 위아래 2개씩 찾기 (고정 순위)
    let adjacentRankQuery = '';
    if (currentTotalRank === 1) {
      // 1위인 경우 2,3위
      adjacentRankQuery = `total_rank.eq.2,total_rank.eq.3`;
    } else if (currentTotalRank === 2) {
      // 2위인 경우 1,3,4위
      adjacentRankQuery = `total_rank.eq.1,total_rank.eq.3,total_rank.eq.4`;
    } else {
      // 일반적인 경우 위아래 2개씩
      adjacentRankQuery = `total_rank.eq.${currentTotalRank - 2},total_rank.eq.${currentTotalRank - 1},total_rank.eq.${currentTotalRank + 1},total_rank.eq.${currentTotalRank + 2}`;
    }

    const { data: adjacentRankRegions, error: adjacentRankError } =
      await this.supabase
        .from('regions')
        .select(
          `
        *,
        province:provinces(id, name),
        klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary, nickname_multiline)
        `,
        )
        .or(adjacentRankQuery)
        .neq('id', regionId)
        .order('total_rank', { ascending: true })
        .limit(4);

    if (adjacentRankError) {
      throw adjacentRankError;
    }

    // 2. 같은 유형에서 가까운 순위 2개 (고정 순위) - 수정된 부분
    // 먼저 같은 유형의 모든 지역을 순위순으로 가져오기
    const { data: allSameCodeRegions, error: allSameCodeError } =
      await this.supabase
        .from('regions')
        .select('id, total_rank')
        .ilike('klaci_code', upperKlaciCode)
        .order('total_rank', { ascending: true });

    if (allSameCodeError) {
      throw allSameCodeError;
    }

    // 현재 지역의 같은 유형 내 순위 찾기
    const sameCodeRankings = allSameCodeRegions || [];
    const currentRegionIndex = sameCodeRankings.findIndex(
      (region) => region.id === regionId,
    );

    let selectedSameTypeRegions: any[] = [];

    if (currentRegionIndex !== -1 && sameCodeRankings.length > 1) {
      // 같은 유형에서 가까운 순위 2개 선택
      const indices = [];

      if (currentRegionIndex === 0) {
        // 첫 번째인 경우 다음 2개
        indices.push(1, 2);
      } else if (currentRegionIndex === sameCodeRankings.length - 1) {
        // 마지막인 경우 이전 2개
        indices.push(sameCodeRankings.length - 3, sameCodeRankings.length - 2);
      } else if (currentRegionIndex === 1) {
        // 두 번째인 경우 첫 번째와 세 번째
        indices.push(0, 2);
      } else {
        // 일반적인 경우 위아래 1개씩
        indices.push(currentRegionIndex - 1, currentRegionIndex + 1);
      }

      // 유효한 인덱스만 필터링
      const validIndices = indices.filter(
        (idx) => idx >= 0 && idx < sameCodeRankings.length,
      );

      if (validIndices.length > 0) {
        const selectedRankIds = validIndices.map(
          (idx) => sameCodeRankings[idx].id,
        );

        const { data: sameTypeRankRegions, error: sameTypeRankError } =
          await this.supabase
            .from('regions')
            .select(
              `
            *,
            province:provinces(id, name),
            klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary, nickname_multiline)
            `,
            )
            .in('id', selectedRankIds)
            .neq('id', regionId)
            .order('total_rank', { ascending: true })
            .limit(2);

        if (sameTypeRankError) {
          throw sameTypeRankError;
        }

        selectedSameTypeRegions = sameTypeRankRegions || [];
      }
    }

    // 3. 강점 TOP3 중에 하나라도 일치하는 지역들 찾기 (랜덤)
    // 먼저 해당 지역의 강점 TOP3 조회
    const { data: strengthIndexes, error: strengthError } = await this.supabase
      .from('region_strength_indexes')
      .select('code')
      .eq('region_id', regionId)
      .eq('type', 'strength')
      .order('rank', { ascending: true })
      .limit(3);

    if (strengthError) {
      throw strengthError;
    }

    let selectedStrengthRegions: any[] = [];
    if (strengthIndexes && strengthIndexes.length > 0) {
      // 강점 코드들을 추출
      const strengthCodes = strengthIndexes.map((item) => item.code);

      // 강점 TOP3 중 하나라도 일치하는 지역들 조회 (랜덤)
      const { data: strengthRegions, error: strengthRegionsError } =
        await this.supabase
          .from('region_strength_indexes')
          .select(
            `
          region_id,
          code,
          rank
        `,
          )
          .in('code', strengthCodes)
          .eq('type', 'strength')
          .neq('region_id', regionId)
          .order('rank', { ascending: true })
          .limit(20); // 더 많은 데이터에서 랜덤 선택

      if (strengthRegionsError) {
        throw strengthRegionsError;
      }

      // 지역별로 가장 높은 순위의 강점만 선택하고, 중복 제거
      const regionStrengthMap = new Map<
        number,
        { region_id: number; code: string; rank: number }
      >();
      strengthRegions?.forEach((item) => {
        const existing = regionStrengthMap.get(item.region_id);
        if (!existing || existing.rank > item.rank) {
          regionStrengthMap.set(item.region_id, item);
        }
      });

      // 순위 순으로 정렬하여 상위 10개 선택 후 랜덤
      const topStrengthRegions = Array.from(regionStrengthMap.values())
        .sort((a, b) => a.rank - b.rank)
        .slice(0, 10);

      if (topStrengthRegions.length > 0) {
        const strengthRegionIds = topStrengthRegions.map(
          (item) => item.region_id,
        );

        // 해당 지역들의 상세 정보 조회
        const { data: strengthRegionsDetails, error: strengthDetailsError } =
          await this.supabase
            .from('regions')
            .select(
              `
            *,
            province:provinces(id, name),
            klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary, nickname_multiline)
            `,
            )
            .in('id', strengthRegionIds)
            .order('id', { ascending: false }); // 랜덤 효과를 위해 id 역순 정렬

        if (strengthDetailsError) {
          throw strengthDetailsError;
        }

        // 클라이언트에서 랜덤 선택
        const shuffledStrength = [...(strengthRegionsDetails || [])];
        for (let i = shuffledStrength.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledStrength[i], shuffledStrength[j]] = [
            shuffledStrength[j],
            shuffledStrength[i],
          ];
        }
        selectedStrengthRegions = shuffledStrength.slice(0, 2);
      }
    }

    // 4. 같은 체급에서 랜덤 2개 선택
    const { data: sameWeightClassRegions, error: sameWeightClassError } =
      await this.supabase
        .from('regions')
        .select(
          `
      *,
      province:provinces(id, name),
      klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary, nickname_multiline)
      `,
        )
        .eq('weight_class', currentWeightClass)
        .neq('id', regionId)
        .order('id', { ascending: false }) // 랜덤 효과를 위해 id 역순 정렬
        .limit(10); // 더 많은 데이터에서 랜덤 선택

    if (sameWeightClassError) {
      throw sameWeightClassError;
    }

    // Fisher-Yates 셔플 알고리즘으로 랜덤 선택
    const shuffledWeightClass = [...(sameWeightClassRegions || [])];
    for (let i = shuffledWeightClass.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledWeightClass[i], shuffledWeightClass[j]] = [
        shuffledWeightClass[j],
        shuffledWeightClass[i],
      ];
    }
    const selectedWeightClassRegions = shuffledWeightClass.slice(0, 2);

    // 5. 같은 유형에서 추가 지역들 가져오기 (보충용, 랜덤)
    const { data: additionalSameCodeRegions, error: additionalSameCodeError } =
      await this.supabase
        .from('regions')
        .select(
          `
      *,
      province:provinces(id, name),
      klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary, nickname_multiline)
      `,
        )
        .ilike('klaci_code', upperKlaciCode)
        .neq('id', regionId)
        .order('id', { ascending: false }) // 랜덤 효과를 위해 id 역순 정렬
        .range(2, 20); // 더 많은 데이터에서 랜덤 선택

    if (additionalSameCodeError) {
      throw additionalSameCodeError;
    }

    // 각 조건별로 정확한 개수 유지하면서 중복 제거하고 태그 추가
    const usedRegionIds = new Set<number>();
    const result: RegionWithDetails[] = [];

    // 각 조건의 데이터를 배열로 준비 (타입 명시)
    const conditionData: Array<{
      regions: any[];
      tag: SelectionTag;
      display: SelectionDisplayType;
    }> = [
      {
        regions: adjacentRankRegions || [],
        tag: 'ADJACENT_RANK' as SelectionTag,
        display: '순위가 비슷한' as SelectionDisplayType,
      },
      {
        regions: selectedSameTypeRegions || [],
        tag: 'SAME_TYPE_RANK' as SelectionTag,
        display: '유형이 비슷한' as SelectionDisplayType,
      },
      {
        regions: selectedStrengthRegions || [],
        tag: 'SHARED_STRENGTH' as SelectionTag,
        display: '강점이 비슷한' as SelectionDisplayType,
      },
      {
        regions: selectedWeightClassRegions || [],
        tag: 'SAME_WEIGHT_CLASS' as SelectionTag,
        display: '인구가 비슷한' as SelectionDisplayType,
      },
    ];

    // 각 조건에서 1개씩 번갈아가며 추가 (라운드 로빈 방식)
    let round = 0;
    let hasMoreData = true;

    while (result.length < 8 && hasMoreData) {
      hasMoreData = false;

      for (let i = 0; i < conditionData.length; i++) {
        const condition = conditionData[i];
        const regionIndex = round;

        if (regionIndex < condition.regions.length && result.length < 8) {
          const region = condition.regions[regionIndex];

          if (!usedRegionIds.has(region.id)) {
            usedRegionIds.add(region.id);
            const regionWithDetails = region as RegionWithDetails;
            regionWithDetails.selection_tags = [condition.tag];
            regionWithDetails.display_type = condition.display;
            result.push(regionWithDetails);
            hasMoreData = true;
          } else {
            // 이미 추가된 지역이면 태그만 추가
            const existingRegion = result.find((r) => r.id === region.id);
            if (existingRegion && existingRegion.selection_tags) {
              existingRegion.selection_tags.push(condition.tag);
            }
          }
        }
      }

      round++;
    }

    // 부족한 경우 같은 유형에서 더 추가 (8개가 될 때까지)
    if (
      result.length < 8 &&
      additionalSameCodeRegions &&
      additionalSameCodeRegions.length > 0
    ) {
      // 사용되지 않은 같은 유형 지역들 필터링
      const unusedSameCodeRegions = additionalSameCodeRegions.filter(
        (region) => !usedRegionIds.has(region.id),
      );

      // 랜덤 셔플
      const shuffledAdditional = [...unusedSameCodeRegions];
      for (let i = shuffledAdditional.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledAdditional[i], shuffledAdditional[j]] = [
          shuffledAdditional[j],
          shuffledAdditional[i],
        ];
      }

      // 8개가 될 때까지 추가
      for (let i = 0; i < shuffledAdditional.length && result.length < 8; i++) {
        const region = shuffledAdditional[i];
        const regionWithDetails = region as RegionWithDetails;
        regionWithDetails.selection_tags = ['SAME_CODE' as SelectionTag];
        regionWithDetails.display_type =
          '유형이 비슷한' as SelectionDisplayType;
        result.push(regionWithDetails);
      }
    }

    // 8개를 넘어가면 랜덤으로 8개 선택
    if (result.length > 8) {
      // Fisher-Yates 셔플 알고리즘으로 랜덤 선택
      const shuffled = [...result];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      result.splice(0, result.length, ...shuffled.slice(0, 8));
    }

    // 각 지역에 대해 category_ranks 조회
    for (const region of result) {
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

    // 최종 결과를 랜덤하게 섞기
    const finalResult = [...result];
    for (let i = finalResult.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [finalResult[i], finalResult[j]] = [finalResult[j], finalResult[i]];
    }

    // 캐시에 저장
    await this.cacheManager.set(cacheKey, finalResult, 3600000); // 1시간 캐시

    return finalResult;
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
        klaci:klaci_codes(code, nickname, type, trait, opportunity, strategy, summary, nickname_multiline)
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

  async getRegionKeyIndexScore(
    regionId: number,
    keyIndexId: number,
  ): Promise<RegionKeyIndexScoreResponse> {
    const cacheKey = `region_key_index_score:${regionId}:${keyIndexId}`;
    let result =
      await this.cacheManager.get<RegionKeyIndexScoreResponse>(cacheKey);
    if (result) {
      return result;
    }

    // 1. region_key_index_scores에서 특정 지역의 해당 인덱스 점수 조회
    const { data: scoreData, error: scoreError } = await this.supabase
      .from('region_key_index_scores')
      .select('*')
      .eq('region_id', regionId)
      .eq('key_index_id', keyIndexId)
      .order('year', { ascending: false })
      .limit(1)
      .single();

    if (scoreError) {
      throw scoreError;
    }

    // 2. key_index_averages 테이블에서 해당 인덱스의 전체평균 조회
    let avgScore = 0;
    try {
      const { data: avgData, error: avgError } = await this.supabase
        .from('key_index_averages')
        .select('avg_score')
        .eq('key_index_id', keyIndexId)
        .order('year', { ascending: false })
        .limit(1)
        .single();

      if (avgError && avgError.code !== 'PGRST116') {
        // PGRST116는 결과가 없는 경우의 에러 코드
        console.error('Error fetching key index average:', avgError);
      } else if (avgData) {
        avgScore = avgData.avg_score || 0;
      }
    } catch (error) {
      console.error('Error in key_index_averages query:', error);
      // 에러가 발생해도 기본값 0을 사용하여 계속 진행
    }

    // 3. key_indexes에서 인덱스 정보 조회
    const { data: keyIndexData, error: keyIndexError } = await this.supabase
      .from('key_indexes')
      .select('*')
      .eq('id', keyIndexId)
      .single();

    if (keyIndexError) {
      throw keyIndexError;
    }

    // 4. region_key_index_ranks에서 순위 정보 조회 (새로 추가)
    let rank: number | undefined;
    try {
      const { data: rankData, error: rankError } = await this.supabase
        .from('region_key_index_ranks')
        .select('rank')
        .eq('region_id', regionId)
        .eq('key_index_id', keyIndexId)
        .order('year', { ascending: false })
        .limit(1)
        .single();

      if (rankError && rankError.code !== 'PGRST116') {
        console.error('Error fetching key index rank:', rankError);
      } else if (rankData) {
        rank = rankData.rank;
      }
    } catch (error) {
      console.error('Error in region_key_index_ranks query:', error);
      // 에러가 발생해도 기본값 undefined를 사용하여 계속 진행
    }

    result = {
      region_key_index_score: scoreData,
      avg_score: avgScore,
      key_index: keyIndexData as KeyIndexWithDetails,
      rank, // rank 정보 추가
    };

    await this.cacheManager.set(cacheKey, result, 300);
    return result;
  }

  async getRegionStrengthIndexes(
    regionId: number,
  ): Promise<RegionStrengthIndexesResponse> {
    const cacheKey = `region-strength-indexes:${regionId}`;

    // 캐시 확인
    const cached =
      await this.cacheManager.get<RegionStrengthIndexesResponse>(cacheKey);
    if (cached) {
      return cached;
    }

    // region_strength_indexes 테이블에서 해당 지역의 강점과 약점 조회
    const { data, error } = await this.supabase
      .from('region_strength_indexes')
      .select('*')
      .eq('region_id', regionId)
      .order('rank', { ascending: true });

    if (error) {
      throw error;
    }

    // 강점과 약점으로 분리
    const strengths = data.filter((item: any) => item.type === 'strength');
    const weaknesses = data.filter((item: any) => item.type === 'weakness');

    const result: RegionStrengthIndexesResponse = {
      strengths,
      weaknesses,
    };

    // 캐시에 저장 (5분 TTL)
    await this.cacheManager.set(cacheKey, result, 300);

    return result;
  }

  async getRegionStrengthIndexesWithDetails(
    regionId: number,
  ): Promise<RegionStrengthIndexesWithDetailsResponse> {
    const cacheKey = `region-strength-indexes-with-details:${regionId}`;

    // 캐시 확인
    const cached =
      await this.cacheManager.get<RegionStrengthIndexesWithDetailsResponse>(
        cacheKey,
      );
    if (cached) {
      return cached;
    }

    // 1. region_strength_indexes에서 해당 지역의 강점과 약점 조회
    const { data: strengthIndexes, error: strengthError } = await this.supabase
      .from('region_strength_indexes')
      .select('*')
      .eq('region_id', regionId)
      .order('rank', { ascending: true });

    if (strengthError) {
      throw strengthError;
    }

    // 2. key_indexes에서 모든 데이터 조회 (캐싱을 위해)
    const { data: keyIndexes, error: keyIndexError } = await this.supabase
      .from('key_indexes')
      .select('*');

    if (keyIndexError) {
      throw keyIndexError;
    }

    // 3. code를 기준으로 수동 조인
    const keyIndexMap = new Map(keyIndexes.map((ki) => [ki.code, ki]));

    const strengths = strengthIndexes
      .filter((item: any) => item.type === 'strength')
      .map((item: any) => ({
        id: item.id,
        region_id: item.region_id,
        type: item.type,
        rank: item.rank,
        code: item.code,
        key_index: keyIndexMap.get(item.code) || {
          id: 0,
          code: item.code,
          name: 'Unknown',
          category: 'Unknown',
          description: 'Unknown',
          unit: '',
          source: '',
          calculation_method: '',
          created_at: '',
          updated_at: '',
        },
      }));

    const weaknesses = strengthIndexes
      .filter((item: any) => item.type === 'weakness')
      .map((item: any) => ({
        id: item.id,
        region_id: item.region_id,
        type: item.type,
        rank: item.rank,
        code: item.code,
        key_index: keyIndexMap.get(item.code) || {
          id: 0,
          code: item.code,
          name: 'Unknown',
          category: 'Unknown',
          description: 'Unknown',
          unit: '',
          source: '',
          calculation_method: '',
          created_at: '',
          updated_at: '',
        },
      }));

    const result: RegionStrengthIndexesWithDetailsResponse = {
      strengths,
      weaknesses,
    };

    // 캐시에 저장 (5분 TTL)
    await this.cacheManager.set(cacheKey, result, 300);

    return result;
  }
}
