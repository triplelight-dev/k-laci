export type RadarChartData = number[]; // [0~100] 값 8개

export interface RadarChartProps {
  data: number[];
  isJewel?: boolean;
  size?: number;
  imageUrl?: string;
  regionData?: {
    growth_score?: number;
    economy_score?: number;
    living_score?: number;
    safety_score?: number;
  };
}

export interface RadarChartContext {
  center: number;
  radius: number;
  size: number;
  jewelSize: number;
  isJewel: boolean;
  fontSize: {
    category: number;
    value: number;
    tooltip: number;
    area: number;
  };
  labelOffset: {
    category: number;
    value: number;
  };
  categories: string[];
  colorMap: Record<string, string>;
  points: Array<{
    x: number;
    y: number;
    angle: number;
  }>;
  vals: number[];
  fixedColorPairs: [string, string][];
  regionData?: {
    growth_score?: number;
    economy_score?: number;
    living_score?: number;
    safety_score?: number;
  };
}

export interface Point {
  x: number;
  y: number;
  angle: number;
} 