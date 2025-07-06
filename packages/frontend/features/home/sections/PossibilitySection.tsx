'use client';

import ContentSection from '@/components/sections/ContentSection';
import React from 'react';

const PossibilitySection: React.FC = () => {
  const sectionData = {
    badgeText: '뱃지 텍스트',
    title: {
      lines: ['지역의 자산력에서 찾은', '보물같은 잠재력'],
      gradientWords: ['자산력', '잠재력']
    },
    description: {
      texts: [
        'KLACI는 단순히 서열을 매겨 순위를 발표하는 평가가 아닙니다. 인구, 경제, 생활, 안전 영역에 걸친 55개의 지표를 다각적으로 분석하고, 8가지 성장 원형과 16개 발전 유형으로 분류해 지역의 청사진을 제시하는 과학적인 진단 도구입니다. 특히 강점과 약점을 포괄하는 통합적인 지역자산 관점을 통해, 지역의 상황을 이해하고 이에 맞는 기회를 발견하도록 돕습니다.'
      ],
      boldTexts: [
        'KLACI는 증거 기반 정책 수립을 넘어,',
        '모든 지역주체의 지역주도성을 극대화하는 것을 목표로 합니다.'
      ]
    },
    button: {
      text: 'KLACI 소개 더 보기',
      route: '/about'
    },
    bottomImage: {
      src: '/home/possibility.png'
    }
  };

  return <ContentSection {...sectionData} />;
};

export default PossibilitySection;
