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
    nickname_multiline?: string[] | null;
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
  yearly_avg_score?: number;
  year?: number; // 추가
}

export interface RegionKeyIndexScore {
  id: number;
  region_id: number;
  key_index_id: number;
  year: number;
  score: number;
}

export interface KeyIndexWithDetails {
  id: number;
  code: string;
  name: string;
  category: string;
  description: string;
  source?: string;
  unit?: string;
  name_eng?: string;
  calculation_method?: string; // 추가
  yearly_avg_score?: number; // 추가
  year?: number; // 추가
}

export interface RegionKeyIndexScoreResponse {
  region_key_index_score: RegionKeyIndexScore;
  avg_score: number;
  key_index: KeyIndexWithDetails;
  rank?: number; // 추가
}

export interface RegionStrengthIndexWithDetails {
  id: number;
  region_id: number;
  type: 'strength' | 'weakness';
  rank: number;
  code: string;
  key_index: KeyIndexData;
}

export interface RegionStrengthIndexesWithDetailsResponse {
  strengths: RegionStrengthIndexWithDetails[];
  weaknesses: RegionStrengthIndexWithDetails[];
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

  static async getProvincesWithRegions(): Promise<
    ApiResponse<ProvinceWithRegions[]>
  > {
    const response = await apiClient.get('/data/provinces-with-regions');
    return response.data;
  }

  static async getCategories(): Promise<ApiResponse<Category[]>> {
    const response = await apiClient.get('/data/categories');
    return response.data;
  }

  static async getKeyIndexData(
    indexId: number,
    year?: number,
  ): Promise<ApiResponse<KeyIndexData>> {
    const params = year ? { year } : {};
    const response = await apiClient.get(`/data/key-indexes/${indexId}`, {
      params,
    });
    return response.data;
  }

  static async getAdjacentRegionByRank(
    currentRank: number,
    direction: 'prev' | 'next',
  ): Promise<ApiResponse<RegionWithDetails>> {
    const response = await apiClient.get(
      `/data/regions/adjacent/${currentRank}/${direction}`,
    );
    return response.data;
  }

  static async getSameCodeRegions(
    klaciCode: string,
  ): Promise<ApiResponse<RegionWithDetails[]>> {
    const response = await apiClient.get(
      `/data/regions/same-code/${klaciCode}`,
    );
    return response.data;
  }

  static async getSameCodeRegionsByRegionId(
    regionId: number,
  ): Promise<ApiResponse<RegionWithDetails[]>> {
    const response = await apiClient.get(
      `/data/regions/${regionId}/same-code-regions`,
    );
    return response.data;
  }

  static async getRegionKeyIndexScore(
    regionId: number,
    keyIndexId: number,
  ): Promise<ApiResponse<RegionKeyIndexScoreResponse>> {
    const response = await apiClient.get(
      `/data/regions/${regionId}/key-indexes/${keyIndexId}/score`,
    );
    return response.data;
  }

  static async getRegionStrengthIndexesWithDetails(
    regionId: number,
  ): Promise<ApiResponse<RegionStrengthIndexesWithDetailsResponse>> {
    const response = await apiClient.get(
      `/data/regions/${regionId}/strength-indexes-with-details`,
    );
    return response.data;
  }
}

export const dataService = DataService;
