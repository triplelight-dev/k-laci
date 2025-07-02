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
  district_type: string;
  weight_class: string;
  klaci_code: string;
  growth_score: number;
  economy_score: number;
  living_score: number;
  safety_score: number;
  total_score: number;
  total_rank: number;
}

export interface RegionCategoryRank {
  id: number;
  region_id: number;
  category_id: number;
  rank: number;
  year: number;
  category: Category;
}

export interface RegionWithDetails extends Region {
  province: Province;
  klaci: {
    code: string;
    nickname: string;
    type?: string;
    trait?: string[] | null;
    opportunity?: string[] | null;
    strategy?: string[] | null;
    summary?: string[] | null;
  };
  category_ranks?: RegionCategoryRank[];
}

export interface ProvinceWithRegions {
  id: number;
  name: string;
  regions: Region[];
}

export interface Category {
  id: number;
  name: string;
}

export interface Key {
  // Add appropriate properties for the Key type
}

export interface KeyIndexData {
  id: number;
  code: string;
  name: string;
  category: string;
  description: string;
  unit?: string;
  source?: string;
  calculation_method?: string;
  created_at?: string;
  updated_at?: string;
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

  static async getRegion(id: string): Promise<ApiResponse<RegionWithDetails>> {
    const response = await apiClient.get(`/data/regions/${id}`);
    return response.data;
  }

  static async getProvincesWithRegions(): Promise<ApiResponse<ProvinceWithRegions[]>> {
    const response = await apiClient.get('/data/provinces-with-regions');
    return response.data;
  }

  static async getCategories(): Promise<ApiResponse<Category[]>> {
    const response = await apiClient.get('/data/categories');
    return response.data;
  }

  static async getKeyIndexData(indexId: number): Promise<ApiResponse<KeyIndexData>> {
    const response = await apiClient.get(`/data/key-indexes/${indexId}`);
    return response.data;
  }
} 