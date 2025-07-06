'use client';

import { Principle } from '@/types/common';
import React from 'react';

interface PrincipleBoxProps {
  principle: Principle;
  showRightBorder?: boolean;
}

const PrincipleBox: React.FC<PrincipleBoxProps> = ({
  principle,
  showRightBorder = false,
}) => {
  return (
    <div
      style={{
        flex: 1,
        padding: '40px 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
      }}
    >
      {/* 뱃지 */}
      <div
        style={{
          backgroundColor: 'transparent',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '10px',
          fontSize: '12px',
          fontWeight: '400',
          marginBottom: '20px',
          border: '1px solid white',
        }}
      >
        {principle.badge}
      </div>

      {/* 제목 */}
      <div
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '35px',
          lineHeight: '1.3',
        }}
      >
        {principle.title}
      </div>

      {/* 서브타이틀 */}
      <div
        style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '20px',
          lineHeight: '1.4',
        }}
      >
        {principle.subtitle}
      </div>

      {/* 설명 텍스트 */}
      <div
        style={{
          fontSize: '14px',
          color: 'white',
          lineHeight: '1.6',
          opacity: 0.9,
        }}
      >
        {principle.description}
      </div>

      {/* 오른쪽 구분선 */}
      {showRightBorder && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: '25%',
            height: '60%',
            width: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
        />
      )}
    </div>
  );
};

const PrincipleSection: React.FC = () => {
  const principles: Principle[] = [
    {
      badge: 'LOCALITY',
      title: '지역성',
      subtitle: '로컬리즘 기반 자립적 발전',
      description:
        '중앙의 지시나 외부 시혜에 의존하지 않고 지역 스스로 발전의 주체가 되어 고유의 자산을 발굴·활용하는 내발적·자립적 발전을 지향합니다. 이는 지역 자산의 차별성과 경쟁력을 확보하고, 지역 중심의 지속가능한 회복 시스템을 구축하는 것을 핵심으로 합니다.',
    },
    {
      badge: 'CONCRETENESS',
      title: '구체성',
      subtitle: '객관적 데이터 기반 정책 결정',
      description:
        '55개 세부지표를 기반으로 지역의 특성과 상대적 위치를 반영한 정량적 데이터를 제시하고, 핵심범주에 따라 강점과 약점으로 구분합니다. 이를 통해 지역의 현주소를 정밀하게 진단하며, 보유한 강점을 기회로 활용하는 맞춤형 균형발전 전략의 근거를 마련합니다.',
    },
    {
      badge: 'SCALABILITY',
      title: '확장성',
      subtitle: '다층적 연계와 융합을 통한 시너지 창출',
      description:
        '지표 간 상관관계 분석을 통해 단일 사업을 넘어 다양한 자산의 연계와 융합을 유도하여 무한한 로컬리즘 실행 모델을 창출합니다. 이러한 다층적 접근은 단순한 합 이상의 시너지 효과를 일으켜, 지역 스스로 생태계를 복원하고 지속적인 개선을 이루도록 지원합니다.',
    },
  ];

  return (
    <div
      style={{
        width: '100%',
        minHeight: '500px',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        padding: '80px 20px',
        alignItems: 'center',
      }}
    >
      {/* 타이틀 */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '60px',
        }}
      >
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '12px',
            lineHeight: '1.2',
          }}
        >
          지역자산역량지수 3대원칙
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: 'white',
            opacity: 0.8,
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          KOREA LOCAL ASSET COMPETENCY INDEX PRINCIPLES
        </p>
      </div>

      {/* 원칙 박스들 */}
      <div
        style={{
          display: 'flex',
          maxWidth: '1000px',
          width: '100%',
          gap: '0',
        }}
      >
        {principles.map((principle, index) => (
          <PrincipleBox
            key={index}
            principle={principle}
            showRightBorder={index < 2} // 1번째, 2번째 박스에만 오른쪽 구분선
          />
        ))}
      </div>
    </div>
  );
};

export default PrincipleSection;
