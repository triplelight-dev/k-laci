'use client';

import { ROUTES } from '@/constants/data';
import React from 'react';
import ContentSectionVertical from './ContentSectionVertical';

const StrategySection: React.FC = () => {
  return (
    <ContentSectionVertical
      badgeText="KLACI x 대한민국 진짜성장"
      title={{
        lines: ['지역력 진단으로 시작하는', '5극 3특 국가균형발전 전략'],
        gradientWords: [],
      }}
      description={{
        texts: [
          `새 정부의 국가균형발전 전략이 '5극 3특' 체제와 함께 본격적인 시작을 알렸습니다. 이는 지역이 성장의 중심이 되는 선진 경제로 나아가는 국가적 전환입니다. 5극 초광역권, 3개 특별자치도 체제가 구축되는 국토재편의 성공을 위해서는, 모든 지역이 자신만의 특화 전략을 갖추는 것이 무엇보다 중요합니다.`,
          `ㅤ`,
          `KLACI는 표준화된 데이터로 구성된 '지역력 진단'을 통해, 각 지역이 가진 자원과 `,
          `기회를 발견하고 위기에 대응할 최적의 성장 경로 탐색을 돕습니다.`,
        ],
        boldTexts: [
          '우리 지역의 성공 전략, 지금 바로 증거 기반의 진단에서부터 시작해 보세요.',
        ],
      }}
      button={{
        text: '5극 3특 리스트 전체보기',
        route: ROUTES.RESULT,
      }}
      image={{
        src: '/home/strategy.png',
        height: '500px',
      }}
      styling={{
        backgroundColor: '#1a1d2a',
        textColor: 'white',
      }}
    />
  );
};

export default StrategySection;
