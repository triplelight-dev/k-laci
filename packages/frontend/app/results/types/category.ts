export interface CategoryScore {
  indicator: string;
  score: number;
  rank: number;
  source: string;
}

export interface CategoryData {
  title: string;
  color: string;
  currentRank: number;
  totalRank: number;
  description: string;
  scores: CategoryScore[];
} 