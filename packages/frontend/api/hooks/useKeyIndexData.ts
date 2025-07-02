import { useCallback, useState } from 'react';
import { DataService, KeyIndexData } from '../services/data.service';
import { ApiError } from '../types/api.types';

export const useKeyIndexData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [keyIndexData, setKeyIndexData] = useState<KeyIndexData | null>(null);

  const getKeyIndexData = useCallback(async (indexId: number, year?: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await DataService.getKeyIndexData(indexId, year);
      setKeyIndexData(response.data);
      return response.data;
    } catch (err: any) {
      const apiError: ApiError = {
        message:
          err.response?.data?.message ||
          '키 인덱스 데이터를 불러오는데 실패했습니다.',
        status: err.response?.status || 500,
      };
      setError(apiError);
      throw apiError;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    keyIndexData,
    loading,
    error,
    getKeyIndexData,
  };
}; 