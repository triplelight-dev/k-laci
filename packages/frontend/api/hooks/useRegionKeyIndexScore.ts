import { useCallback, useState } from 'react';
import { DataService, RegionKeyIndexScoreResponse } from '../services/data.service';
import { ApiError } from '../types/api.types';

export const useRegionKeyIndexScore = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [data, setData] = useState<RegionKeyIndexScoreResponse | null>(null);

  const getRegionKeyIndexScore = useCallback(
    async (regionId: number, keyIndexId: number) => {
      setLoading(true);
      setError(null);

      try {
        const response = await DataService.getRegionKeyIndexScore(
          regionId,
          keyIndexId,
        );
        setData(response.data);
        return response.data;
      } catch (err: any) {
        const apiError: ApiError = {
          message:
            err.response?.data?.message ||
            '지역 키 인덱스 점수를 불러오는데 실패했습니다.',
          status: err.response?.status || 500,
        };
        setError(apiError);
        throw apiError;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return {
    data,
    loading,
    error,
    getRegionKeyIndexScore,
  };
}; 