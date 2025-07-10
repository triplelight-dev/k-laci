import { useRegion } from '@/api/hooks/useRegion';
import { DataService } from '@/api/services';
import { useDistrict, useSetRegionLoading, useSetSelectedDistrict, useSetSelectedProvince, useSetSelectedRegion } from '@/store';
import { RegionWithDetails as StoreRegionWithDetails } from '@/store/types/district';
import { RegionSelectionSource } from '@/types/region';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

// API 응답을 store 타입으로 변환하는 함수
const transformApiRegionToStoreRegion = (
  apiRegion: any,
): StoreRegionWithDetails => {
  return {
    id: parseInt(apiRegion.id),
    province_id: parseInt(apiRegion.provinceId),
    name: apiRegion.name,
    district_type: apiRegion.district_type,
    weight_class: apiRegion.weight_class,
    klaci_code: apiRegion.klaci_code,
    growth_score: apiRegion.growth_score,
    economy_score: apiRegion.economy_score,
    living_score: apiRegion.living_score,
    safety_score: apiRegion.safety_score,
    total_score: apiRegion.total_score,
    total_rank: apiRegion.total_rank,
    province: {
      id: parseInt(apiRegion.province.id),
      name: apiRegion.province.name,
      full_name: apiRegion.province.full_name,
      name_eng: apiRegion.province.name_eng,
    },
    klaci: apiRegion.klaci,
    category_ranks: apiRegion.category_ranks,
    key_index_ranks: apiRegion.key_index_ranks,
  };
};

interface RegionHandlerOptions {
  autoInitialize?: boolean;
  updateURL?: boolean;
  scrollToChart?: boolean;
}

export const useRegionHandler = (options: RegionHandlerOptions = {}) => {
  const {
    autoInitialize = true,
    updateURL = true,
    scrollToChart = false
  } = options;

  const { getRegion } = useRegion();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { selectedRegion, selectedProvince, selectedDistrict } = useDistrict();
  const setSelectedRegion = useSetSelectedRegion();
  const setSelectedProvince = useSetSelectedProvince();
  const setSelectedDistrict = useSetSelectedDistrict();
  const setRegionLoading = useSetRegionLoading();
  
  // 상태 관리 - 전역으로 관리하여 중복 초기화 방지
  const isInitializedRef = useRef(false);
  const isUpdatingRef = useRef(false);
  const lastURLRef = useRef<string>('');

  // 핵심 함수: region 선택 (모든 region 변경의 진실의 원천)
  const selectRegion = useCallback(async (
    regionId: number, 
    source: RegionSelectionSource = 'system'
  ) => {
    // 이미 같은 region이 선택되어 있으면 무시
    if (selectedRegion?.id === regionId) {
      return selectedRegion;
    }

    // 이미 업데이트 중이면 무시
    if (isUpdatingRef.current) {
      return selectedRegion;
    }

    try {
      isUpdatingRef.current = true;
      setRegionLoading(true);
      
      const apiResponse = await getRegion(String(regionId));
      const storeRegion = transformApiRegionToStoreRegion(apiResponse);
      
      // Zustand store 업데이트
      setSelectedRegion(storeRegion, source);
      setSelectedProvince(storeRegion.province_id);
      setSelectedDistrict(storeRegion.id, source);
      
      return storeRegion;
    } catch (error) {
      console.error('지역 선택 실패:', error);
      throw error;
    } finally {
      setRegionLoading(false);
      isUpdatingRef.current = false;
    }
  }, [getRegion, setSelectedRegion, setSelectedProvince, setSelectedDistrict, setRegionLoading, selectedRegion]);

  // URL 업데이트 (단순하고 안전하게)
  const updateURLWithRegion = useCallback((regionId: number | null) => {
    if (!updateURL || isUpdatingRef.current) return;
    
    const params = new URLSearchParams(searchParams.toString());
    
    if (regionId) {
      params.set('regionId', regionId.toString());
    } else {
      params.delete('regionId');
    }
    
    const newURL = `${window.location.pathname}?${params.toString()}`;
    const currentURL = window.location.pathname + window.location.search;
    
    if (newURL !== currentURL) {
      router.replace(newURL, { scroll: false });
    }
  }, [updateURL, searchParams, router]);

  // 차트로 스크롤
  const scrollToChartSection = useCallback(() => {
    if (!scrollToChart) return;
    
    setTimeout(() => {
      const chartSection = document.querySelector('[data-chart-section]');
      if (chartSection) {
        const rect = chartSection.getBoundingClientRect();
        const scrollTop = window.pageYOffset + rect.top - 100;
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
      }
    }, 100);
  }, [scrollToChart]);

  // Results 페이지로 이동 (다른 페이지에서 사용)
  const navigateToResultsWithRegion = useCallback(async (
    regionId: number, 
    source: RegionSelectionSource = 'navigation'
  ) => {
    try {
      await selectRegion(regionId, source);
      router.push(`/results/region/${regionId}`);
      scrollToChartSection();
    } catch (error) {
      console.error('지역 이동 실패:', error);
      router.push(`/results/region/${regionId}`);
    }
  }, [selectRegion, router, scrollToChartSection]);

  // 이전/다음 지역으로 이동
  const navigateToAdjacentRegion = useCallback(async (direction: 'prev' | 'next') => {
    if (!selectedRegion) return;
    
    try {
      const currentRank = selectedRegion.total_rank;
      const adjacentRegionData = await DataService.getAdjacentRegionByRank(
        currentRank,
        direction,
      );
      
      if (adjacentRegionData.data) {
        await selectRegion(adjacentRegionData.data.id, 'navigation');
        scrollToChartSection();
      }
    } catch (error) {
      console.error('Failed to navigate to adjacent region:', error);
    }
  }, [selectedRegion, selectRegion, scrollToChartSection]);

  // 초기화 로직 (우선순위: URL > 사용자 관심지역 > 기본값)
  const initializeRegion = useCallback(async (user?: any) => {
    if (isInitializedRef.current) return;
    
    const regionId = searchParams.get('regionId');
    
    try {
      // 1. URL에 regionId가 있으면 우선 적용
      if (regionId) {
        await selectRegion(Number(regionId), 'url');
        lastURLRef.current = searchParams.toString();
        isInitializedRef.current = true;
        return;
      }
      
      // 2. 사용자 관심 지역이 있으면 적용
      if (user?.profile?.interest_region_id) {
        await selectRegion(user.profile.interest_region_id, 'interest');
        isInitializedRef.current = true;
        return;
      }
      
      // 3. 기본값 적용
      await selectRegion(1, 'default');
      isInitializedRef.current = true;
    } catch (error) {
      console.error('지역 초기화 실패:', error);
      isInitializedRef.current = true;
    }
  }, [searchParams, selectRegion]);

  // URL 변경 감지 및 처리
  useEffect(() => {
    if (!autoInitialize || isInitializedRef.current) return;
    
    const currentURL = searchParams.toString();
    const regionId = searchParams.get('regionId');
    
    // URL이 변경되었고, regionId가 있으면 적용
    if (currentURL !== lastURLRef.current && regionId) {
      selectRegion(Number(regionId), 'url');
      lastURLRef.current = currentURL;
    }
  }, [searchParams, autoInitialize, selectRegion]);

  // selectedRegion 변경 시 URL 업데이트
  useEffect(() => {
    if (selectedRegion && updateURL && !isUpdatingRef.current) {
      updateURLWithRegion(selectedRegion.id);
    }
  }, [selectedRegion, updateURL, updateURLWithRegion]);

  // 컴포넌트 마운트 시 초기화 - 전역 상태로 관리
  useEffect(() => {
    if (autoInitialize && !isInitializedRef.current) {
      initializeRegion();
    }
  }, [autoInitialize, initializeRegion]);

  return {
    // 상태
    selectedRegion,
    selectedProvince,
    selectedDistrict,
    
    // 핵심 함수들
    selectRegion,
    navigateToResultsWithRegion,
    navigateToAdjacentRegion,
    initializeRegion,
    
    // 유틸리티 함수들
    updateURLWithRegion,
    scrollToChartSection,
    
    // 초기화 상태
    isInitialized: isInitializedRef.current,
  };
}; 