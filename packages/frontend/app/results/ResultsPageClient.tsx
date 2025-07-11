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
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';

// sections
import Footer from '@/components/Footer';
import HomePreRegistrationSection from '@/components/sections/HomePreRegistrationSection';
import CategoryRankingSection from '@/features/results/sections/CategoryRankingSection';
import DistrictSearchSection from '@/features/results/sections/DistrictSearchSection';
import DistrictSelectSection from '@/features/results/sections/DistrictSelectSection';
import LoginSuggestionSection from '@/features/results/sections/LoginSuggestionSectino';
import PreRegistrationSection from '@/features/results/sections/PreRegistrationSection';
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

// 실제 페이지 컴포넌트
function ResultsPageContent() {
  const searchParams = useSearchParams();
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

  // Zustand store에서 선택된 지역 정보 가져오기
  const { selectedProvince, selectedDistrict, selectedRegion } = useDistrict();

  const { getRegion } = useRegion();

  // 유저 관심 지역 로드 함수
  const loadUserInterestRegion = async (interestRegionId: number) => {
    try {
      const apiResponse = await getRegion(String(interestRegionId));
      const storeRegion = transformApiRegionToStoreRegion(apiResponse);
      setSelectedRegion(storeRegion, 'system');
      setSelectedProvince(storeRegion.province_id);
      setSelectedDistrict(storeRegion.id, 'system');
      setHasLoadedDefault(true);
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
    } catch (error) {
      console.error('기본 데이터 로드 실패:', error);
    }
  };

  // URL 업데이트 함수
  const updateURL = (regionId: number | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (regionId) {
      params.set('regionId', regionId.toString());
    } else {
      params.delete('regionId');
    }

    const newURL = `${window.location.pathname}?${params.toString()}`;
    if (newURL !== window.location.pathname + window.location.search) {
      router.replace(newURL, { scroll: false });
    }
  };

  // selectedRegion이 변경될 때 URL 업데이트
  useEffect(() => {
    if (selectedRegion) {
      updateURL(selectedRegion.id);
    } else {
      updateURL(null);
    }
  }, [selectedRegion]);

  // URL에서 regionId 읽어와서 상태 업데이트 (수정된 로직)
  useEffect(() => {
    const regionId = searchParams.get('regionId');

    if (
      regionId &&
      (!selectedRegion || selectedRegion.id !== Number(regionId))
    ) {
      // 1. URL에 regionId가 있는 경우 (최우선)
      const fetchRegionFromURL = async () => {
        try {
          const apiResponse = await getRegion(regionId);
          const storeRegion = transformApiRegionToStoreRegion(apiResponse);
          setSelectedRegion(storeRegion, 'url_change');
          setSelectedProvince(storeRegion.province_id);
          setSelectedDistrict(storeRegion.id, 'url_change');
        } catch (error) {
          if (!hasLoadedDefault) {
            loadDefaultData();
          }
        }
      };
      fetchRegionFromURL();
    } else if (!regionId && !selectedRegion && !hasLoadedDefault) {
      // 2. URL에 regionId가 없고 선택된 지역도 없는 경우
      if (user?.profile?.interest_region_id) {
        // 2-1. 유저 관심 지역이 있는 경우
        loadUserInterestRegion(user.profile.interest_region_id);
      } else {
        // 2-2. 유저 관심 지역이 없는 경우 기본값 로드
        loadDefaultData();
      }
    }
  }, [searchParams, user]);

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
          position: 'relative',
          overflow: 'hidden',
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
              width: '100%',
              maxWidth: '1060px',
            }}
          >
            {/* 차트(TitleSection) 영역 ref 부착 */}
            <div ref={chartSectionRef}>
              <TitleSection districtData={districtData} />
            </div>

            <SummarySection isLoggedIn={isLoggedIn} />


          </div>
          {isLoggedIn && <>
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
            <SimilarRegionSection /></>}
        </div>
      </div>
      {!isLoggedIn && <><LoginSuggestionSection /><div style={{
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
      {isLoggedIn && <><HomePreRegistrationSection height='650px' /><Footer /></>}
    </ResultLayout>
  );
}

// 로딩 컴포넌트
function ResultsPageLoading() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F4F4',
      }}
    >
      <div
        style={{
          width: '16px',
          height: '16px',
          border: '2px solid #000000',
          borderTop: '2px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      ></div>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default function ResultsPageClient() {
  return (
    <Suspense fallback={<ResultsPageLoading />}>
      <ResultsPageContent />
    </Suspense>
  );
}
