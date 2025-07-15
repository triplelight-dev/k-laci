export const MEGA_REGION_TYPES = {
  SOUTHEAST: '동남권',
  JEONBUK: '전북특별자치도',
  CENTRAL: '중부권',
  DAEGYEONG: '대경권',
  JEJU: '제주특별자치도',
  SOUTHWEST: '서남권',
  GANGWON: '강원특별자치도',
  CAPITAL: '수도권',
} as const;

export type MegaRegionTypeKey = keyof typeof MEGA_REGION_TYPES;
export type MegaRegionTypeValue = typeof MEGA_REGION_TYPES[MegaRegionTypeKey];

// 드롭다운 등에서 사용할 수 있는 배열
export const MEGA_REGION_TYPE_OPTIONS = Object.entries(MEGA_REGION_TYPES).map(
  ([key, value]) => ({
    key,
    value,
    label: value,
  })
); 