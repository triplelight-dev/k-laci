import { useQuery } from '@tanstack/react-query';
import { dataService, RegionStrengthIndexesWithDetailsResponse } from '../services/data.service';

export const useRegionStrengthIndexes = (regionId: number | null) => {
  return useQuery<RegionStrengthIndexesWithDetailsResponse>({
    queryKey: ['region-strength-indexes', regionId],
    queryFn: async () => {
      const response = await dataService.getRegionStrengthIndexesWithDetails(regionId!);
      return response.data; // ApiResponse에서 data만 반환
    },
    enabled: !!regionId,
    staleTime: 5 * 60 * 1000, // 5분
  });
}; 