'use client';

import { useRegion } from '@/api/hooks/useRegion';
import ResultLayout from '@/components/layout/ResultLayout';
import { useIsMobile } from '@/hooks';
import {
  useDistrict,
  useIsLoggedIn,
  useSetSelectedDistrict,
  useSetSelectedProvince,
  useSetSelectedRegion,
  useUser,
} from '@/store';
import { RegionWithDetails as StoreRegionWithDetails } from '@/store/types/district';
import { usePathname, useRouter } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';

// sections
import Footer from '@/components/Footer';
import HomePreRegistrationSection from '@/components/sections/HomePreRegistrationSection';
import CategoryRankingSection from '@/features/results/sections/CategoryRankingSection';
import DistrictSearchSection from '@/features/results/sections/DistrictSearchSection';
import DistrictSelectSection from '@/features/results/sections/DistrictSelectSection';
import LoginSuggestionSection from '@/features/results/sections/LoginSuggestionSectino';
import MobileTitleSection from '@/features/results/sections/MobileTitleSection';
import SimilarRegionSection from '@/features/results/sections/SimilarRegionSection';
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
    province_id: parseInt(
      apiRegion.province?.id || apiRegion.provinceId || '0',
    ), // ✅ 수정
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
  regionId?: string | undefined; // ✅ optional + undefined 허용
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
    if (newRegionId && isInitialized) {
      // 초기화 완료 후에만 URL 업데이트
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

  /**
   * 주어진 문자열이 '/results/region/숫자' 형태의 URL 경로인지 확인합니다.
   * @param {string} urlPath 검사할 URL 경로 문자열
   * @returns {boolean} URL 형태가 일치하면 true, 아니면 false
   */
  // URL 경로 검사 함수 (이전 답변에서 만든 정규식)
  const isRegionResultUrl = (urlPath: string): boolean => {
    const regex = /^\/results\/region\/\d+$/;
    return regex.test(urlPath);
  };

  useEffect(() => {
    if (isInitialized) return; // 이미 초기화되었으면 스킵

    if (regionId) {
      // URL에서 전달된 regionId가 있으면 최우선으로 처리
      const fetchRegionFromURL = async () => {
        try {
          const apiResponse = await getRegion(regionId);
          const storeRegion = transformApiRegionToStoreRegion(apiResponse);
          setSelectedRegion(storeRegion, 'url_change');
          setSelectedProvince(storeRegion.province_id);
          setSelectedDistrict(storeRegion.id, 'url_change');
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

      // 스크롤 방향 감지 (반대로 변경)
      if (scrollY < lastScrollY.current) {
        // 아래로 스크롤: 표시
        setIsFloatingVisible(true);
      } else {
        // 위로 스크롤: 숨김
        setIsFloatingVisible(false);
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

  const currentPath = usePathname();
  const isMatch = isRegionResultUrl(currentPath);

  const isMobile = useIsMobile();

  return (
    <ResultLayout>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: isMobile ? 'black' : '#F4F4F4',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {!isMobile &&
          <>
            <DistrictSearchSection />

            {/* floating 상태에 따라 다른 스타일로 DistrictSelectSection 렌더링 */}
            <DistrictSelectSection
              isFloating={isFloating}
              isVisible={isFloatingVisible} /></>
        }

        {isMobile && !isMatch &&
            <DistrictSearchSection />
        }


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
              width: '100%',
              maxWidth: '1060px',
            }}
          >
            {!isMobile && <>
              {/* 차트(TitleSection) 영역 ref 부착 */}
              <div ref={chartSectionRef} data-chart-section>
                <TitleSection districtData={districtData} />
              </div>

              <SummarySection isLoggedIn={isLoggedIn} />
            </>}

            {isMobile && isMatch && <>
              {/* 차트(TitleSection) 영역 ref 부착 */}
              <div ref={chartSectionRef} data-chart-section>
                <MobileTitleSection districtData={districtData} />
              </div>

              <SummarySection isLoggedIn={isLoggedIn} />
            </>}

          </div>
          {isLoggedIn && isMatch && <>
            <CategoryRankingSection />
            <SimilarRegionSection />
          </>}
        </div>
      </div>
      {!isLoggedIn && !isMobile && <><LoginSuggestionSection /><div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '28px 0',
        backgroundColor: '#000',
        width: '100%',
      }}>
        <p style={{ fontSize: '14px', color: '#fff', fontWeight: '700' }}>© 2025 트리플라잇 주식회사</p>
        <p style={{ fontSize: '14px', color: '#9A9EA3', fontWeight: '500' }}>klaci@triplelight.co</p>
      </div></>}
      {isLoggedIn && !isMobile && <><HomePreRegistrationSection height='650px' /><Footer /></>}
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

export default function ResultsPageClient({
  regionId,
}: ResultsPageClientProps) {
  return (
    <Suspense fallback={<ResultsPageLoading />}>
      <ResultsPageContent regionId={regionId} />
    </Suspense>
  );
}
