import { useQuery } from '@tanstack/react-query';
import { StatsService } from '../services/stats.service';
import { GetMegaRegionRanksParams, GetRankingParams } from '../types/stats.types';

// 기존 방식과 동일하게 직접 정의
export const useMajorProvincesRanks = (params: GetRankingParams = {}) => {
  return useQuery({
    queryKey: ['majorProvincesRanks', params],
    queryFn: () => StatsService.getMajorProvincesRanks(params),
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });
};

export const useSelectedProvincesRanks = (params: GetRankingParams = {}) => {
  return useQuery({
    queryKey: ['selectedProvincesRanks', params],
    queryFn: () => StatsService.getSelectedProvincesRanks(params),
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });
};

export const useFreeEconomyZoneRanks = (params: GetRankingParams = {}) => {
  return useQuery({
    queryKey: ['freeEconomyZoneRanks', params],
    queryFn: () => StatsService.getFreeEconomyZoneRanks(params),
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });
};

export const useGrowthBoostZoneRanks = (params: GetRankingParams = {}) => {
  return useQuery({
    queryKey: ['growthBoostZoneRanks', params],
    queryFn: () => StatsService.getGrowthBoostZoneRanks(params),
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });
};

export const useNationalIndustrialZoneRanks = (params: GetRankingParams = {}) => {
  return useQuery({
    queryKey: ['nationalIndustrialZoneRanks', params],
    queryFn: () => StatsService.getNationalIndustrialZoneRanks(params),
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });
};

export const useCostalCityRanks = (params: GetRankingParams = {}) => {
  return useQuery({
    queryKey: ['costalCityRanks', params],
    queryFn: () => StatsService.getCostalCityRanks(params),
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });
};

export const useMegaRegionRanks = (params: GetMegaRegionRanksParams = {}) => {
  return useQuery({
    queryKey: ['megaRegionRanks', params],
    queryFn: () => StatsService.getMegaRegionRanks(params),
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });
}; 