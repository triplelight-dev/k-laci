export interface CategoryRank {
  name: string;
  value: number;
  rank: number;
  description?: string;
}

export interface CategoryData {
  title: string;
  color: string;
  currentRank: number;
  description: string;
  rank: CategoryRank[];
}
