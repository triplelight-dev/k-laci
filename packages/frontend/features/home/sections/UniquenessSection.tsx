'use client';

import ContentSection from '@/components/sections/ContentSection';
import { ROUTES } from '@/constants/data';
import React from 'react';

const UniquenessSection: React.FC = () => {
  const sectionData = {
    badgeText: '랭킹을 넘어 전략적 포지셔닝으로',
    title: {
      lines: ['각양각색의 원석처럼', '고유한 지역성'],
      gradientWords: ['데이터', '분석'],
    },
    description: {
      texts: [
        'KLACI의 핵심 가치는 각 지역이 가진 고유의 지역성(Locality)을 분석하여 로컬 맞춤의 복원 전략을 수립하는 것입니다. 세상에 똑같은 모양의 원석이 없듯, 같은 유형의 지역이라도 저마다의 강점 및 약점을 가지며 그에 따라 성장 경로도 달라져야 합니다.',
      ],
      boldTexts: [
        '다양한 비교 집단 내에서 우리 지역이 발휘할 수 있는 ',
        '상대적 강점을 확인하고 새로운 각도로 기회를 탐색해보세요.',
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
