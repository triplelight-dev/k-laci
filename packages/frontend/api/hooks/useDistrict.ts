import { useCallback, useState } from 'react';
import { District, DistrictSearchParams, DistrictService } from '../services/district.service';
import { ApiError } from '../types/api.types';

export const useDistrict = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [districts, setDistricts] = useState<District[]>([]);

  const getDistricts = useCallback(async (params?: DistrictSearchParams) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await DistrictService.getDistricts(params);
      if (response.success) {
        setDistricts(response.data.data);
        return response.data;
      }
    } catch (err: any) {
      const apiError: ApiError = {
        message: err.response?.data?.message || '지역 데이터를 불러오는데 실패했습니다.',
        status: err.response?.status || 500,
      };
      setError(apiError);
      throw apiError;
    } finally {
      setLoading(false);
    }
  }, []);

  const searchDistricts = useCallback(async (params: DistrictSearchParams) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await DistrictService.searchDistricts(params);
      if (response.success) {
        setDistricts(response.data.data);
        return response.data;
      }
    } catch (err: any) {
      const apiError: ApiError = {
        message: err.response?.data?.message || '지역 검색에 실패했습니다.',
        status: err.response?.status || 500,
      };
      setError(apiError);
      throw apiError;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    districts,
    loading,
    error,
    getDistricts,
    searchDistricts,
  };
}; 