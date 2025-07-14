import { useQuery } from '@tanstack/react-query';
import { StatsService } from '../services/stats.service';
import { GetTopRegionsForCardParams } from '../types/stats.types';

export const useTopRegionsForCard = (params: GetTopRegionsForCardParams = {}) => {
  return useQuery({
    queryKey: ['topRegionsForCard', params],
    queryFn: () => StatsService.getTopRegionsForCard(params),
    staleTime: 1000 * 60 * 5, // 5분
    cacheTime: 1000 * 60 * 30, // 30분
  });
}; 