import { DataService } from '@/api/services';
import { useQuery } from '@tanstack/react-query';

export const useProvincesWithRegions = () => {
  return useQuery({
    queryKey: ['provinces-with-regions'],
    queryFn: async () => {
      const response = await DataService.getProvincesWithRegions();
      return response.data;
    },
    staleTime: 10 * 60 * 1000, // 10분간 fresh
  });
}; 