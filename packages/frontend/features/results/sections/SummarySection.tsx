import React from 'react';

// 타입 정의
interface SummaryItemData {
  title: string;
  paragraphs: string[];
}

interface SummaryData {
  characteristics: SummaryItemData;
  opportunities: SummaryItemData;
  improvements: SummaryItemData;
}

// 임시 데이터 - 실제로는 props나 API를 통해 받아올 수 있습니다
const summaryData: SummaryData = {
  characteristics: {
    title: '특성',
    paragraphs: [
      '생활·안전·강화형 지역은 인구 구조와 경제 활동은 안정적이지만 다소 정체된(인구정착형, 경제정속형) 모습을 보이는 반면, 생활 환경은 비교적 편리하고 활기찬(생활역동형) 편입니다. 그러나 주민들의 안전, 건강, 복지 수준(안전정진형)은 개선이 필요한 상황입니다.',
      `이는 전통적인 상업 중심지나 구도심 지역이 인구는 더 이상 늘지 않고 경제도 현상 유지 수준이지만, 기존에 형성된 상권이나 교통망 덕분에 생활 편의성은 유지되고 있는 반면, 노후화된 시설이나 변화된 사회 환경에 따른 안전 문제, 또는 고령화에 따른 복지 수요 증가에는 제대로 대응하지 못하고 있는 경우에 해당될 수 있습니다. '겉은 번화하지만 속은 보완이 필요한 도시'의 모습으로, 점진적인 발전을 추구하되 안전 분야에 대한 집중적인 투자가 시급합니다.`,
    ],
  },
  opportunities: {
    title: '기회자산',
    paragraphs: [
      '이미 잘 갖춰진 생활 기반 시설과 활기찬 상권은 이 유형의 중요한 자산입니다. 이를 바탕으로 지역 주민들의 생활 만족도를 유지하면서, 부족한 안전 및 복지 시스템을 개선해 나갈 수 있습니다. 예를 들어, 기존 상업 지구의 환경 개선 사업과 연계하여 안전 시설을 확충하거나, 커뮤니티 센터를 활용하여 주민 건강 증진 프로그램을 운영할 수 있습니다.',
      `안정적인 경제 기반은 급격한 변화 없이 점진적으로 안전 및 복지 분야에 투자할 수 있는 여력을 제공합니다. 지역 주민들의 생활 만족도가 비교적 높다는 점은, 안전 관련 정책 추진 시 주민들의 협조와 참여를 이끌어내는 데 긍정적으로 작용할 수 있습니다. 현재의 취약점을 개선하는 과정에서 지역 맞춤형 안전 모델이나 복지 서비스를 개발하고, 이를 통해 '더 안전하고 살기 좋은 생활 중심지'로의 발전을 도모할 수 있습니다.`,
    ],
  },
  improvements: {
    title: '발전방향',
    paragraphs: [
      '가장 시급한 과제는 안전회복력 강화입니다. ',
      '노후 시설물 안전 점검 및 개선, 범죄 예방을 위한 환경 설계(CPTED) 도입, 재난 대응 시스템 강화, 취약계층을 위한 복지 서비스 확대 등 다각적인 노력이 필요합니다. 인구 정체와 경제의 낮은 성장성은 장기적으로 지역 상권의 위축이나 세수 감소로 이어질 수 있으므로, 기존 상권의 경쟁력을 강화하고 새로운 소비를 창출하기 위한 노력이 필요합니다(특화 거리 조성, 야간 관광 활성화, 온라인 마케팅 지원).',
      '고령 인구 비율이 높을 경우, 이들을 위한 맞춤형 안전·건강·복지 서비스 제공에 더욱 많은 자원과 관심이 요구됩니다. 제한된 재정 하에서 효과적인 정책 추진을 위해서는 주민 의견을 적극적으로 수렴하여 우선순위를 정하고, 민간 자원과의 협력을 통해 효율성을 높이는 방안도 고려해야 합니다.',
    ],
  },
};

// 재사용 가능한 SummaryItem 컴포넌트
interface SummaryItemProps {
  data: SummaryItemData;
}

const SummaryItem: React.FC<SummaryItemProps> = ({ data }) => {
  return (
    <div
      style={{
        display: 'flex',
        paddingBottom: '60px',
      }}
    >
      <div
        style={{
          flex: '0 0 120px',
          color: '#000000',
          fontSize: '1rem',
          fontWeight: 600,
          paddingRight: '2rem',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '6px 14px',
            borderRadius: '5px',
            border: '1px solid #000000',
            backgroundColor: 'transparent',
            color: '#000000',
            fontSize: '0.9rem',
            fontWeight: 600,
          }}
        >
          {data.title}
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {data.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            style={{
              color: '#000000',
              fontSize: '0.9rem',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

const SummarySection: React.FC = () => {
  // 데이터를 배열로 변환하여 매핑
  const summaryItems = [
    summaryData.characteristics,
    summaryData.opportunities,
    summaryData.improvements,
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <section>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '12%',
            paddingBottom: '12%',
            borderRadius: '56px',
            backgroundColor: 'white',
            padding: '80px',
          }}
        >
          {summaryItems.map((item, index) => (
            <SummaryItem key={index} data={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SummarySection;
