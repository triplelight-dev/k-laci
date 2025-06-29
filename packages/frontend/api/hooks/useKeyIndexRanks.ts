import { useCallback, useState } from 'react';
import { ApiError } from '../types/api.types';

// RegionKeyIndexRank 타입을 여기서 정의하거나 import
export interface RegionKeyIndexRank {
  id: number;
  region_id: number;
  key_index_id: number;
  rank: number;
  year: number;
  key_index: {
    id: number;
    code: string;
    name: string;
    category?: string;
  };
}

export const useKeyIndexRanks = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [keyIndexRanks, setKeyIndexRanks] = useState<RegionKeyIndexRank[]>([]);

  const getRegionKeyIndexRanks = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // 임시로 빈 배열 반환 (실제 API가 구현되지 않았으므로)
      const mockData: RegionKeyIndexRank[] = [];
      setKeyIndexRanks(mockData);
      return mockData;
    } catch (err: any) {
      const apiError: ApiError = {
        message:
          err.response?.data?.message ||
          '키 인덱스 순위 데이터를 불러오는데 실패했습니다.',
        status: err.response?.status || 500,
      };
      setError(apiError);
      throw apiError;
    } finally {
      setLoading(false);
    }
  }, []);

  const getRegionKeyIndexRanksByYear = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // 임시로 빈 배열 반환 (실제 API가 구현되지 않았으므로)
      const mockData: RegionKeyIndexRank[] = [];
      setKeyIndexRanks(mockData);
      return mockData;
    } catch (err: any) {
      const apiError: ApiError = {
        message:
          err.response?.data?.message ||
          '키 인덱스 순위 데이터를 불러오는데 실패했습니다.',
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
