export interface SimilarRegionData {
  id: string | number;
  name: string;
  province: string;
  similarity: number;
  rank: number;
  score: number;
  klaciCode?: string;
  klaciType?: string;
  klaciNickname?: string;
  radarData?: number[];
  [key: string]: any;
}