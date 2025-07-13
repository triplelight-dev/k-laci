import { apiClient } from '../client';
import { API_ENDPOINTS } from '../constants/endpoints';
import {
  GetRankingParams,
  GetRankingResponse,
  // 기존 호환성을 위한 import
  GetTotalRegionRanksParams,
  GetTotalRegionRanksResponse
} from '../types/stats.types';

export class StatsService {
  /**
   * 공통 ranking API 호출 메서드
   */
  private static async getRanking(
    endpoint: string,
    params: GetRankingParams = {}
  ): Promise<GetRankingResponse> {
    const { limit, year } = params;
    
    const queryParams = new URLSearchParams();
    if (limit !== undefined) {
      queryParams.append('limit', limit.toString());
    }
    if (year !== undefined) {
      queryParams.append('year', year.toString());
    }

    const url = `${endpoint}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    
    console.log('API Call URL:', url); // 디버깅용 로그
    
    const response = await apiClient.get(url);
    
    console.log('API Response:', response.data); // 디버깅용 로그
    
    return response.data;
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
    console.log('getMajorProvincesRanks called with:', params); // 디버깅용 로그
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
   * 연안도시 순위 조회
   */
  static async getCostalCityRanks(
    params: GetRankingParams = {}
  ): Promise<GetRankingResponse> {
    return this.getRanking(API_ENDPOINTS.STATS.COSTAL_CITY, params);
  }
} 