import { useQuery } from '@tanstack/react-query';
import { StatsService } from '../services/stats.service';
import {
  GetCategoryRanksParams,
  GetKlaciCodeRanksParams,
  GetMegaRegionRanksParams,
  GetProvinceRanksParams,
  GetRankingParams
} from '../types/stats.types';

// 기존 useProvinceRanks Hook을 유지하고 다른 파일은 삭제
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

export const useKlaciCodeRanks = (params: GetKlaciCodeRanksParams = {}) => {
  return useQuery({
    queryKey: ['klaciCodeRanks', params],
    queryFn: () => StatsService.getKlaciCodeRanks(params),
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });
};

export const useProvinceRanks = (params: GetProvinceRanksParams = {}) => {
  return useQuery({
    queryKey: ['provinceRanks', params],
    queryFn: () => StatsService.getProvinceRanks(params),
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });
};

export interface GetCategoryRanksParams extends GetRankingParams {
  // categoryId 제거 - 전체 데이터를 받아서 클라이언트 사이드에서 type으로 필터링
}

export const useCategoryRanks = (params: GetCategoryRanksParams = {}) => {
  return useQuery({
    queryKey: ['categoryRanks', params],
    queryFn: () => StatsService.getCategoryRanks(params),
    staleTime: 5 * 60 * 1000, // 5분
    refetchOnWindowFocus: false,
  });
}; 