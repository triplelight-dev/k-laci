'use client';

import { useRegion } from '@/api/hooks/useRegion';
import ResultLayout from '@/components/layout/ResultLayout';
import {
  useDistrict,
  useIsLoggedIn,
  useSetSelectedDistrict,
  useSetSelectedProvince,
  useSetSelectedRegion,
  useUser,
} from '@/store';
import { RegionWithDetails as StoreRegionWithDetails } from '@/store/types/district';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';

// sections
import CategoryRankingSection from '@/features/results/sections/CategoryRankingSection';
import CompetencyDistSection from '@/features/results/sections/CompetencyDistSection';
import DistrictSearchSection from '@/features/results/sections/DistrictSearchSection';
import DistrictSelectSection from '@/features/results/sections/DistrictSelectSection';
import PreRegistrationSection from '@/features/results/sections/PreRegistrationSection';
import SimilarRegionSection from '@/features/results/sections/SimilarRegionSection';
import StrengthWeaknessIndexSection from '@/features/results/sections/StrenthWeaknessIndexSection';
import SummarySection from '@/features/results/sections/SummarySection';
import TitleSection from '@/features/results/sections/TitleSection';

// 지자체 데이터 타입 정의
interface DistrictData {
  id: string;
  name: string;
  rank: number;
  // 필요한 다른 데이터들...
}

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

interface ResultsPageClientProps {
  regionId?: string;
}

// 실제 페이지 컴포넌트
function ResultsPageContent({ regionId }: ResultsPageClientProps) {
  const router = useRouter();
  const setSelectedDistrict = useSetSelectedDistrict();
  const setSelectedProvince = useSetSelectedProvince();
  const setSelectedRegion = useSetSelectedRegion();
  const [isFloating, setIsFloating] = useState(false);
  const [isFloatingVisible, setIsFloatingVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [districtData, setDistrictData] = useState<DistrictData | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const isLoggedIn = useIsLoggedIn();
  const user = useUser();
  const hasAnimatedRef = useRef(false);
  const [hasLoadedDefault, setHasLoadedDefault] = useState(false);
  const chartSectionRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false); // 초기화 상태 추가

  // Zustand store에서 선택된 지역 정보 가져오기
  const { selectedProvince, selectedDistrict, selectedRegion } = useDistrict();
  const { getRegion } = useRegion();

  // URL 업데이트 함수 (무한 루프 방지)
  const updateURL = (newRegionId: number | null) => {
    if (newRegionId && isInitialized) { // 초기화 완료 후에만 URL 업데이트
      const newURL = `/results/region/${newRegionId}`;
      if (newURL !== window.location.pathname) {
        router.replace(newURL, { scroll: false });
      }
    }
  };

  // 유저 관심 지역 로드 함수
  const loadUserInterestRegion = async (interestRegionId: number) => {
    try {
      const apiResponse = await getRegion(String(interestRegionId));
      const storeRegion = transformApiRegionToStoreRegion(apiResponse);
      setSelectedRegion(storeRegion, 'system');
      setSelectedProvince(storeRegion.province_id);
      setSelectedDistrict(storeRegion.id, 'system');
      setHasLoadedDefault(true);
      setIsInitialized(true);
      return true;
    } catch (error) {
      return false;
    }
  };

  // 기본 데이터 로드 함수
  const loadDefaultData = async () => {
    if (hasLoadedDefault) return;

    try {
      const apiResponse = await getRegion('1');
      const storeRegion = transformApiRegionToStoreRegion(apiResponse);
      setSelectedRegion(storeRegion, 'system');
      setSelectedProvince(storeRegion.province_id);
      setSelectedDistrict(storeRegion.id, 'system');
      setHasLoadedDefault(true);
      setIsInitialized(true);
    } catch (error) {
      console.error('기본 데이터 로드 실패:', error);
      setHasLoadedDefault(true);
      setIsInitialized(true);
    }
  };

  // 초기화 로직 (최우선순위)
  useEffect(() => {
    if (isInitialized) return; // 이미 초기화되었으면 스킵

    if (regionId) {
      // URL에서 전달된 regionId가 있으면 최우선으로 처리
      const fetchRegionFromURL = async () => {
        try {
          console.log('🔍 [DEBUG] fetchRegionFromURL 시작, regionId:', regionId);
          
          const apiResponse = await getRegion(regionId);
          console.log('🔍 [DEBUG] API 응답:', apiResponse);
          
          const storeRegion = transformApiRegionToStoreRegion(apiResponse);
          console.log('🔍 [DEBUG] 변환된 storeRegion:', storeRegion);
          console.log('🔍 [DEBUG] storeRegion.province_id:', storeRegion.province_id);
          console.log('🔍 [DEBUG] storeRegion.province:', storeRegion.province);
          
          setSelectedRegion(storeRegion, 'url_change');
          setSelectedProvince(storeRegion.province_id);
          setSelectedDistrict(storeRegion.id, 'url_change');
          
          // 추가: province가 제대로 설정되었는지 확인
          setTimeout(() => {
            const currentState = useDistrict.getState();
            console.log('🔍 [DEBUG] 설정 후 selectedProvince:', currentState.selectedProvince);
            console.log('🔍 [DEBUG] 설정 후 selectedDistrict:', currentState.selectedDistrict);
            console.log('🔍 [DEBUG] 설정 후 selectedRegion:', currentState.selectedRegion);
          }, 100);
          
          setHasLoadedDefault(true);
          setIsInitialized(true);
        } catch (error) {
          console.error('URL에서 region 로드 실패:', error);
          // 에러 시에만 기본 데이터 로드
          if (!hasLoadedDefault) {
            loadDefaultData();
          }
        }
      };
      fetchRegionFromURL();
    } else if (!selectedRegion && !hasLoadedDefault) {
      // regionId가 없고 선택된 지역도 없는 경우에만 기본 로직 실행
      if (user?.profile?.interest_region_id) {
        loadUserInterestRegion(user.profile.interest_region_id);
      } else {
        loadDefaultData();
      }
    }
  }, [regionId, user, hasLoadedDefault, isInitialized]);

  // selectedRegion이 변경될 때 URL 업데이트 및 데이터 새로고침
  useEffect(() => {
    if (selectedRegion && isInitialized) {
      updateURL(selectedRegion.id);
      
      // 새로운 지역 데이터로 페이지 데이터 업데이트
      const refreshPageData = async () => {
        try {
          const apiResponse = await getRegion(String(selectedRegion.id));
          const storeRegion = transformApiRegionToStoreRegion(apiResponse);
          
          // 기존 selectedRegion과 다른 경우에만 업데이트
          if (storeRegion.id !== selectedRegion.id) {
            setSelectedRegion(storeRegion, 'region_refresh');
            setSelectedProvince(storeRegion.province_id);
            setSelectedDistrict(storeRegion.id, 'region_refresh');
          }
        } catch (error) {
          console.error('지역 데이터 새로고침 실패:', error);
        }
      };
      
      refreshPageData();
    }
  }, [selectedRegion, isInitialized]);

  // 안전한 지역명 생성 함수
  const getDistrictName = (): string => {
    if (selectedRegion?.province?.name && selectedRegion?.name) {
      return `${selectedRegion.province.name} ${selectedRegion.name}`;
    }
    if (selectedProvince?.name && selectedDistrict?.name) {
      return `${selectedProvince.name} ${selectedDistrict.name}`;
    }
    return '전라북도 전주시';
  };

  // 지자체 데이터 동적 생성
  const generateDistrictData = (): DistrictData => {
    const districtName = getDistrictName();
    const rank = selectedRegion?.total_rank || 3;

    return {
      id: 'current-district',
      name: districtName,
      rank: rank,
    };
  };

  // selectedRegion이 변경될 때마다 districtData 업데이트
  useEffect(() => {
    const newDistrictData = generateDistrictData();
    setDistrictData(newDistrictData);
  }, [selectedRegion, selectedProvince, selectedDistrict]);

  // 스크롤 이벤트 핸들러 수정
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let chartBottom = 400; // fallback
      if (chartSectionRef.current) {
        const rect = chartSectionRef.current.getBoundingClientRect();
        chartBottom = rect.bottom + window.scrollY;
      }
      // 차트(TitleSection) 아래로 스크롤했을 때만 플로팅
      const newIsFloating = scrollY > chartBottom;
      setIsFloating(newIsFloating);

      // 스크롤 방향 감지
      if (scrollY > lastScrollY.current) {
        // 아래로 스크롤: 숨김
        setIsFloatingVisible(false);
      } else {
        // 위로 스크롤: 표시
        setIsFloatingVisible(true);
      }
      lastScrollY.current = scrollY;

      if (newIsFloating && !hasAnimatedRef.current) {
        // floating 상태가 되었을 때만 애니메이션 실행 (한 번만)
        setShowAnimation(true);
        hasAnimatedRef.current = true;
      } else if (!newIsFloating && hasAnimatedRef.current) {
        // floating 상태가 해제되면 애니메이션 상태 리셋
        hasAnimatedRef.current = false;
        setShowAnimation(false);
      }
    };

    // 컴포넌트 마운트 시 초기 상태 설정
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // 의존성 배열을 비워서 한 번만 등록

  // 애니메이션 완료 후 클래스 제거
  useEffect(() => {
    if (showAnimation) {
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [showAnimation]);

  return (
    <ResultLayout>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#F4F4F4',
          gap: '30px',
        }}
      >
        <DistrictSearchSection />

        {/* floating 상태에 따라 다른 스타일로 DistrictSelectSection 렌더링 */}
        <DistrictSelectSection isFloating={isFloating} isVisible={isFloatingVisible} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            background: '#F4F4F4',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '60%',
              maxWidth: '800px',
              gap: '50px',
              paddingTop: '100px',
            }}
          >
            {/* 차트(TitleSection) 영역 ref 부착 */}
            <div ref={chartSectionRef} data-chart-section>
              <TitleSection districtData={districtData} />
            </div>
            <SummarySection />

            {/* StrengthWeaknessIndexSection과 상단 컴포넌트 사이 간격 */}
            <div style={{ height: '80px' }} />

            {/* 로그인 상태에 따른 조건부 렌더링 */}
            {isLoggedIn ? (
              // 로그인된 사용자: 모든 섹션 표시
              <>
                <StrengthWeaknessIndexSection />
                <CompetencyDistSection />
                <CategoryRankingSection />
                <div
                  style={{
                    width: '100vw',
                    marginLeft: 'calc(-50vw + 50%)',
                    marginRight: 'calc(-50vw + 50%)',
                  }}
                >
                  <PreRegistrationSection />
                </div>
                <SimilarRegionSection />
              </>
            ) : (
              // 비로그인 사용자: StrengthWeaknessIndexSection만 부분 표시 (fadeout 효과)
              <>
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    maxHeight: '250px',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        'linear-gradient(to bottom, rgba(244, 244, 244, 0) 0%, rgba(244, 244, 244, 0) 20%, rgba(244, 244, 244, 0.3) 50%, rgba(244, 244, 244, 0.6) 100%)',
                      zIndex: 1,
                      pointerEvents: 'none',
                    }}
                  />
                  <div style={{ position: 'relative', zIndex: 0 }}>
                    <StrengthWeaknessIndexSection />
                  </div>
                </div>
                {/* LoginSuggestionSection과의 간격 */}
                {/* <div style={{ height: '50px' }} /> */}
              </>
            )}
          </div>
        </div>
      </div>
    </ResultLayout>
  );
}

function ResultsPageLoading() {
  return (
    <ResultLayout>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#F4F4F4',
          gap: '30px',
          minHeight: '100vh',
        }}
      >
        <div>로딩 중...</div>
      </div>
    </ResultLayout>
  );
}

export default function ResultsPageClient({ regionId }: ResultsPageClientProps) {
  return (
    <Suspense fallback={<ResultsPageLoading />}>
      <ResultsPageContent regionId={regionId} />
    </Suspense>
  );
}
