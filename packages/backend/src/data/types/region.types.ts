export interface Province {
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
  district_type: string;
  weight_class: string;
  klaci_code: string;
  growth_score: number;
  economy_score: number;
  living_score: number;
  safety_score: number;
}

export interface RegionWithDetails extends Region {
  province: Province;
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
