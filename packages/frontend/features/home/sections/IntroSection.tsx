'use client';

import React from 'react';
import Image from 'next/image';

const IntroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Image
            src="/klaci_logo_white.png"
            alt="KLACI Logo"
            width={200}
            height={60}
            className="mx-auto"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          지역별 <span className="text-blue-300">역량지수</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          전국 229개 시군구의 역량을 한눈에 비교하고 분석하세요
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            지역 검색하기
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            상세 분석보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection; 