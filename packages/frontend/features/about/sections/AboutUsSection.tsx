'use client';

import { DARK_MODE_COLORS } from '@/utils/colors';
import React from 'react';

const AboutUsSection: React.FC = () => {
  const descriptionTexts = [
    '대한민국이 직면한 인구감소와 지역소멸이라는 시대적 난제는 수도권으로의 과도한 집중과 이로 인한 지역 불균형에서 비롯됩니다. 기존의 중앙 주도, 예산 투입 중심의 정책이 한계를 보이는 가운데, 지역 고유의 자산과 잠재력에 기반한 새로운 발전 모델의 필요성이 절실해졌습니다.',
    '이러한 문제의식 아래, 데이터 기반의 임팩트 솔루션 전문 기업 트리플라잇과 로컬리즘 연구를 선도하는 한양대학교 로컬리즘연구회는 지역의 자생적 성장과 지속가능한 미래를 열기 위해 지역자산역량지수(KLACI)를 공동 연구개발했습니다.',
  ];

  const organizations = [
    {
      title: '트리플라잇주식회사',
      description:
        '트리플라잇은 빅데이터와 AI 기술을 활용해 사회문제를 정의하고 해결 전략을 제시하는 임팩트 전략 허브(Impact Strategy Hub)입니다. 사회·환경적 가치를 측정하고 관리하는 임팩트 측정·관리 및 임팩트 인덱스 개발에 독보적인 전문성을 보유하고 있으며, 기업, 비영리기관, 공공기관 등 다양한 파트너들과 협력하며 긍정적 사회 변화를 가속하고 있습니다. 트리플라잇은 이러한 데이터 분석 역량과 솔루션 개발 경험을 바탕으로, 각 지역의 특성을 객관적이고 과학적으로 진단할 수 있는 정교한 프레임워크를 설계하고 서비스로 구현하는 역할을 수행했습니다.',
      boldKeyword: '임팩트 전략 허브(Impact Strategy Hub)',
      logo: '/triplelight_logo_gray.png',
      logoHeight: '32px',
    },
    {
      title: '한양대학교 로컬리즘연구회',
      description:
        '한양대학교 로컬리즘연구회는 국내 최고의 인구문제 및 지역균형발전 전문가로 꼽히는 전영수 국제학대학원 교수를 중심으로 운영됩니다. 전영수 교수는 저서 인구소멸과 로컬리즘 등을 통해 인구 위기의 해법으로 지역 고유의 가치와 자생력을 강조하는 로컬리즘 패러다임을 제시해왔습니다. 연구회는 다년간 축적해 온 인구구조 변화 분석과 지역 활성화 연구를 바탕으로 KLACI의 핵심 철학과 이론적 토대를 구축하고 지역이 주체가 되어 지속가능한 발전 모델을 구축할 수 있도록 학술적 방향성을 제시하고 지표의 타당성을 검증했습니다.',
      boldKeyword: '인구소멸과 로컬리즘',
      logo: '/hyu_logo.png',
      logoHeight: '80px',
    },
  ];

  const handleConsultingClick = () => {
    // 컨설팅 문의 처리 로직
    console.log('컨설팅 문의 클릭');
  };

  // 텍스트에서 특정 키워드를 볼드 처리하는 함수
  const renderTextWithBold = (text: string, boldKeyword: string) => {
    const parts = text.split(boldKeyword);
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && <strong>{boldKeyword}</strong>}
      </React.Fragment>
    ));
  };

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: DARK_MODE_COLORS.background,
        maxWidth: '1100px',
        borderRadius: '32px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: '100px 40px',
        marginBottom: '80px',
      }}
    >
      {/* 좌측 섹션 */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingRight: '40px',
        }}
      >
        {/* 상단 뱃지 */}
        <div
          style={{
            backgroundColor: 'transparent',
            border: '1px solid white',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: '600',
            marginBottom: '24px',
          }}
        >
          About US
        </div>

        {/* 타이틀 */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: '700',
            color: 'white',
            lineHeight: '1.3',
            textAlign: 'left',
            marginBottom: '32px',
          }}
        >
          연구진 및 기관 소개
        </div>

        {/* 문단들 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {descriptionTexts.map((text, index) => (
            <div
              key={index}
              style={{
                fontSize: '14px',
                color: 'white',
                lineHeight: '1.6',
                opacity: 0.9,
                textAlign: 'left',
              }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* 버튼 */}
        <button
          onClick={handleConsultingClick}
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 24px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'center',
            minWidth: '200px',
          }}
        >
          컨설팅, 연구 및 세미나 문의
          <img
            src="/arrow_button_icon.png"
            alt="화살표 아이콘"
            style={{
              width: '10px',
              height: '10px',
              display: 'block',
            }}
          />
        </button>
      </div>

      {/* 구분선 */}
      <div
        style={{
          width: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          margin: '0 40px',
        }}
      />

      {/* 우측 섹션 */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingLeft: '40px',
        }}
      >
        {organizations.map((org, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: index < organizations.length - 1 ? '40px' : '0',
              }}
            >
              {/* 조직명 */}
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: 'white',
                  lineHeight: '1.3',
                  textAlign: 'left',
                  marginBottom: '35px',
                }}
              >
                {org.title}
              </div>

              {/* 설명 */}
              <div
                style={{
                  fontSize: '14px',
                  color: 'white',
                  lineHeight: '1.6',
                  opacity: 0.9,
                  textAlign: 'left',
                  marginBottom: '45px',
                }}
              >
                {renderTextWithBold(org.description, org.boldKeyword)}
              </div>

              {/* 로고 */}
              <img
                src={org.logo}
                alt={`${org.title} 로고`}
                style={{
                  height: org.logoHeight,
                  width: 'auto',
                  display: 'block',
                }}
              />
            </div>

            {/* 기관 간 구분선 (마지막 기관이 아닌 경우) */}
            {index < organizations.length - 1 && (
              <div
                style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  margin: '40px 0',
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;
