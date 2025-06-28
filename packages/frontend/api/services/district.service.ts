import { apiClient } from '../client';
import { ApiResponse, PaginatedResponse, PaginationParams } from '../types/api.types';

export interface District {
  id: string;
  name: string;
  provinceId: string;
  regionId: string;
  // 기존 타입과 호환되도록 필요한 필드들 추가
}

export interface DistrictSearchParams extends PaginationParams {
  provinceId?: string;
  regionId?: string;
  keyword?: string;
}

export class DistrictService {
  static async getDistricts(params?: DistrictSearchParams): Promise<ApiResponse<PaginatedResponse<District>>> {
    const response = await apiClient.get('/districts', { params });
    return response.data;
  }

  static async getDistrictById(id: string): Promise<ApiResponse<District>> {
    const response = await apiClient.get(`/districts/${id}`);
    return response.data;
  }

  static async searchDistricts(params: DistrictSearchParams): Promise<ApiResponse<PaginatedResponse<District>>> {
    const response = await apiClient.get('/districts/search', { params });
    return response.data;
  }
} 