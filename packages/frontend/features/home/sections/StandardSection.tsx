'use client';

import React from 'react';

const StandardSection: React.FC = () => {
  const standards = [
    {
      title: '경제 역량',
      description: '지역 경제의 성장성과 안정성을 종합적으로 평가',
      icon: '💰',
      metrics: ['GDP 성장률', '고용률', '소득수준', '기업수']
    },
    {
      title: '사회 역량',
      description: '주민의 삶의 질과 사회적 안정성을 측정',
      icon: '🏘️',
      metrics: ['의료시설', '교육시설', '복지시설', '안전지수']
    },
    {
      title: '문화 역량',
      description: '문화적 다양성과 창의성을 평가',
      icon: '🎭',
      metrics: ['문화시설', '축제수', '관광객수', '문화예산']
    },
    {
      title: '환경 역량',
      description: '환경 보호와 지속가능성을 측정',
      icon: '🌱',
      metrics: ['녹지비율', '대기질', '재활용률', '친환경정책']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            평가 기준
          </h2>
          <p className="text-gray-600 text-lg">
            4가지 핵심 역량을 기준으로 지역을 평가합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {standards.map((standard, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{standard.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {standard.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {standard.description}
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                {standard.metrics.map((metric, idx) => (
                  <li key={idx}>• {metric}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandardSection; 