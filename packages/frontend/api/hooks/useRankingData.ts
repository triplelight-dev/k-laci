import { useQuery } from '@tanstack/react-query';
import { StatsService } from '../services/stats.service';
import { GetRankingParams } from '../types/stats.types';

// 공통 훅 생성 함수
const createRankingHook = (
  queryKey: string,
  queryFn: (params: GetRankingParams) => Promise<any>
) => {
  return (params: GetRankingParams = {}) => {
    return useQuery({
      queryKey: [queryKey, params],
      queryFn: () => queryFn(params),
      staleTime: 5 * 60 * 1000, // 5분
      gcTime: 10 * 60 * 1000, // 10분
    });
  };
};

// 새로운 ranking API들만 export (기존 useTotalRegionRanks는 제외)
export const useMajorProvincesRanks = createRankingHook(
  'majorProvincesRanks',
  StatsService.getMajorProvincesRanks
);

export const useSelectedProvincesRanks = createRankingHook(
  'selectedProvincesRanks',
  StatsService.getSelectedProvincesRanks
);

export const useFreeEconomyZoneRanks = createRankingHook(
  'freeEconomyZoneRanks',
  StatsService.getFreeEconomyZoneRanks
);

export const useGrowthBoostZoneRanks = createRankingHook(
  'growthBoostZoneRanks',
  StatsService.getGrowthBoostZoneRanks
);

export const useNationalIndustrialZoneRanks = createRankingHook(
  'nationalIndustrialZoneRanks',
  StatsService.getNationalIndustrialZoneRanks
);

export const useCostalCityRanks = createRankingHook(
  'costalCityRanks',
  StatsService.getCostalCityRanks
); 