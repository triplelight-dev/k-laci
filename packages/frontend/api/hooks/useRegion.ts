import { DataService } from '@/api/services';
import { useCallback, useState } from 'react';
import { ApiError } from '../types/api.types';

export const useRegion = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const getRegion = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await DataService.getRegion(id);
      if (response.success) {
        return response.data;
      }
      throw new Error(response.message || '지역 정보를 불러오는데 실패했습니다.');
    } catch (err: any) {
      const apiError: ApiError = {
        message: err.response?.data?.message || err.message || '지역 정보를 불러오는데 실패했습니다.',
        status: err.response?.status || 500,
      };
      setError(apiError);
      throw apiError;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    getRegion,
  };
}; 