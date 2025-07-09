import { useQuery } from '@tanstack/react-query';
import { StatsService } from '../services/stats.service';
import { GetTotalRegionRanksParams } from '../types/stats.types';

export const useTotalRegionRanks = (params: GetTotalRegionRanksParams = {}) => {
  return useQuery({
    queryKey: ['totalRegionRanks', params],
    queryFn: () => StatsService.getTotalRegionRanks(params),
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });
}; 