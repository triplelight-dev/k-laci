import { DataService } from '@/api/services';
import { useQuery } from '@tanstack/react-query';

export const useRegion = (regionId: string | null) => {
  return useQuery({
    queryKey: ['region', regionId],
    queryFn: async () => {
      if (!regionId) throw new Error('Region ID is required');
      const response = await DataService.getRegion(regionId);
      return response.data;
    },
    enabled: !!regionId, // regionId가 있을 때만 실행
    staleTime: 5 * 60 * 1000, // 5분간 fresh
  });
}; 