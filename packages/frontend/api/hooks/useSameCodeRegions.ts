import { DataService } from '@/api/services';
import { useCallback, useState } from 'react';
import { ApiError } from '../types/api.types';

export const useSameCodeRegions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const getSameCodeRegionsByRegionId = useCallback(async (regionId: number) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await DataService.getSameCodeRegionsByRegionId(regionId);
      if (response.success) {
        return response.data;
      }
      throw new Error(response.message || '동일한 KLACI 코드를 가진 지역들을 불러오는데 실패했습니다.');
    } catch (err: any) {
      const apiError: ApiError = {
        message: err.response?.data?.message || err.message || '동일한 KLACI 코드를 가진 지역들을 불러오는데 실패했습니다.',
        status: err.response?.status || 500,
      };
      setError(apiError);
      throw apiError;
    } finally {
      setLoading(false);
    }
  }, []);

  const getSameCodeRegions = useCallback(async (klaciCode: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await DataService.getSameCodeRegions(klaciCode);
      if (response.success) {
        return response.data;
      }
      throw new Error(response.message || '동일한 KLACI 코드를 가진 지역들을 불러오는데 실패했습니다.');
    } catch (err: any) {
      const apiError: ApiError = {
        message: err.response?.data?.message || err.message || '동일한 KLACI 코드를 가진 지역들을 불러오는데 실패했습니다.',
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
    getSameCodeRegionsByRegionId,
    getSameCodeRegions,
  };
}; 