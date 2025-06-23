'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ResultLayout from '@/components/layout/ResultLayout';

// sections
import DistrictSearchSection from '../sections/DistrictSearchSection';
import DistrictSelectSection from '../sections/DistrictSelectSection';
import CategoryRankingSection from '../sections/CategoryRankingSection';
import SummarySection from '../sections/SummarySection';
import TitleSection from '../sections/TitleSection';
import PreRegistrationSection from '../sections/PreRegistrationSection';
import RankingSection from '../sections/RankingSection';

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

  // 지자체 데이터 매핑
  const districtsMap: Record<string, DistrictData> = {
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
    'incheon-yeonsu': { id: 'incheon-yeonsu', name: '인천시 연수구', rank: 5 },
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

        // 임시로 매핑된 데이터 사용
        const data = districtsMap[districtId];

        if (data) {
          setDistrictData(data);
        } else {
          // 유효하지 않은 districtId인 경우 기본값 사용
          setDistrictData(districtsMap['jeonbuk-jeonju']);
        }
      } catch (error) {
        console.error('Failed to load district data:', error);
        // 에러 시 기본값 사용
        setDistrictData(districtsMap['jeonbuk-jeonju']);
      } finally {
        setLoading(false);
      }
    };

    if (districtId) {
      loadDistrictData();
    }
  }, [districtId]);

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
              gap: '100px',
              paddingTop: '100px',
            }}
          >
            <TitleSection districtData={districtData} />
            <SummarySection />
            <RankingSection />
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: '#F8F8F8',
        }}
      >
        <CategoryRankingSection />
      </div>

      <div
        style={{
          display: 'flex',
          width: '90%',
          justifyContent: 'center',
          background: '#F8F8F8',
          marginTop: '100px',
          marginBottom: '100px',
        }}
      >
        <PreRegistrationSection />
      </div>

      {isFloating && (
        <div
          style={{
            position: 'fixed',
            top: '30px',
            left: 0,
            right: 0,
            zIndex: 1000,
            background: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            animation: 'slideDown 0.3s ease-out',
          }}
        >
          <DistrictSelectSection />
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
