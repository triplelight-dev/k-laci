import { apiClient } from '../client';
import { ApiResponse } from '../types/api.types';

export interface Province {
  id: string;
  name: string;
}

export interface Region {
  id: string;
  name: string;
  provinceId: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export class DataService {
  static async getProvinces(): Promise<ApiResponse<Province[]>> {
    const response = await apiClient.get('/data/provinces');
    return response.data;
  }

  static async getRegions(provinceId?: string): Promise<ApiResponse<Region[]>> {
    const params = provinceId ? { provinceId } : {};
    const response = await apiClient.get('/data/regions', { params });
    return response.data;
  }

  static async getCategories(): Promise<ApiResponse<Category[]>> {
    const response = await apiClient.get('/data/categories');
    return response.data;
  }
} 