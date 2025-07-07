interface KlaciCodeItem {
  code: string | undefined;
  name: string;
  position: number;
  description: string;
}

type KlaciCodeResult = KlaciCodeItem[];

// 유효한 KLACI 코드 문자들
type ValidKlaciCode = 'S' | 'G' | 'T' | 'C' | 'V' | 'M' | 'R' | 'A';

export function parseKlaciCode(klaciCode: string): KlaciCodeResult {
  // 소문자를 대문자로 변환
  const upperCode = klaciCode.toUpperCase();

  // 4자리가 아닌 경우 에러 처리
  if (upperCode.length !== 4) {
    throw new Error('KLACI 코드는 4자리여야 합니다.');
  }

  // 유효한 코드인지 검증
  const validCodes: ValidKlaciCode[] = ['S', 'G', 'T', 'C', 'V', 'M', 'R', 'A'];
  for (let i = 0; i < 4; i++) {
    if (!validCodes.includes(upperCode[i] as ValidKlaciCode)) {
      throw new Error(`유효하지 않은 KLACI 코드 문자입니다: ${upperCode[i]}`);
    }
  }

  const result: KlaciCodeResult = [];

  // 각 자리별로 의미 매핑 (순서 보장)
  const codeMappings: KlaciCodeItem[] = [
    {
      position: 0,
      code: upperCode[0],
      name: upperCode[0] === 'G' ? '인구성장형' : '인구정착형',
      description: paragraphs[upperCode[0] as ValidKlaciCode],
    },
    {
      position: 1,
      code: upperCode[1],
      name: upperCode[1] === 'T' ? '경제혁신형' : '경제정속형',
      description: paragraphs[upperCode[1] as ValidKlaciCode],
    },
    {
      position: 2,
      code: upperCode[2],
      name: upperCode[2] === 'V' ? '생활역동형' : '생활정체형',
      description: paragraphs[upperCode[2] as ValidKlaciCode],
    },
    {
      position: 3,
      code: upperCode[3],
      name: upperCode[3] === 'R' ? '안전회복형' : '안전정진형',
      description: paragraphs[upperCode[3] as ValidKlaciCode],
    },
  ];

  result.push(...codeMappings);

  return result;
}

const paragraphs: Record<ValidKlaciCode, string> = {
  S: `인구정착형은 인구 관련 주요 지표들의 가중 배점을 합산한 총점이 낮아, 유입 인구 수를 추월한 유출 인구 수, 둔화하는 인구 증가세 등 해당 지역의 인구가 감소세에 접어들었거나 인구 구조가 외부 요인 없이 안정기에 접어들었음을 시사하는 유형입니다. 즉 단순히 인구가 감소하는 지역만이 아니라 거주 인구의 구조적 변동성이 낮은 성숙 단계의 지역까지 포괄합니다.`,
  G: `인구성장형은 인구 관련 주요 지표들의 가중 배점을 합산한 총점이 높아, 해당 지역으로의 인구 유입 동력과 자연적·사회적 인구 증가 잠재력의 총체적 규모가 큰 편에 속하는 유형입니다. 이는 해당 지역으로의 인구 유입이 활발하게 이루어지고 있으며, 특히 젊은 세대에게 매력적인 요소를 갖추고 있거나 출산 및 양육 환경이 상대적으로 양호하여 자연적·사회적 인구 증가 잠재력이 높음을 시사합니다.`,
  T: `경제혁신형은 GRDP 성장률, 벤처기업 수, 특허 건수 등 지역경제의 역동성과 미래 성장 잠재력을 나타내는 지표의 가중 배점을 합산한 총점이 높아, 경제적 혁신 역량 및 성장 동력의 총체적 규모가 큰 유형입니다. 경제혁신형 지역은 전통적인 산업 구조에 안주하지 않고 새로운 성장 동력을 적극적으로 발굴하고 있으며, 따라서 경영 혁신과 첨단기술 기반의 경제활동이 활발하게 이루어지고 있습니다. 이러한 지역은 변화에 대한 적응력이 뛰어나고, 미래 산업을 선도할 가능성을 품고 있습니다.`,
  C: `경제정속형은 GRDP 성장률, 벤처기업 수, 특허 건수 등 혁신 관련 지표를 비롯해 재정자립도, 사업체 수 등 경제 관련 지표들의 가중 배점을 합산한 총점이 낮아, 지역경제 전반의 활력과 성장 동력이 약한 유형을 의미합니다. 경제정속형 지역은 급격한 경제 구조의 변화가 없으며, 기존 산업 기반이 약화하는 양상을 보입니다. 이러한 경제적 '정속(定速)' 상태에 머물며 외부 변화에 대한 대응이 늦어질 경우 경제 침체를 넘어 점진적 쇠퇴 국면에 접어들 위험이 있습니다.`,
  V: `생활역동형은 주거·교육·교통·여가 등 생활 환경 전반에 관한 지표들의 가중 배점을 합산한 총점이 높아, 생활 기반의 총체적 역동성이 큰 유형입니다. 즉  주민의 삶의 질을 높이는 다양한 기반 시설이 잘 갖추어져 있고 교육 및 문화 활동이 활발하게 이루어지는 등 편리하고 다채로운 일상생활을 위한 환경이 조성돼 있는 지역을 의미합니다. `,
  M: `생활정체형은 주거·교육·교통·여가 등 생활 환경 전반에 관한 지표들의 가중 배점을 합산한 총점이 낮아, 생활 환경 전반의 총체적 활력이 부족한 유형입니다. 생활의 역동성이나 편의성이 현저히 떨어지고, 주거환경 마저 열악하여 주민들의 정주 만족도가 낮고 인구 유출의 가능성이 높은 특성을 보입니다. '성숙(Mature)' 상태가 '쇠퇴' 또는 '기반 약화'로 전개되지 않도록, 생활 환경 전반에 걸친 개선이 필요합니다.`,
  R: `안전회복형은 사망률, EQ5D, 자살률, 의료 접근성, 지역안전등급 등 안전 및 회복 관련 지표들의 가중 배점을 합산한 총점이 높아, 안전 및 회복 역량의 총체적 수준이 우수한 유형입니다. 이는 주민의 신체적·정신적 건강 수준이 높고 물리적·사회적 안전망이 잘 갖추어져 있음을 의미합니다. 나아가 이러한 지역은 쾌적한 환경을 바탕으로 다양한 위기 상황이 발생하더라도 공동체의 복원력을 통해 빠르게 회복할 수 있는 잠재력을 갖추고 있습니다.`,
  A: `안전정진형은 사망률, EQ5D, 자살률, 의료 접근성, 지역안전등급 등 안전 및 회복 관련 지표들의 가중 배점을 합산한 총점이 낮아, 안전 및 회복 역량의 총체적 기반이 취약한 유형입니다. 이러한 지역은 주민의 건강, 안전, 복지, 환경 등 다양한 측면에서 취약점이 드러나며, 지역사회의 안전 수준과 회복탄력성을 높이기 위한 노력이 시급합니다. '정진(精進)'이라는 명칭처럼, 현재의 어려움을 극복하고 더 나은 상태로 나아가기 위한 적극적이고 집중적인 정책적 개입이 필요한 단계임을 시사합니다.`,
};
