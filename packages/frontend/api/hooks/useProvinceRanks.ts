import { statsService } from '@/api/services/stats.service';
import { useQuery } from '@tanstack/react-query';

export interface UseProvinceRanksParams {
  limit?: number;
  year?: number;
  provinceId?: number;
}

export const useProvinceRanks = (params: UseProvinceRanksParams) => {
  return useQuery({
    queryKey: ['province-ranks', params],
    queryFn: () => statsService.getProvinceRanks(params),
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });
}; 