export interface CategoryRank {
  name: string;
  value: number;
  rank: number;
  description?: string;
  key_index_id: number;
}

export interface CategoryData {
  title: string;
  color: string;
  currentRank: number;
  description: string;
  rank: CategoryRank[];
}

// CategoryScore 타입 추가
export interface CategoryScore {
  category: string;
  score: number;
  rank: number;
  description?: string;
}
