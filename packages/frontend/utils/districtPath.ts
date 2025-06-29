// 한글-영문 매핑
const PROVINCE_MAPPING: Record<string, string> = {
  강원특별자치도: 'gangwon',
  경기도: 'gyeonggi',
  경상남도: 'gyeongnam',
  경상북도: 'gyeongbuk',
  광주광역시: 'gwangju',
  대구광역시: 'daegu',
  대전광역시: 'daejeon',
  부산광역시: 'busan',
  서울특별시: 'seoul',
  세종특별자치시: 'sejong',
  울산광역시: 'ulsan',
  인천광역시: 'incheon',
  전라남도: 'jeonnam',
  전라북도: 'jeonbuk',
  제주특별자치도: 'jeju',
  충청남도: 'chungnam',
  충청북도: 'chungbuk',
};

// 지역별 매핑 (province와 district를 함께 고려)
const getDistrictMapping = (
  provinceName: string,
  districtName: string,
): string => {
  // 서울특별시
  if (provinceName === '서울특별시') {
    const seoulMapping: Record<string, string> = {
      종로구: 'jongno',
      중구: 'jung-seoul',
      용산구: 'yongsan',
      성동구: 'seongdong',
      광진구: 'gwangjin',
      동대문구: 'dongdaemun',
      중랑구: 'jungnang',
      성북구: 'seongbuk',
      강북구: 'gangbuk',
      도봉구: 'dobong',
      노원구: 'nowon',
      은평구: 'eunpyeong',
      서대문구: 'seodaemun',
      마포구: 'mapo',
      양천구: 'yangcheon',
      강서구: 'gangseo',
      구로구: 'guro',
      금천구: 'geumcheon',
      영등포구: 'yeongdeungpo',
      동작구: 'dongjak',
      관악구: 'gwanak',
      서초구: 'seocho',
      강남구: 'gangnam',
      송파구: 'songpa',
      강동구: 'gangdong',
    };
    return (
      seoulMapping[districtName] ||
      districtName
        .toLowerCase()
        .replace(/시|군|구/g, '')
        .replace(/\s+/g, '')
    );
  }

  // 인천광역시
  if (provinceName === '인천광역시') {
    const incheonMapping: Record<string, string> = {
      중구: 'jung-incheon',
      동구: 'dong-incheon',
      미추홀구: 'michuhol',
      연수구: 'yeonsu',
      남동구: 'namdong',
      부평구: 'bupyeong',
      계양구: 'gyeyang',
      서구: 'seo-incheon',
      강화군: 'ganghwa',
      옹진군: 'ongjin',
    };
    return (
      incheonMapping[districtName] ||
      districtName
        .toLowerCase()
        .replace(/시|군|구/g, '')
        .replace(/\s+/g, '')
    );
  }

  // 경기도
  if (provinceName === '경기도') {
    const gyeonggiMapping: Record<string, string> = {
      수원시: 'suwon',
      성남시: 'seongnam',
      의정부시: 'uijeongbu',
      안양시: 'anyang',
      부천시: 'bucheon',
      광명시: 'gwangmyeong',
      평택시: 'pyeongtaek',
      동두천시: 'dongducheon',
      안산시: 'ansan',
      고양시: 'goyang',
      과천시: 'gwacheon',
      구리시: 'guri',
      남양주시: 'namyangju',
      오산시: 'osan',
      시흥시: 'siheung',
      군포시: 'gunpo',
      의왕시: 'uiwang',
      하남시: 'hanam',
      용인시: 'yongin',
      파주시: 'paju',
      이천시: 'icheon',
      안성시: 'anseong',
      김포시: 'gimpo',
      화성시: 'hwaseong',
      광주시: 'gwangju-gyeonggi',
      여주시: 'yeoju',
      양평군: 'yangpyeong',
      고양군: 'goyang-gun',
      연천군: 'yeoncheon',
      가평군: 'gapyeong',
      포천군: 'pocheon',
    };
    return (
      gyeonggiMapping[districtName] ||
      districtName
        .toLowerCase()
        .replace(/시|군|구/g, '')
        .replace(/\s+/g, '')
    );
  }

  // 전라북도
  if (provinceName === '전라북도') {
    const jeonbukMapping: Record<string, string> = {
      전주시: 'jeonju',
      군산시: 'gunsan',
      익산시: 'iksan',
      정읍시: 'jeongeup',
      남원시: 'namwon',
      김제시: 'gimje',
      완주군: 'wanju',
      진안군: 'jinan',
      무주군: 'muju',
      장수군: 'jangsu',
      임실군: 'imsil',
      순창군: 'sunchang',
      고창군: 'gochang',
      부안군: 'buan',
    };
    return (
      jeonbukMapping[districtName] ||
      districtName
        .toLowerCase()
        .replace(/시|군|구/g, '')
        .replace(/\s+/g, '')
    );
  }

  // 기본 처리
  return districtName
    .toLowerCase()
    .replace(/시|군|구/g, '')
    .replace(/\s+/g, '');
};

interface RegionData {
  name: string;
  province_id?: number;
  province?: {
    name: string;
  };
}

interface GenerateDistrictPathOptions {
  getProvinceById: (id: number) => { name: string } | null;
}

/**
 * 지역 데이터를 기반으로 URL 경로를 생성하는 함수
 * @param region - 지역 데이터 객체
 * @param options - 추가 옵션 (getProvinceById 함수 등)
 * @returns URL 경로 문자열 (예: 'seoul-gangnam')
 */
export const generateDistrictPath = (
  region: RegionData | null | undefined,
  options?: GenerateDistrictPathOptions,
): string => {
  if (!region?.name) {
    return 'jeonbuk-jeonju'; // 기본값
  }

  // province 정보 가져오기
  let provinceName = '';
  if (region.province?.name) {
    // selectedRegion의 경우 province 정보가 직접 포함됨
    provinceName = region.province.name;
  } else if (region.province_id && options?.getProvinceById) {
    // selectedDistrict의 경우 province_id를 통해 정보 가져오기
    const province = options.getProvinceById(region.province_id);
    provinceName = province?.name || '';
  }

  if (!provinceName) {
    return 'jeonbuk-jeonju'; // 기본값
  }

  // province name을 영문으로 변환
  const provinceNameEn =
    PROVINCE_MAPPING[provinceName] ||
    provinceName
      .toLowerCase()
      .replace(/특별자치도|광역시|특별시/g, '')
      .replace(/\s+/g, '');

  // district name을 영문으로 변환 (province 정보를 함께 고려)
  const districtName = getDistrictMapping(provinceName, region.name);

  return `${provinceNameEn}-${districtName}`;
}; 