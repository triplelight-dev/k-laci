import { apiClient } from '../client';
import { API_ENDPOINTS } from '../constants/endpoints';
import {
    GetTotalRegionRanksParams,
    GetTotalRegionRanksResponse
} from '../types/stats.types';

export class StatsService {
  /**
   * 특정 연도의 TOP N개 지역 순위 조회
   */
  static async getTotalRegionRanks(
    params: GetTotalRegionRanksParams = {}
  ): Promise<GetTotalRegionRanksResponse> {
    const { limit, year } = params;
    
    const queryParams = new URLSearchParams();
    if (limit !== undefined) {
      queryParams.append('limit', limit.toString());
    }
    if (year !== undefined) {
      queryParams.append('year', year.toString());
    }

    const url = `${API_ENDPOINTS.STATS.TOTAL_RANKS}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    
    const response = await apiClient.get(url);
    return response.data;
  }
} 