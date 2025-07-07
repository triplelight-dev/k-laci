'use client';

import ContentSection from '@/components/sections/ContentSection';
import { ROUTES } from '@/constants/data';
import React from 'react';

const UniquenessSection: React.FC = () => {
  const sectionData = {
    badgeText: '랭킹을 넘어 전략적 포지셔닝으로',
    title: {
      lines: ['데이터 비교 분석으로 찾아낸', '도시별 고유의 지역력'],
      gradientWords: [],
      // gradientWords: ['데이터', '분석'],
    },
    description: {
      texts: [
        `KLACI의 핵심 가치는 모든 지역을 각기 다른 잠재력을 지닌 원석으로 보고, 고유의 지역성(Locality)을 분석하여 로컬 맞춤의 복원 전략을 수립하는 것입니다. 전국 종합 순위부터 유사 그룹별 비교 분석, 혁신도시·해안도시·산업도시 등 특정 주제별 심층 분석까지, 우리 지역의 현재 위치를 다각도로 조망하는 상세 데이터를 제공합니다.`,
      ],
      boldTexts: [
        '다양한 비교 집단 내에서 우리 지역이 발휘할 수 있는 ',
        '숨겨진 강점을 확인하고 새로운 각도로 성장 전략의 기회를 탐색해 보세요.',
      ],
    },
    button: {
      text: '주요 결과 보러가기',
      route: ROUTES.RESULT,
    },
    bottomImage: {
      src: '/home/uniqueness.png',
    },
  };

  return <ContentSection {...sectionData} />;
};

export default UniquenessSection;
