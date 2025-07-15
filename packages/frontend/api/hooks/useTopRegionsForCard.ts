import { useQuery } from '@tanstack/react-query';
import { StatsService } from '../services/stats.service';
import {
  GetTopRegionsForCardParams,
  GetTopRegionsForCardResponse,
} from '../types/stats.types';

export const useTopRegionsForCard = (
  params: GetTopRegionsForCardParams = {},
) => {
  return useQuery<GetTopRegionsForCardResponse>({
    queryKey: ['topRegionsForCard', params],
    queryFn: () => StatsService.getTopRegionsForCard(params),
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 30, // 30분 (cacheTime에서 gcTime으로 변경)
  });
};
