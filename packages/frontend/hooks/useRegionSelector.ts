import { useRegion } from '@/api/hooks/useRegion';
import { DataService } from '@/api/services';
import { useDistrict, useSetRegionLoading, useSetSelectedDistrict, useSetSelectedProvince, useSetSelectedRegion } from '@/store';
import { RegionWithDetails as StoreRegionWithDetails } from '@/store/types/district';
import { RegionNavigationOptions, RegionSelectionSource } from '@/types/region';
import { useRouter, useSearchParams } from 'next/navigation';

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

export const useRegionSelector = () => {
  const { getRegion } = useRegion();
  const setSelectedRegion = useSetSelectedRegion();
  const setSelectedProvince = useSetSelectedProvince();
  const setSelectedDistrict = useSetSelectedDistrict();
  const setRegionLoading = useSetRegionLoading();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { selectedRegion } = useDistrict();

  // 1. 기본 지역 선택 함수
  const selectRegion = async (regionId: number, source: RegionSelectionSource) => {
    try {
      setRegionLoading(true);
      
      const apiResponse = await getRegion(String(regionId));
      const storeRegion = transformApiRegionToStoreRegion(apiResponse);
      
      // Store 업데이트 (기존 로직과 동일)
      setSelectedRegion(storeRegion, source);
      setSelectedProvince(storeRegion.province_id);
      setSelectedDistrict(storeRegion.id, source);
      
      return storeRegion;
    } catch (error) {
      console.error('지역 선택 실패:', error);
      throw error;
    } finally {
      setRegionLoading(false);
    }
  };

  // 2. Results 페이지로 이동하면서 지역 선택
  const navigateToResultsWithRegion = async (
    regionId: number, 
    source: RegionSelectionSource,
    options?: RegionNavigationOptions
  ) => {
    await selectRegion(regionId, source);
    router.push(`/results/region/${regionId}`);
    
    // 스크롤 옵션이 있으면 처리
    if (options?.scrollToChart) {
      setTimeout(() => {
        const chartSection = document.querySelector('[data-chart-section]');
        if (chartSection) {
          const rect = chartSection.getBoundingClientRect();
          const scrollTop = window.pageYOffset + rect.top + (options.scrollOffset || 450);
          window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // 3. URL 기반 초기화
  const initializeFromURL = async () => {
    const regionId = searchParams.get('regionId');
    if (regionId) {
      return await selectRegion(Number(regionId), 'url');
    }
    return null;
  };

  // 4. 관심지역 기반 초기화
  const initializeFromInterest = async (interestRegionId: number) => {
    return await selectRegion(interestRegionId, 'interest');
  };

  // 5. 기본값으로 초기화
  const initializeDefault = async () => {
    return await selectRegion(1, 'default');
  };

  // 6. 이전/다음 지역으로 이동
  const navigateToAdjacentRegion = async (direction: 'prev' | 'next') => {
    if (!selectedRegion) return;

    try {
      const currentRank = selectedRegion.total_rank;
      const adjacentRegionData = await DataService.getAdjacentRegionByRank(
        currentRank,
        direction,
      );

      if (adjacentRegionData.data) {
        await selectRegion(adjacentRegionData.data.id, 'navigation');
      }
    } catch (error) {
      console.error('Failed to navigate to adjacent region:', error);
    }
  };

  // 7. 초기화 로직 (우선순위 적용)
  const initializeRegion = async (user?: any) => {
    // 1순위: URL의 regionId
    const urlRegion = await initializeFromURL();
    if (urlRegion) return urlRegion;
    
    // 2순위: 사용자 관심지역
    if (user?.profile?.interest_region_id) {
      return await initializeFromInterest(user.profile.interest_region_id);
    }
    
    // 3순위: 기본값
    return await initializeDefault();
  };

  return {
    // 기본 함수들
    selectRegion,
    navigateToResultsWithRegion,
    navigateToAdjacentRegion,
    
    // 초기화 함수들
    initializeFromURL,
    initializeFromInterest,
    initializeDefault,
    initializeRegion,
    
    // 기존 함수들 (점진적 마이그레이션용)
    setSelectedRegion,
    setSelectedDistrict,
    setSelectedProvince,
  };
}; 