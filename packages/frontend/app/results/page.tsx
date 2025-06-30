'use client';

import { useRegion } from '@/api/hooks/useRegion';
import ResultLayout from '@/components/layout/ResultLayout';
import { useDistrict, useSetSelectedDistrict, useSetSelectedProvince, useSetSelectedRegion } from '@/store';
import { RegionWithDetails as StoreRegionWithDetails } from '@/store/types/district';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';

// sections
import CategoryRankingSection from '@/features/results/sections/CategoryRankingSection';
import CompetencyDistSection from '@/features/results/sections/CompetencyDistSection';
import DistrictSearchSection from '@/features/results/sections/DistrictSearchSection';
import DistrictSelectSection from '@/features/results/sections/DistrictSelectSection';
import PreRegistrationSection from '@/features/results/sections/PreRegistrationSection';
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
const transformApiRegionToStoreRegion = (apiRegion: any): StoreRegionWithDetails => {
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
    },
    klaci: apiRegion.klaci,
    category_ranks: apiRegion.category_ranks,
    key_index_ranks: apiRegion.key_index_ranks,
  };
};

// 실제 페이지 컴포넌트
function ResultsPageContent() {
  const searchParams = useSearchParams();
  const setSelectedDistrict = useSetSelectedDistrict();
  const setSelectedProvince = useSetSelectedProvince();
  const setSelectedRegion = useSetSelectedRegion();
  const [isFloating, setIsFloating] = useState(false);
  const [districtData, setDistrictData] = useState<DistrictData | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const isLoggedIn = true;
  const hasAnimatedRef = useRef(false); // ref로 애니메이션 실행 여부 추적
  const [hasLoadedDefault, setHasLoadedDefault] = useState(false); // 기본 데이터 로드 여부 추적

  // Zustand store에서 선택된 지역 정보 가져오기
  const { selectedProvince, selectedDistrict, selectedRegion } = useDistrict();
  const { getRegion } = useRegion();

  // 기본 데이터 로드 함수
  const loadDefaultData = async () => {
    if (hasLoadedDefault) return; // 이미 로드했다면 중복 실행 방지
    
    try {
      const apiResponse = await getRegion('1'); // region_id: 1로 기본 데이터 로드
      const storeRegion = transformApiRegionToStoreRegion(apiResponse);
      setSelectedRegion(storeRegion);
      
      // 기본 province와 district도 설정
      setSelectedProvince(storeRegion.province_id);
      setSelectedDistrict(storeRegion.id);
      
      setHasLoadedDefault(true);
    } catch (error) {
      // 기본 데이터 로드 실패 시 무시
    }
  };

  // URL 쿼리 파라미터에서 district ID 가져오기
  useEffect(() => {
    const districtId = searchParams.get('district');
    if (districtId) {
      setSelectedDistrict(Number(districtId));
    } else if (!selectedRegion && !hasLoadedDefault) {
      // URL에 district 파라미터가 없고 selectedRegion도 없고 아직 기본 데이터를 로드하지 않은 경우
      loadDefaultData();
    }
  }, [searchParams, setSelectedDistrict, selectedRegion, hasLoadedDefault, getRegion, setSelectedRegion, setSelectedProvince]);

  // 안전한 지역명 생성 함수
  const getDistrictName = (): string => {
    // selectedRegion이 있으면 우선 사용
    if (selectedRegion?.province?.name && selectedRegion?.name) {
      return `${selectedRegion.province.name} ${selectedRegion.name}`;
    }

    // selectedProvince와 selectedDistrict가 모두 유효한 객체이고 name 속성이 있는 경우
    if (selectedProvince?.name && selectedDistrict?.name) {
      return `${selectedProvince.name} ${selectedDistrict.name}`;
    }

    // 둘 중 하나라도 없거나 name 속성이 없는 경우
    return '전라북도 전주시'; // 기본값
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      const scrollY = window.scrollY;
      const newIsFloating = scrollY > scrollThreshold;

      if (newIsFloating && !isFloating) {
        // floating 상태가 되었을 때만 애니메이션 실행 (한 번만)
        if (!hasAnimatedRef.current) {
          setShowAnimation(true);
          hasAnimatedRef.current = true;
        }
      } else if (!newIsFloating && isFloating) {
        // floating 상태가 해제되면 애니메이션 상태 리셋
        hasAnimatedRef.current = false;
        setShowAnimation(false);
      }

      setIsFloating(newIsFloating);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFloating]);

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

        {!isFloating && <DistrictSelectSection />}

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
            <TitleSection districtData={districtData} />
            <SummarySection />

            {/* StrengthWeaknessIndexSection을 조건부로 렌더링 */}
            <div
              style={{
                position: 'relative',
                paddingTop: '100px',
                paddingBottom: '100px',
              }}
            >
              <StrengthWeaknessIndexSection />

              {/* 로그인하지 않은 경우 그라데이션 오버레이 적용 */}
              {!isLoggedIn && (
                <div
                  style={{
                    position: 'absolute',
                    top: '15%', // 상단 30%는 보이도록
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      'linear-gradient(to bottom, transparent, rgba(244, 244, 244, 0.95), #F4F4F4)',
                    pointerEvents: 'none',
                    zIndex: 10,
                  }}
                />
              )}
            </div>

            {/* 로그인한 경우에만 나머지 섹션들 표시 */}
            {isLoggedIn && (
              <>
                <CompetencyDistSection />
                <CategoryRankingSection />
              </>
            )}
          </div>
        </div>
      </div>

      {/* 로그인한 경우에만 PreRegistrationSection 표시 */}
      {isLoggedIn && <PreRegistrationSection />}

      {isFloating && (
        <div
          className={`floating-district-select ${showAnimation ? 'animate-slide-in' : ''}`}
          style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            transition: 'all 0.3s ease',
          }}
        >
          <DistrictSelectSection />
        </div>
      )}
    </ResultLayout>
  );
}

// 로딩 컴포넌트
function ResultsPageLoading() {
  return (
    <ResultLayout>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#F4F4F4',
          minHeight: '100vh',
        }}
      >
        <div>로딩 중...</div>
      </div>
    </ResultLayout>
  );
}

// 메인 페이지 컴포넌트
export default function ResultsPage() {
  return (
    <Suspense fallback={<ResultsPageLoading />}>
      <ResultsPageContent />
    </Suspense>
  );
}
