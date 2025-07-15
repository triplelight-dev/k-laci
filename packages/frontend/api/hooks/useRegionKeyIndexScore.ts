import { useQuery } from '@tanstack/react-query';
import { DataService, RegionKeyIndexScoreResponse } from '../services/data.service';
import { ApiError } from '../types/api.types';

// 기존 인터페이스 유지를 위한 훅
export const useRegionKeyIndexScore = () => {
  const getRegionKeyIndexScore = async (regionId: number, keyIndexId: number) => {
    const response = await DataService.getRegionKeyIndexScore(regionId, keyIndexId);
    return response.data;
  };

  return {
    data: null, // 호환성을 위해 유지
    loading: false, // 호환성을 위해 유지
    error: null, // 호환성을 위해 유지
    getRegionKeyIndexScore,
  };
};

// 새로운 react-query 기반 훅
export const useRegionKeyIndexScoreQuery = (
  regionId: number | null,
  keyIndexId: number | null,
  enabled: boolean = true
) => {
  return useQuery<RegionKeyIndexScoreResponse, ApiError>({
    queryKey: ['regionKeyIndexScore', regionId, keyIndexId],
    queryFn: async () => {
      if (!regionId || !keyIndexId) {
        throw new Error('regionId와 keyIndexId가 필요합니다.');
      }
      const response = await DataService.getRegionKeyIndexScore(regionId, keyIndexId);
      return response.data;
    },
    enabled: enabled && !!regionId && !!keyIndexId,
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
    refetchOnWindowFocus: false,
    retry: 1,
  });
}; 