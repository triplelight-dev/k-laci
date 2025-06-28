import { DataService } from '@/api/services';
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

// 특정 지역 정보 가져오기
const fetchRegion = async (regionId: string) => {
  try {
    const response = await DataService.getRegion(regionId);
    console.log('Region details:', response.data);
    // response.data에는 다음 정보가 포함됩니다:
    // - id, name, province_id, district_type, weight_class, klaci_code
    // - growth_score, economy_score, living_score, safety_score
    // - total_score, total_rank
    // - province: { id, name }
    // - klaci: { code, nickname }
  } catch (error) {
    console.error('Failed to fetch region:', error);
  }
}; 