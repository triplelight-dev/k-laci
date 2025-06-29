import { useCallback, useState } from 'react';
import { DataService, RegionKeyIndexRank } from '../services/data.service';
import { ApiError } from '../types/api.types';

export const useKeyIndexRanks = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [keyIndexRanks, setKeyIndexRanks] = useState<RegionKeyIndexRank[]>([]);

  const getRegionKeyIndexRanks = useCallback(async (regionId: number) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await DataService.getRegionKeyIndexRanks(regionId);
      if (response.success) {
        setKeyIndexRanks(response.data);
        return response.data;
      }
    } catch (err: any) {
      const apiError: ApiError = {
        message: err.response?.data?.message || '키 인덱스 순위 데이터를 불러오는데 실패했습니다.',
        status: err.response?.status || 500,
      };
      setError(apiError);
      throw apiError;
    } finally {
      setLoading(false);
    }
  }, []);

  const getRegionKeyIndexRanksByYear = useCallback(async (regionId: number, year: number) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await DataService.getRegionKeyIndexRanksByYear(regionId, year);
      if (response.success) {
        setKeyIndexRanks(response.data);
        return response.data;
      }
    } catch (err: any) {
      const apiError: ApiError = {
        message: err.response?.data?.message || '키 인덱스 순위 데이터를 불러오는데 실패했습니다.',
        status: err.response?.status || 500,
      };
      setError(apiError);
      throw apiError;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    keyIndexRanks,
    loading,
    error,
    getRegionKeyIndexRanks,
    getRegionKeyIndexRanksByYear,
  };
}; 