'use client';

import { Flex } from '@chakra-ui/react';
import React from 'react';

interface FrameworkItem {
  badge: string;
  title: string;
  description: string[];
  image: string;
  additionalImage?: string;
}

const FrameworkSection: React.FC = () => {
  const frameworkItems: FrameworkItem[] = [
    {
      badge: 'CATEGORY',
      title: '4대 핵심범주',
      description: [
        `KLACI는 기존 모델의 한계를 극복하기 위해 지역의 존립과 발전에 가장 본질적인 요소를 진단할 수 있는 새로운 분석 틀을 모색했습니다. 국내외 선행 연구 및 성공적인 지역 발전 모델에 대한 총체적인 분석을 통해, 지역의 복원과 지속가능성에 가장 높은 설명력과 영향력을 가진 네 가지 핵심 키워드로 인구, 경제, 생활, 안전을 도출했습니다. 4대 핵심범주는 각 지역이 보유한 자산역량을 성격, 유형, 지향점에 따라 진단할 수 있는 실용적인 기틀입니다.`,
      ],

      image: '/about/core_categories.png',
    },
    {
      badge: 'INDEX',
      title: '55개 세부지표',
      description: [
        `4가지 주요 범주를 통해 지방자치단체의 역량을 종합적으로 평가하기 위해 사용되는 구체적이고 측정 가능한 55개의 개별 항목입니다. 이 지표들은 지역의 강점과 약점, 자본과 부채를 포함한 총체적 자산을 객관적으로 분석하는 기초 자료가 됩니다. 55개 세부지표는 3년에 걸친 심층 연구를 바탕으로 포괄적인 데이터를 수집하여 다각적인 평가 그리고 여러 전문가 그룹의 철저한 검증을 거쳐 구성되었습니다.`,
      ],
      image: '/about/indexes.png',
      additionalImage: '/about/indexes_additional.png',
    },
    {
      badge: 'ARCHETYPE',
      title: '8가지 원형',
      description: [
        `4대 핵심범주에서 나타나는 특성을 점수 구간에 따라 우열이 아닌 고유한 발전 경로로 해석하여 도출한 8가지 기본 유형입니다. 이는 지자체의 핵심 성향을 나타내며, 16가지 조합 프로필을 구성하는 기본 단위가 됩니다. `,
        `원석 레이더 차트는 8가지 원형에 따라 각 지자체의 자산역량 구조를 다각적이고 심층적으로 분석하는 핵심적인 시각화 도구입니다. 이 차트는 55개 세부지표에서 획득한 점수를 각 지표의 배점에 따라 합산해 도출된 4대 핵심범주별 점수로부터 시작됩니다. 범주별 점수는 8가지 원형 점수로 환산되어 레이더 차트의 각 축에 표시됩니다.`,
        `예를 들어, 어떤 지자체가 '인구성장력' 범주에서 100점 만점 환산 70점을 획득했다면, 이는 강점 원형인 '인구성장형(G)' 점수 70점과 약점 원형인 '인구정착형(S)' 점수 30점(100-70점)으로 동시에 변환됩니다. 이러한 방식으로 8개 원형의 점수를 모두 계산하고 각 꼭지점을 연결하면, 세상에 단 하나뿐인 그 지자체만의 고유한 '원석' 모양이 완성됩니다.`,
      ],
      image: '/about/archetype.png',
    },
    {
      badge: 'TYPE PROFILE',
      title: '16개 유형',
      description: [
        `지역자산역량지수는 개인의 성격유형검사처럼 총 16가지 프로필을 통해 각 지자체를 복합적이고 다층적인 존재로 이해합니다. 이는 단편적인 평가를 넘어 지자체의 강점과 기회, 도전 과제를 종합적으로 식별하여 실현 가능한 발전 방향을 설정하도록 돕습니다.`,
        `각 프로필은 네 자리 알파벳으로 구성된 유형코드로 표현되며, 지역이 가진 역량을 직관적으로 파악할 수 있도록 돕습니다. 이 코드는 8가지 원형의 영문 첫 글자 조합으로 구성되며, 대소문자 구분을 통해 역량의 정도를 표현합니다. 각 지자체는 동일 유형 내 다른 지자체와의 비교는 물론, 개별 지표 수준의 상세 분석을 바탕으로 자신만의 고유한 프로필에 기반한 맞춤형 정책을 개발하고 지속 가능한 발전을 효과적으로 추진할 수 있습니다.`,
        `예를 들어 'GTVA'와 'gtva'는 동일한 원형 조합을 가지지만, 전자는 모든 강점 분야에서 압도적인 역량을, 후자는 평균을 소폭 상회하는 수준의 역량을 가졌음을 나타냅니다. 같은 유형코드 내에서도 강점과 약점의 정도에 따라 해당 지자체가 보유한 자산역량과 기회, 그리고 당면 과제의 시급성이 다르다는 것을 내포합니다. `,
      ],
      image: '/about/types.png',
    },
  ];

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1400px',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        padding: '120px 0px',
        alignItems: 'center',
        marginBottom: '230px',

      }}
    >
      {/* 섹션 타이틀 */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '60px',
        }}
      >
        <h2
          style={{
            fontSize: '48px',
            fontWeight: '600',
            color: 'white',
            marginBottom: '12px',
            lineHeight: '1.2',
          }}
        >
          지역자산역량지수 프레임워크
        </h2>
        <p
          style={{
            fontSize: '18px',
            fontWeight: '600',
            color: 'white',
            opacity: 0.8,
            textTransform: 'uppercase',

          }}
        >
          KOREA LOCAL ASSET COMPETENCY INDEX FRAMEWORK
        </p>

        <Flex gap='9px' width='100%' justifyContent='center' margin='42px 0' height='fit-content'>
          {frameworkItems.map((item) => (
            <div key={item.badge}
              style={{
                backgroundColor: 'transparent',
                width: 'fit-content',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: '400',
                marginBottom: '16px',
                border: '1px solid white',
              }}
            >
              {item.badge}
            </div>
          ))}
        </Flex>

        {/* 추가 설명 텍스트 */}
        <p
          style={{
            fontSize: '18px',
            fontWeight: '400',
            color: 'white',
            lineHeight: '28px',
            opacity: 0.9,
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          KLACI는 대한민국 229개 지방자치단체를 55개 세부지표 데이터로 분석하고
          <br />
          인구, 경제, 생활, 안전 등 4대 핵심범주의 점수에 따라
          유형화(Classification)하여
          <br />각 지자체가 가진 고유한 특성과 발전 전략을 다각적으로 진단하도록
          설계되었습니다.
        </p>
      </div>

      {/* 세로 배치 레이아웃 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '230px',
          width: '100%',
          marginTop: '100px',
        }}
      >
        {frameworkItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: '156px',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            {/* 좌측: 텍스트 콘텐츠 */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                maxWidth: '654px',
              }}
            >
              {/* 뱃지 */}
              <div
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '16px',
                  border: '1px solid white',
                }}
              >
                {item.badge}
              </div>

              {/* 타이틀 */}
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '20px',
                  lineHeight: '68px',
                }}
              >
                {item.title}
              </div>

              {/* 설명 텍스트들 */}
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  color: 'white',
                  lineHeight: '28px',
                  opacity: 0.9,
                  maxWidth: '654px',
                  marginBottom: '67px',
                }}
              >
                {item.description.map((text, textIndex) => (
                  <div
                    key={textIndex}
                    style={{
                      marginBottom:
                        textIndex < item.description.length - 1 ? '30px' : '0',
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
              {item.additionalImage && <img
                src={item.additionalImage}
                style={{
                  width: '100%',
                }}
              />}
            </div>

            {/* 우측: 이미지 (화면 꽉 채움) */}

            <div style={{ flex: 1, display: 'flex', alignItems: 'top', justifyContent: 'center' }}>
              {index === 2 ? <div
                style={{
                  padding: '90px 60px',
                  borderRadius: '52px',
                  background: '#191B22',
                  width: '100%',
                  height: '100%',
                }}
              ><img
                  src={item.image}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                  }}
                />
              </div> : <img
                src={item.image}
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                }}
              />}
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default FrameworkSection;
