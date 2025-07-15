import { useQuery } from '@tanstack/react-query';
import { DataService, KeyIndexData } from '../services/data.service';
import { ApiError } from '../types/api.types';

// 기존 인터페이스 유지를 위한 훅
export const useKeyIndexData = () => {
  const getKeyIndexData = async (indexId: number, year?: number) => {
    const response = await DataService.getKeyIndexData(indexId, year);
    return response.data;
  };

  return {
    keyIndexData: null, // 호환성을 위해 유지
    loading: false, // 호환성을 위해 유지
    error: null, // 호환성을 위해 유지
    getKeyIndexData,
  };
};

// 새로운 react-query 기반 훅
export const useKeyIndexDataQuery = (
  indexId: number | null,
  year?: number,
  enabled: boolean = true
) => {
  return useQuery<KeyIndexData, ApiError>({
    queryKey: ['keyIndexData', indexId, year],
    queryFn: async () => {
      if (!indexId) {
        throw new Error('indexId가 필요합니다.');
      }
      const response = await DataService.getKeyIndexData(indexId, year);
      return response.data;
    },
    enabled: enabled && !!indexId,
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
