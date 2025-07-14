import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { TopRegionCardDto } from './dto/top-region-card-response.dto';

@Injectable()
export class StatsService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async getTotalRegionRanks(limit: number = 100, year?: number) {
    const currentYear = new Date().getFullYear();
    const targetYear = year || currentYear;

    const { data, error } = await this.supabaseService
      .getClient()
      .from('region_total_rank')
      .select(
        `
        id,
        total_rank,
        region_id,
        strength_indexes,
        total_score,
        year,
        region:regions (
          *,
          province:provinces (
            *
          ),
          klaci:klaci_codes (
            *
          )
        )
      `,
      )
      .eq('year', targetYear)
      .order('total_rank', { ascending: true })
      .limit(limit);

    if (error) throw error;

    // strength_indexes와 key_indexes 조인 처리
    const enrichedData = await Promise.all(
      data.map(async (item) => {
        let strengthIndexesDetails = [];

        if (item.strength_indexes && item.strength_indexes.length > 0) {
          // strength_indexes 배열의 각 코드에 대해 key_indexes 정보 조회
          const { data: keyIndexesData, error: keyIndexesError } =
            await this.supabaseService
              .getClient()
              .from('key_indexes')
              .select(
                `
              id,
              code,
              name,
              category,
              description,
              source,
              unit,
              name_eng
            `,
              )
              .in('code', item.strength_indexes);

          if (!keyIndexesError && keyIndexesData) {
            // 원래 strength_indexes 배열 순서에 맞게 재정렬
            strengthIndexesDetails = item.strength_indexes
              .map((code) => keyIndexesData.find((item) => item.code === code))
              .filter(Boolean); // undefined 값 제거
          }
        }

        // strength_indexes 배열은 제거하고 strength_indexes_details만 반환
        const { strength_indexes, ...rest } = item;
        return {
          ...rest,
          strength_indexes_details: strengthIndexesDetails,
        };
      }),
    );

    return enrichedData;
  }

  async getMajorProvincesRanks(limit: number = 100, year?: number) {
    const currentYear = new Date().getFullYear();
    const targetYear = year || currentYear;

    const { data, error } = await this.supabaseService
      .getClient()
      .from('rank_major_provinces')
      .select(
        `
        id,
        rank,
        region_id,
        strength_indexes,
        total_score,
        year,
        region:regions (
          *,
          province:provinces (
            *
          ),
          klaci:klaci_codes (
            *
          )
        )
      `,
      )
      .eq('year', targetYear)
      .order('rank', { ascending: true })
      .limit(limit);

    if (error) {
      throw new Error(
        `Failed to fetch major provinces ranks: ${error.message}`,
      );
    }

    const enrichedData = await Promise.all(
      data.map(async (item) => {
        let strengthIndexesDetails = [];
        if (item.strength_indexes && item.strength_indexes.length > 0) {
          const { data: keyIndexesData, error: keyIndexesError } =
            await this.supabaseService
              .getClient()
              .from('key_indexes')
              .select(
                `
              id,
              code,
              name,
              category,
              description,
              source,
              unit,
              name_eng
            `,
              )
              .in('code', item.strength_indexes);

          if (!keyIndexesError && keyIndexesData) {
            strengthIndexesDetails = item.strength_indexes
              .map((code) => keyIndexesData.find((item) => item.code === code))
              .filter(Boolean);
          }
        }

        const { strength_indexes, rank, ...rest } = item;
        return {
          ...rest,
          total_rank: rank,
          strength_indexes_details: strengthIndexesDetails,
        };
      }),
    );

    return enrichedData;
  }

  async getSelectedProvincesRanks(limit: number = 100, year?: number) {
    const currentYear = new Date().getFullYear();
    const targetYear = year || currentYear;

    const { data, error } = await this.supabaseService
      .getClient()
      .from('rank_selected_provinces')
      .select(
        `
        id,
        rank,
        region_id,
        strength_indexes,
        total_score,
        year,
        region:regions (
          *,
          province:provinces (
            *
          ),
          klaci:klaci_codes (
            *
          )
        )
      `,
      )
      .eq('year', targetYear)
      .order('rank', { ascending: true })
      .limit(limit);

    if (error) {
      throw new Error(
        `Failed to fetch selected provinces ranks: ${error.message}`,
      );
    }

    const enrichedData = await Promise.all(
      data.map(async (item) => {
        let strengthIndexesDetails = [];
        if (item.strength_indexes && item.strength_indexes.length > 0) {
          const { data: keyIndexesData, error: keyIndexesError } =
            await this.supabaseService
              .getClient()
              .from('key_indexes')
              .select(
                `
              id,
              code,
              name,
              category,
              description,
              source,
              unit,
              name_eng
            `,
              )
              .in('code', item.strength_indexes);

          if (!keyIndexesError && keyIndexesData) {
            strengthIndexesDetails = item.strength_indexes
              .map((code) => keyIndexesData.find((item) => item.code === code))
              .filter(Boolean);
          }
        }

        const { strength_indexes, rank, ...rest } = item;
        return {
          ...rest,
          total_rank: rank,
          strength_indexes_details: strengthIndexesDetails,
        };
      }),
    );

    return enrichedData;
  }

  async getFreeEconomyZoneRanks(limit: number = 100, year?: number) {
    const currentYear = new Date().getFullYear();
    const targetYear = year || currentYear;

    const { data, error } = await this.supabaseService
      .getClient()
      .from('rank_free_economy_zone')
      .select(
        `
        id,
        rank,
        region_id,
        strength_indexes,
        total_score,
        year,
        region:regions (
          *,
          province:provinces (
            *
          ),
          klaci:klaci_codes (
            *
          )
        )
      `,
      )
      .eq('year', targetYear)
      .order('rank', { ascending: true })
      .limit(limit);

    if (error) {
      throw new Error(
        `Failed to fetch free economy zone ranks: ${error.message}`,
      );
    }

    const enrichedData = await Promise.all(
      data.map(async (item) => {
        let strengthIndexesDetails = [];
        if (item.strength_indexes && item.strength_indexes.length > 0) {
          const { data: keyIndexesData, error: keyIndexesError } =
            await this.supabaseService
              .getClient()
              .from('key_indexes')
              .select(
                `
              id,
              code,
              name,
              category,
              description,
              source,
              unit,
              name_eng
            `,
              )
              .in('code', item.strength_indexes);

          if (!keyIndexesError && keyIndexesData) {
            strengthIndexesDetails = item.strength_indexes
              .map((code) => keyIndexesData.find((item) => item.code === code))
              .filter(Boolean);
          }
        }

        const { strength_indexes, rank, ...rest } = item;
        return {
          ...rest,
          total_rank: rank,
          strength_indexes_details: strengthIndexesDetails,
        };
      }),
    );

    return enrichedData;
  }

  async getGrowthBoostZoneRanks(limit: number = 100, year?: number) {
    const currentYear = new Date().getFullYear();
    const targetYear = year || currentYear;

    const { data, error } = await this.supabaseService
      .getClient()
      .from('rank_growth_boost_zone')
      .select(
        `
        id,
        rank,
        region_id,
        strength_indexes,
        total_score,
        year,
        region:regions (
          *,
          province:provinces (
            *
          ),
          klaci:klaci_codes (
            *
          )
        )
      `,
      )
      .eq('year', targetYear)
      .order('rank', { ascending: true })
      .limit(limit);

    if (error) {
      throw new Error(
        `Failed to fetch growth boost zone ranks: ${error.message}`,
      );
    }

    const enrichedData = await Promise.all(
      data.map(async (item) => {
        let strengthIndexesDetails = [];
        if (item.strength_indexes && item.strength_indexes.length > 0) {
          const { data: keyIndexesData, error: keyIndexesError } =
            await this.supabaseService
              .getClient()
              .from('key_indexes')
              .select(
                `
              id,
              code,
              name,
              category,
              description,
              source,
              unit,
              name_eng
            `,
              )
              .in('code', item.strength_indexes);

          if (!keyIndexesError && keyIndexesData) {
            strengthIndexesDetails = item.strength_indexes
              .map((code) => keyIndexesData.find((item) => item.code === code))
              .filter(Boolean);
          }
        }

        const { strength_indexes, rank, ...rest } = item;
        return {
          ...rest,
          total_rank: rank,
          strength_indexes_details: strengthIndexesDetails,
        };
      }),
    );

    return enrichedData;
  }

  async getNationalIndustrialZoneRanks(limit: number = 100, year?: number) {
    const currentYear = new Date().getFullYear();
    const targetYear = year || currentYear;

    const { data, error } = await this.supabaseService
      .getClient()
      .from('rank_national_industrial_zone')
      .select(
        `
        id,
        rank,
        region_id,
        strength_indexes,
        total_score,
        year,
        region:regions (
          *,
          province:provinces (
            *
          ),
          klaci:klaci_codes (
            *
          )
        )
      `,
      )
      .eq('year', targetYear)
      .order('rank', { ascending: true })
      .limit(limit);

    if (error) {
      throw new Error(
        `Failed to fetch national industrial zone ranks: ${error.message}`,
      );
    }

    const enrichedData = await Promise.all(
      data.map(async (item) => {
        let strengthIndexesDetails = [];
        if (item.strength_indexes && item.strength_indexes.length > 0) {
          const { data: keyIndexesData, error: keyIndexesError } =
            await this.supabaseService
              .getClient()
              .from('key_indexes')
              .select(
                `
              id,
              code,
              name,
              category,
              description,
              source,
              unit,
              name_eng
            `,
              )
              .in('code', item.strength_indexes);

          if (!keyIndexesError && keyIndexesData) {
            strengthIndexesDetails = item.strength_indexes
              .map((code) => keyIndexesData.find((item) => item.code === code))
              .filter(Boolean);
          }
        }

        const { strength_indexes, rank, ...rest } = item;
        return {
          ...rest,
          total_rank: rank,
          strength_indexes_details: strengthIndexesDetails,
        };
      }),
    );

    return enrichedData;
  }

  async getCostalCityRanks(limit: number = 100, year?: number) {
    const currentYear = new Date().getFullYear();
    const targetYear = year || currentYear;

    const { data, error } = await this.supabaseService
      .getClient()
      .from('rank_costal_city')
      .select(
        `
        id,
        rank,
        region_id,
        strength_indexes,
        total_score,
        year,
        region:regions (
          *,
          province:provinces (
            *
          ),
          klaci:klaci_codes (
            *
          )
        )
      `,
      )
      .eq('year', targetYear)
      .order('rank', { ascending: true })
      .limit(limit);

    if (error) {
      throw new Error(`Failed to fetch costal city ranks: ${error.message}`);
    }

    const enrichedData = await Promise.all(
      data.map(async (item) => {
        let strengthIndexesDetails = [];
        if (item.strength_indexes && item.strength_indexes.length > 0) {
          const { data: keyIndexesData, error: keyIndexesError } =
            await this.supabaseService
              .getClient()
              .from('key_indexes')
              .select(
                `
              id,
              code,
              name,
              category,
              description,
              source,
              unit,
              name_eng
            `,
              )
              .in('code', item.strength_indexes);

          if (!keyIndexesError && keyIndexesData) {
            strengthIndexesDetails = item.strength_indexes
              .map((code) => keyIndexesData.find((item) => item.code === code))
              .filter(Boolean);
          }
        }

        const { strength_indexes, rank, ...rest } = item;
        return {
          ...rest,
          total_rank: rank,
          strength_indexes_details: strengthIndexesDetails,
        };
      }),
    );

    return enrichedData;
  }

  async getMegaRegionRanks(limit: number = 100, year?: number, type?: string) {
    const currentYear = new Date().getFullYear();
    const targetYear = year || currentYear;

    let query = this.supabaseService
      .getClient()
      .from('rank_mega_region')
      .select(
        `
        id,
        type,
        rank,
        region_id,
        strength_indexes,
        total_score,
        year,
        region:regions (
          *,
          province:provinces (
            *
          ),
          klaci:klaci_codes (
            *
          )
        )
      `,
      )
      .eq('year', targetYear);

    // type 필터링 추가 (선택적)
    if (type) {
      query = query.eq('type', type);
    }

    const { data, error } = await query
      .order('rank', { ascending: true })
      .limit(limit);

    if (error) {
      throw new Error(`Failed to fetch mega region ranks: ${error.message}`);
    }

    const enrichedData = await Promise.all(
      data.map(async (item) => {
        let strengthIndexesDetails = [];
        if (item.strength_indexes && item.strength_indexes.length > 0) {
          const { data: keyIndexesData, error: keyIndexesError } =
            await this.supabaseService
              .getClient()
              .from('key_indexes')
              .select(
                `
              id,
              code,
              name,
              category,
              description,
              source,
              unit,
              name_eng
            `,
              )
              .in('code', item.strength_indexes);

          if (!keyIndexesError && keyIndexesData) {
            strengthIndexesDetails = item.strength_indexes
              .map((code) => keyIndexesData.find((item) => item.code === code))
              .filter(Boolean);
          }
        }

        const { strength_indexes, rank, ...rest } = item;
        return {
          ...rest,
          total_rank: rank,
          strength_indexes_details: strengthIndexesDetails,
        };
      }),
    );

    return enrichedData;
  }

  async getKlaciCodeRanks(limit: number = 100, year?: number, type?: string) {
    const currentYear = new Date().getFullYear();
    const targetYear = year || currentYear;

    // 1. 먼저 rank_klaci_type 테이블에서 기본 데이터 조회
    let query = this.supabaseService
      .getClient()
      .from('rank_klaci_type')
      .select('*')
      .eq('year', targetYear);

    // type 필터링 추가 (선택적)
    if (type) {
      query = query.eq('type', type);
    }

    const { data: rankData, error: rankError } = await query
      .order('rank', { ascending: true })
      .limit(limit);

    if (rankError) {
      throw new Error(`Failed to fetch KLACI code ranks: ${rankError.message}`);
    }

    if (!rankData || rankData.length === 0) {
      return [];
    }

    // 2. 각 랭킹 항목에 대해 매칭되는 region 정보 조회
    const enrichedData = await Promise.all(
      rankData.map(async (item) => {
        let regionData = null;

        // region_id가 있으면 직접 조회
        if (item.region_id) {
          const { data: directRegion, error: directError } =
            await this.supabaseService
              .getClient()
              .from('regions')
              .select(
                `
              *,
              province:provinces (
                *
              ),
              klaci:klaci_codes (
                *
              )
            `,
              )
              .eq('id', item.region_id)
              .single();

          if (!directError && directRegion) {
            regionData = directRegion;
          }
        }

        // region_id로 찾지 못했거나 없으면 klaci_code로 매칭 시도
        if (!regionData && item.type) {
          const { data: matchedRegions, error: matchError } =
            await this.supabaseService
              .getClient()
              .from('regions')
              .select(
                `
              *,
              province:provinces (
                *
              ),
              klaci:klaci_codes (
                *
              )
            `,
              )
              .ilike('klaci_code', item.type); // 대소문자 무시 매칭

          if (!matchError && matchedRegions && matchedRegions.length > 0) {
            // 첫 번째 매칭되는 region 사용 (필요시 추가 로직으로 최적 매칭 선택)
            regionData = matchedRegions[0];
          }
        }

        if (!regionData) {
          // 에러 로깅 제거 - 프로덕션에서는 silent fail
          return null;
        }

        // strength_indexes 상세 정보 조회
        let strengthIndexesDetails = [];
        if (item.strength_indexes && item.strength_indexes.length > 0) {
          const { data: keyIndexesData, error: keyIndexesError } =
            await this.supabaseService
              .getClient()
              .from('key_indexes')
              .select(
                `
              id,
              code,
              name,
              category,
              description,
              source,
              unit,
              name_eng
            `,
              )
              .in('code', item.strength_indexes);

          if (!keyIndexesError && keyIndexesData) {
            strengthIndexesDetails = item.strength_indexes
              .map((code) =>
                keyIndexesData.find((keyItem) => keyItem.code === code),
              )
              .filter(Boolean);
          }
        }

        const { strength_indexes, rank, ...rest } = item;
        return {
          ...rest,
          total_rank: rank,
          region: regionData,
          strength_indexes_details: strengthIndexesDetails,
        };
      }),
    );

    // null 값 제거 (region을 찾지 못한 경우)
    return enrichedData.filter(Boolean);
  }

  async getProvinceRanks(
    limit: number = 1000,
    year?: number,
    provinceId?: number,
  ) {
    const currentYear = new Date().getFullYear();
    const targetYear = year || currentYear;

    // 직접 조인 방식으로 변경
    const { data, error } = await this.supabaseService
      .getClient()
      .from('rank_province')
      .select(
        `
        id,
        rank,
        region_id,
        strength_indexes,
        total_score,
        year,
        type,
        region:regions (
          *,
          province:provinces (
            *
          ),
          klaci:klaci_codes (
            *
          )
        )
      `,
      )
      .eq('year', targetYear)
      .order('rank', { ascending: true })
      .limit(limit);

    if (error) {
      throw new Error(`Failed to fetch province ranks: ${error.message}`);
    }

    if (!data || data.length === 0) {
      return [];
    }

    // strength_indexes 처리
    const enrichedData = await Promise.all(
      data.map(async (item) => {
        let strengthIndexesDetails = [];

        if (item.strength_indexes && Array.isArray(item.strength_indexes)) {
          const { data: keyIndexes, error: keyIndexError } =
            await this.supabaseService
              .getClient()
              .from('key_indexes')
              .select(
                `
                id,
                code,
                name,
                category,
                description,
                source,
                unit,
                name_eng
              `,
              )
              .in('code', item.strength_indexes);

          if (!keyIndexError && keyIndexes) {
            strengthIndexesDetails = keyIndexes;
          }
        }

        const { strength_indexes, rank, ...rest } = item;
        return {
          ...rest,
          total_rank: rank,
          strength_indexes_details: strengthIndexesDetails,
        };
      }),
    );

    // provinceId 필터링
    if (provinceId) {
      return enrichedData.filter(
        (item) => (item.region as any)?.province_id === provinceId,
      );
    }

    return enrichedData;
  }

  async getCategoryRanks(
    limit: number = 1000,
    year?: number,
    categoryId?: number,
  ) {
    const currentYear = new Date().getFullYear();
    const targetYear = year || currentYear;

    // 직접 조인 방식으로 구현
    let query = this.supabaseService
      .getClient()
      .from('rank_category')
      .select(
        `
        id,
        type,
        rank,
        region_id,
        strength_indexes,
        total_score,
        year,
        region:regions (
          *,
          province:provinces (
            *
          ),
          klaci:klaci_codes (
            *
          )
        )
      `,
      )
      .eq('year', targetYear);

    // categoryId 필터링 추가 (선택적)
    if (categoryId) {
      query = query.eq('category_id', categoryId);
    }

    const { data, error } = await query
      .order('rank', { ascending: true })
      .limit(limit);

    if (error) {
      throw new Error(`Failed to fetch category ranks: ${error.message}`);
    }

    if (!data || data.length === 0) {
      return [];
    }

    // strength_indexes 처리
    const enrichedData = await Promise.all(
      data.map(async (item) => {
        let strengthIndexesDetails = [];

        if (item.strength_indexes && Array.isArray(item.strength_indexes)) {
          const { data: keyIndexes, error: keyIndexError } =
            await this.supabaseService
              .getClient()
              .from('key_indexes')
              .select(
                `
                id,
                code,
                name,
                category,
                description,
                source,
                unit,
                name_eng
              `,
              )
              .in('code', item.strength_indexes);

          if (!keyIndexError && keyIndexes) {
            strengthIndexesDetails = keyIndexes;
          }
        }

        const { strength_indexes, rank, ...rest } = item;
        return {
          ...rest,
          total_rank: rank,
          strength_indexes_details: strengthIndexesDetails,
        };
      }),
    );

    return enrichedData;
  }

  async getDistrictTypeRanks() {
    // 직접 조인 방식으로 구현
    const { data, error } = await this.supabaseService
      .getClient()
      .from('rank_district_type')
      .select(
        `
        id,
        type,
        rank,
        region_id,
        strength_indexes,
        total_score,
        year,
        region:regions (
          *,
          province:provinces (
            *
          ),
          klaci:klaci_codes (
            *
          )
        )
      `,
      )
      .order('rank', { ascending: true });

    if (error) {
      throw new Error(`Failed to fetch district type ranks: ${error.message}`);
    }

    if (!data || data.length === 0) {
      return [];
    }

    // strength_indexes 처리
    const enrichedData = await Promise.all(
      data.map(async (item) => {
        let strengthIndexesDetails = [];

        if (item.strength_indexes && Array.isArray(item.strength_indexes)) {
          const { data: keyIndexes, error: keyIndexError } =
            await this.supabaseService
              .getClient()
              .from('key_indexes')
              .select(
                `
                id,
                code,
                name,
                category,
                description,
                source,
                unit,
                name_eng
              `,
              )
              .in('code', item.strength_indexes);

          if (!keyIndexError && keyIndexes) {
            strengthIndexesDetails = keyIndexes;
          }
        }

        const { strength_indexes, rank, ...rest } = item;
        return {
          ...rest,
          total_rank: rank,
          strength_indexes_details: strengthIndexesDetails,
        };
      }),
    );

    return enrichedData;
  }

  async getTopRegionsForCard(limit: number = 10) {
    // 직접 조인 방식으로 구현
    interface ProvinceData {
      name: string;
    }

    interface KlaciCodeData {
      code: string;
      type: string;
      nickname: string;
    }

    interface RegionResponse {
      id: number;
      name: string;
      growth_score: number;
      economy_score: number;
      living_score: number;
      safety_score: number;
      total_score: number;
      total_rank: number;
      klaci_codes: KlaciCodeData; // 배열이 아닌 단일 객체
      province: ProvinceData; // 배열이 아닌 단일 객체
    }

    const { data } = await this.supabaseService
      .getClient()
      .from('regions')
      .select(
        `
        id,
        name,
        growth_score,
        economy_score,
        living_score,
        safety_score,
        total_score,
        total_rank,
        klaci_code,
        province:provinces (
          name
        ),
        klaci_codes:klaci_codes (
          code,
          type,
          nickname
        )
      `,
      )
      .order('total_rank', { ascending: true })
      .limit(limit);

    // 타입 단언을 사용하여 실제 런타임 구조에 맞게 변환
    const typedData = data as unknown as RegionResponse[];

    console.log('data', typedData);

    const formattedData: TopRegionCardDto[] = typedData.map(
      (item: RegionResponse) => {
        return {
          regionId: item.id,
          regionName: item.name,
          provinceName: item.province.name, // [0] 제거
          rank: item.total_rank,
          totalScore: item.total_score,
          klaciCode: item.klaci_codes?.code || '', // [0] 제거
          klaciType: item.klaci_codes?.type || '', // [0] 제거
          klaciNickname: item.klaci_codes?.nickname || '', // [0] 제거
          categoryScore: {
            growth_score: item.growth_score,
            economy_score: item.economy_score,
            living_score: item.living_score,
            safety_score: item.safety_score,
          },
        };
      },
    );

    return formattedData;
  }
}
