'use client';

import { useState, useEffect } from 'react';
import ResultLayout from '@/components/layout/ResultLayout';

// sections
import DistrictSearchSection from './sections/DistrictSearchSection';
import DistrictSelectSection from './sections/DistrictSelectSection';
import CategoryRankingSection from './sections/CategoryRankingSection';
import SummarySection from './sections/SummarySection';
import JewelChartSection from './sections/JewelChartSection';
import TitleSection from './sections/TitleSection';
import PreRegistrationSection from './sections/PreRegistrationSection';
import RankingSection from './sections/RankingSection';

export default function ResultsPage() {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // DistrictSearchSection의 높이를 고려하여 스크롤 위치 계산
      const scrollThreshold = 200; // 스크롤 임계값 (조정 가능)
      const scrollY = window.scrollY;

      setIsFloating(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

        {/* 원래 위치의 DistrictSelectSection (플로팅이 아닐 때만 표시) */}
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
              width: '50%',
              gap: '100px',
              paddingTop: '100px',
            }}
          >
            <JewelChartSection />
            <TitleSection />
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
          // paddingTop: '100px',
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

      {/* 플로팅 DistrictSelectSection (플로팅일 때만 표시) */}
      {isFloating && (
        <div
          style={{
            position: 'fixed',
            top: '30px', // 최상단에서 30px 간격
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
