import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class StatsService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.getOrThrow<string>('SUPABASE_URL');
    const supabaseKey =
      this.configService.getOrThrow<string>('SUPABASE_ANON_KEY');
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async getTotalRegionRanks(limit: number = 100, year?: number) {
    const currentYear = new Date().getFullYear();
    const targetYear = year || currentYear;

    const { data, error } = await this.supabase
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
            await this.supabase
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

    const { data, error } = await this.supabase
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

    if (error) throw error;

    // strength_indexes와 key_indexes 조인 처리
    const enrichedData = await Promise.all(
      data.map(async (item) => {
        let strengthIndexesDetails = [];

        if (item.strength_indexes && item.strength_indexes.length > 0) {
          // strength_indexes 배열의 각 코드에 대해 key_indexes 정보 조회
          const { data: keyIndexesData, error: keyIndexesError } =
            await this.supabase
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

        // rank를 total_rank로 매핑하여 응답 형식을 동일하게 만듦
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
}
