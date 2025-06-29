export interface CategoryScore {
  name: string;
  value: number;
  rank: number;
  totalRank: number;
  description?: string;
}

export interface CategoryData {
  title: string;
  color: string;
  currentRank: number;
  description: string;
  scores: CategoryScore[];
}
