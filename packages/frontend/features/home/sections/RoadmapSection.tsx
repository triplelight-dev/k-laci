'use client';

import ContentSection from '@/components/sections/ContentSection';
import { ROUTES } from '@/constants/data';
import React from 'react';

const RoadmapSection: React.FC = () => {
  const sectionData = {
    badgeText: '지역자산역량지수 활용 가이드',
    title: {
      lines: ['5단계로 완성하는', '내발적 성장 로드맵'],
      gradientWords: [],
      // gradientWords: ['자산력', '잠재력']
    },
    description: {
      texts: [
        'KLACI의 지자체 웹 리포트는 누구나 무료로 이용할 수 있습니다.',
      ],
      boldTexts: [
        '간단한 5단계 절차를 통해 우리 지역만의 자산력과',
        '잠재력을 확인하고 미래 전략을 수립해보세요.',
      ],
    },
    button: {
      text: '지자체 조회 바로가기',
      route: ROUTES.RESULT,
    },
    bottomImage: {
      src: '/home/roadmap.png',
      transparentBackground: true,
    },
  };

  return <ContentSection {...sectionData} />;
};

export default RoadmapSection;
