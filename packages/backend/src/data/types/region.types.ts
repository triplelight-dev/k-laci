export interface Province {
  id: number;
  name: string;
}

export interface WeightClass {
  id: number;
  name: string;
}

export interface KlaciCode {
  code: string;
  nickname: string;
}

export interface Region {
  id: number;
  name: string;
  province_id: number;
  weight_class_id: number;
  klaci_code: string;
  growth_score: number;
  economy_score: number;
  living_score: number;
  safety_score: number;
}

export interface RegionWithDetails extends Region {
  province: Province;
  weight_class: WeightClass;
  klaci: KlaciCode;
}

export interface RegionsResponse {
  data: RegionWithDetails[];
  meta: {
    total: number;
    limit: number;
    offset: number;
  };
} 