import { apiClient } from '../client';
import { API_ENDPOINTS } from '../constants/endpoints';
import {
  GetKlaciCodeRanksParams,
  GetMegaRegionRanksParams,
  GetRankingParams,
  GetRankingResponse,
  // 기존 호환성을 위한 import
  GetTotalRegionRanksParams,
  GetTotalRegionRanksResponse
} from '../types/stats.types';
import { GetProvinceRanksDto } from './dto/get-province-ranks.dto';

export class StatsService {
  /**
   * 공통 ranking API 호출 메서드
   */
  private static async getRanking(
    endpoint: string,
    params: GetRankingParams | GetMegaRegionRanksParams | GetKlaciCodeRanksParams = {}
  ): Promise<GetRankingResponse> {
    const { limit, year } = params;
    const type = 'type' in params ? params.type : undefined;
    
    const queryParams = new URLSearchParams();
    if (limit !== undefined) {
      queryParams.append('limit', limit.toString());
    }
    if (year !== undefined) {
      queryParams.append('year', year.toString());
    }
    if (type !== undefined) {
      queryParams.append('type', type);
    }

    const url = `${endpoint}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    
    console.log('API Call URL:', url);
    
    const response = await apiClient.get(url);
    
    console.log('API Response:', response.data);
    
    return {
      data: response.data.data || []
    };
  }

  /**
   * 전체 지역 순위 조회
   */
  static async getTotalRegionRanks(
    params: GetTotalRegionRanksParams = {}
  ): Promise<GetTotalRegionRanksResponse> {
    return this.getRanking(API_ENDPOINTS.STATS.TOTAL_RANKS, params);
  }

  /**
   * 주요 도시 순위 조회
   */
  static async getMajorProvincesRanks(
    params: GetRankingParams = {}
  ): Promise<GetRankingResponse> {
    console.log('getMajorProvincesRanks called with:', params);
    return this.getRanking(API_ENDPOINTS.STATS.MAJOR_PROVINCES, params);
  }

  /**
   * 선택된 도시 순위 조회
   */
  static async getSelectedProvincesRanks(
    params: GetRankingParams = {}
  ): Promise<GetRankingResponse> {
    return this.getRanking(API_ENDPOINTS.STATS.SELECTED_PROVINCES, params);
  }

  /**
   * 경제자유구역 순위 조회
   */
  static async getFreeEconomyZoneRanks(
    params: GetRankingParams = {}
  ): Promise<GetRankingResponse> {
    return this.getRanking(API_ENDPOINTS.STATS.FREE_ECONOMY_ZONE, params);
  }

  /**
   * 성장촉진지역 순위 조회
   */
  static async getGrowthBoostZoneRanks(
    params: GetRankingParams = {}
  ): Promise<GetRankingResponse> {
    return this.getRanking(API_ENDPOINTS.STATS.GROWTH_BOOST_ZONE, params);
  }

  /**
   * 국가산업단지 순위 조회
   */
  static async getNationalIndustrialZoneRanks(
    params: GetRankingParams = {}
  ): Promise<GetRankingResponse> {
    return this.getRanking(API_ENDPOINTS.STATS.NATIONAL_INDUSTRIAL_ZONE, params);
  }

  /**
   * 해안도시 순위 조회
   */
  static async getCostalCityRanks(
    params: GetRankingParams = {}
  ): Promise<GetRankingResponse> {
    return this.getRanking(API_ENDPOINTS.STATS.COSTAL_CITY, params);
  }

  /**
   * 메가 지역 순위 조회
   */
  static async getMegaRegionRanks(
    params: GetMegaRegionRanksParams = {}
  ): Promise<GetRankingResponse> {
    return this.getRanking(API_ENDPOINTS.STATS.MEGA_REGION, params);
  }

  /**
   * KLACI 코드 순위 조회
   */
  static async getKlaciCodeRanks(
    params: GetKlaciCodeRanksParams = {}
  ): Promise<GetRankingResponse> {
    return this.getRanking(API_ENDPOINTS.STATS.KLACI_CODE, params);
  }

  async getProvinceRanks(params: GetProvinceRanksDto) {
    const response = await apiClient.get<any[]>(
      API_ENDPOINTS.STATS.PROVINCE_RANK,
      {
        params,
      },
    );
    return response.data;
  }
}

// 기존 호환성을 위한 인스턴스 export
export const statsService = new StatsService(); 