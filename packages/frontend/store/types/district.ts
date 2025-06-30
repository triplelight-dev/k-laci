export interface Province {
  id: number;
  name: string;
}

export interface KeyIndex {
  id: number;
  code: string;
  name: string;
  category?: string;
  description?: string;
}

export interface RegionKeyIndexRank {
  id: number;
  region_id: number;
  key_index_id: number;
  rank: number;
  year: number;
  key_index: KeyIndex;
}

export interface CategoryKeyIndexRank {
  key_index_id: number;
  name: string;
  rank: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface RegionCategoryRank {
  id: number;
  region_id: number;
  category_id: number;
  rank: number;
  year: number;
  category: Category;
}

export interface Region {
  id: number;
  province_id: number;
  name: string;
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

export interface RegionWithDetails {
  id: number;
  province_id: number;
  name: string;
  district_type: string;
  weight_class: string;
  klaci_code: string;
  growth_score: number;
  economy_score: number;
  living_score: number;
  safety_score: number;
  total_score: number;
  total_rank: number;
  province: Province;
  klaci: {
    code: string;
    nickname: string;
    type?: string;
    trait?: string[] | null;
    opportunity?: string[] | null;
    strategy?: string[] | null;
    summary?: string | null;
  };
  key_index_ranks?: {
    top: RegionKeyIndexRank[];
    bottom: RegionKeyIndexRank[];
    growth_category_ranks: CategoryKeyIndexRank[];
    economy_category_ranks: CategoryKeyIndexRank[];
    living_category_ranks: CategoryKeyIndexRank[];
    safety_category_ranks: CategoryKeyIndexRank[];
  };
  category_ranks?: RegionCategoryRank[];
}

export interface DistrictState {
  selectedProvince: Province | null;
  selectedDistrict: Region | null;
  selectedRegion: RegionWithDetails | null;
  regionLoading: boolean;
}

export interface DistrictSlice {
  district: DistrictState;
  provinces: Province[];
  regions: Region[];
  setSelectedProvince: (provinceId: number | null) => void;
  setSelectedDistrict: (districtId: number | null) => void;
  setSelectedRegion: (region: RegionWithDetails | null) => void;
  setRegionLoading: (loading: boolean) => void;
  clearDistrictSelection: () => void;
  getProvinceById: (id: number) => Province | null;
  getRegionById: (id: number) => Region | null;
  getRegionsByProvinceId: (provinceId: number) => Region[];
}

export interface ProvinceOption {
  value: string;
  label: string;
}

export interface DistrictOption {
  value: string;
  label: string;
  id: number;
  province_id: number;
  name: string;
  district_type: string;
  weight_class: string;
  klaci_code: string;
  growth_score: number;
  economy_score: number;
  living_score: number;
  safety_score: number;
} 