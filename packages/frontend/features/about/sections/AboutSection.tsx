'use client';

import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            KLACI에 대하여
          </h1>
          <p className="text-xl text-gray-600">
            지역별 역량지수 분석 서비스
          </p>
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              서비스 소개
            </h2>
            <p className="text-gray-600 leading-relaxed">
              KLACI는 전국 229개 시군구의 역량을 종합적으로 분석하여 제공하는 서비스입니다. 
              경제, 사회, 문화, 환경 등 4가지 핵심 역량을 기준으로 각 지역의 강점과 약점을 
              객관적으로 평가하고 비교할 수 있습니다.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              평가 기준
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">경제 역량</h3>
                <p className="text-sm text-gray-600">
                  지역 경제의 성장성과 안정성을 종합적으로 평가합니다.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">사회 역량</h3>
                <p className="text-sm text-gray-600">
                  주민의 삶의 질과 사회적 안정성을 측정합니다.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">문화 역량</h3>
                <p className="text-sm text-gray-600">
                  문화적 다양성과 창의성을 평가합니다.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">환경 역량</h3>
                <p className="text-sm text-gray-600">
                  환경 보호와 지속가능성을 측정합니다.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              연락처
            </h2>
            <p className="text-gray-600">
              문의사항이 있으시면 <a href="mailto:contact@klaci.com" className="text-blue-600 hover:underline">contact@klaci.com</a>으로 연락주세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 