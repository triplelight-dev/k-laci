'use client';

import ResultLayout from '@/components/layout/ResultLayout';
import { useDistrict } from '@/store';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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

export default function ResultsPage() {
  const params = useParams();
  const districtId = params.district as string;
  const [isFloating, setIsFloating] = useState(false);
  const [districtData, setDistrictData] = useState<DistrictData | null>(null);
  const [loading, setLoading] = useState(true);
  const isLoggedIn = true;

  // Zustand store에서 선택된 지역 정보 가져오기
  const { selectedProvince, selectedDistrict } = useDistrict();

  // 디버깅용 - store 상태 확인
  useEffect(() => {
    console.log('Current store state:');
    console.log('selectedProvince:', selectedProvince);
    console.log('selectedDistrict:', selectedDistrict);
    console.log('selectedProvince type:', typeof selectedProvince);
    console.log('selectedDistrict type:', typeof selectedDistrict);
  }, [selectedProvince, selectedDistrict]);

  // 안전한 지역명 생성 함수
  const getDistrictName = (): string => {
    // selectedProvince와 selectedDistrict가 모두 유효한 객체이고 name 속성이 있는 경우
    if (selectedProvince?.name && selectedDistrict?.name) {
      return `${selectedProvince.name} ${selectedDistrict.name}`;
    }

    // 둘 중 하나라도 없거나 name 속성이 없는 경우
    return '선택없음';
  };

  // 지자체 데이터 매핑 - 동적으로 생성
  const getDistrictsMap = (): Record<string, DistrictData> => {
    const districtName = getDistrictName();

    // 선택된 지역 정보가 있으면 동적으로 생성
    if (districtName !== '선택없음') {
      console.log('Selected province:', selectedProvince);
      console.log('Selected district:', selectedDistrict);
      console.log('Generated name:', districtName);

      return {
        [districtId]: {
          id: districtId,
          name: districtName,
          rank: 3, // 기본값, 실제로는 API에서 가져와야 함
        },
      };
    }

    // 기본값 (선택된 지역 정보가 없는 경우)
    return {
      'seoul-gangnam': { id: 'seoul-gangnam', name: '서울시 강남구', rank: 1 },
      'seoul-songpa': { id: 'seoul-songpa', name: '서울시 송파구', rank: 2 },
      'jeonbuk-jeonju': {
        id: 'jeonbuk-jeonju',
        name: '전라북도 전주시',
        rank: 3,
      },
      'gyeonggi-seongnam': {
        id: 'gyeonggi-seongnam',
        name: '경기도 성남시',
        rank: 4,
      },
      'incheon-yeonsu': {
        id: 'incheon-yeonsu',
        name: '인천시 연수구',
        rank: 5,
      },
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      const scrollY = window.scrollY;
      setIsFloating(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // districtId가 변경될 때마다 데이터 로드
  useEffect(() => {
    const loadDistrictData = async () => {
      setLoading(true);

      try {
        // 실제 구현에서는 API 호출
        // const response = await fetch(`/api/districts/${districtId}`);
        // const data = await response.json();

        // 동적으로 생성된 매핑된 데이터 사용
        const districtsMap = getDistrictsMap();
        const data = districtsMap[districtId];

        if (data) {
          setDistrictData(data);
        } else {
          // 유효하지 않은 districtId인 경우 기본값 사용
          const defaultData = districtsMap['jeonbuk-jeonju'];
          if (defaultData) {
            setDistrictData(defaultData);
          }
        }
      } catch (error) {
        console.error('Failed to load district data:', error);
        // 에러 시 기본값 사용
        const districtsMap = getDistrictsMap();
        const defaultData = districtsMap['jeonbuk-jeonju'];
        if (defaultData) {
          setDistrictData(defaultData);
        }
      } finally {
        setLoading(false);
      }
    };

    if (districtId) {
      loadDistrictData();
    }
  }, [districtId, selectedProvince, selectedDistrict]); // selectedProvince, selectedDistrict 의존성 추가

  // URL 파라미터가 변경되었을 때 스크롤 위치 복원
  useEffect(() => {
    const savedScrollY = sessionStorage.getItem('savedScrollY');
    if (savedScrollY) {
      // DOM이 완전히 렌더링된 후 스크롤 위치 복원
      const timer = setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollY));
        sessionStorage.removeItem('savedScrollY');
      }, 200);

      return () => clearTimeout(timer);
    }
    return;
  }, [districtId]);

  if (loading) {
    return (
      <ResultLayout>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontSize: '1.2rem',
            color: '#666',
          }}
        >
          로딩 중...
        </div>
      </ResultLayout>
    );
  }

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
              gap: '50px',
              paddingTop: '100px',
            }}
          >
            <TitleSection districtData={districtData} />
            <SummarySection />

            {/* StrengthWeaknessIndexSection을 조건부로 렌더링 */}
            <div style={{ position: 'relative' }}>
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
          style={{
            position: 'fixed',
            top: '30px',
            left: 0,
            right: 0,
            zIndex: 1000,
            background: 'white',
            borderRadius: '20px',
            width: '80%',
            margin: '0 auto',
            // boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            animation: 'slideDown 0.3s ease-out',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <DistrictSelectSection isFloating={true} />
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </ResultLayout>
  );
}
