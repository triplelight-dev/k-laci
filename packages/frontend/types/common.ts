export interface KeyIndex {
  id: number;
  code: string;
  name: string;
  category?: string;
  description?: string;
  yearly_avg_score?: number;
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

export interface Province {
  id: number;
  name: string;
}

export interface Principle {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
}
