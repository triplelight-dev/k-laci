export interface DistrictState {
  selectedProvince: string;
  selectedDistrict: string;
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