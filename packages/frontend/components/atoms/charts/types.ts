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
    klaci_code?: string;
  };
}

export interface RadarChartContext {
  center: number; // svgCenterX
  centerY: number; // 가이드 텍스트용 (svgCenterY - 200)
  actualCenterY: number; // 실제 차트 중심점 (svgCenterY)
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
  regionData: any;
  // 가이드 관련 위치 값들 추가
  guide: {
    labelX: number;
    qmarkX: number;
    strongY: number;
    weakY: number;
  };
  // 툴팁 위치 값들 추가
  tooltip: {
    boxX: number;
    textX: number;
    boxY: number;
  };
}

export interface Point {
  x: number;
  y: number;
  angle: number;
} 