'use client';

import { useDistrict, useGetProvinceById } from '@/store';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import JewelRadarChart from '@/components/atoms/charts/RadarChart';

interface DistrictData {
  id: string;
  name: string;
  rank: number;
}

interface TitleSectionProps {
  districtData?: DistrictData | null;
}

// KLACI Code 원형 컴포넌트
const KlaciCodeCircles: React.FC = () => {
  // KLACI 코드 목업 데이터
  const klaciCodes = [
    { code: 'K', color: '#FF3737' },
    { code: 'L', color: '#FFA600' },
    { code: 'A', color: '#874FFF' },
    { code: 'C', color: '#24CB71' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '24px',
      }}
    >
      {klaciCodes.map((item, index) => (
        <div
          key={index}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: item.color,
            color: 'white',
            border: `2px solid ${item.color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: 600,
          }}
        >
          {item.code}
        </div>
      ))}
    </div>
  );
};

const TitleSection: React.FC<TitleSectionProps> = ({ districtData }) => {
  const router = useRouter();

  // Zustand store에서 선택된 지역 정보 가져오기
  const { selectedDistrict } = useDistrict();
  const getProvinceById = useGetProvinceById();

  const chartData = [85, 30, 80, 30, 25, 70, 40, 36];

  // URL path 생성 함수
  const generateDistrictPath = (district: any): string => {
    if (!district?.name || !district?.province_id) {
      return 'jeonbuk-jeonju'; // 기본값
    }

    const province = getProvinceById(district.province_id);
    if (!province?.name) {
      return 'jeonbuk-jeonju'; // 기본값
    }

    // 한글-영문 매핑
    const provinceMapping: Record<string, string> = {
      '강원특별자치도': 'gangwon',
      '경기도': 'gyeonggi',
      '경상남도': 'gyeongnam',
      '경상북도': 'gyeongbuk',
      '광주광역시': 'gwangju',
      '대구광역시': 'daegu',
      '대전광역시': 'daejeon',
      '부산광역시': 'busan',
      '서울특별시': 'seoul',
      '세종특별자치시': 'sejong',
      '울산광역시': 'ulsan',
      '인천광역시': 'incheon',
      '전라남도': 'jeonnam',
      '전라북도': 'jeonbuk',
      '제주특별자치도': 'jeju',
      '충청남도': 'chungnam',
      '충청북도': 'chungbuk',
    };

    const districtMapping: Record<string, string> = {
      // 서울특별시
      '종로구': 'jongno',
      '중구': 'jung',
      '용산구': 'yongsan',
      '성동구': 'seongdong',
      '광진구': 'gwangjin',
      '동대문구': 'dongdaemun',
      '중랑구': 'jungnang',
      '성북구': 'seongbuk',
      '강북구': 'gangbuk',
      '도봉구': 'dobong',
      '노원구': 'nowon',
      '은평구': 'eunpyeong',
      '서대문구': 'seodaemun',
      '마포구': 'mapo',
      '양천구': 'yangcheon',
      '강서구': 'gangseo',
      '구로구': 'guro',
      '금천구': 'geumcheon',
      '영등포구': 'yeongdeungpo',
      '동작구': 'dongjak',
      '관악구': 'gwanak',
      '서초구': 'seocho',
      '강남구': 'gangnam',
      '송파구': 'songpa',
      '강동구': 'gangdong',

      // 경기도
      '수원시': 'suwon',
      '성남시': 'seongnam',
      '의정부시': 'uijeongbu',
      '안양시': 'anyang',
      '부천시': 'bucheon',
      '광명시': 'gwangmyeong',
      '평택시': 'pyeongtaek',
      '동두천시': 'dongducheon',
      '안산시': 'ansan',
      '고양시': 'goyang',
      '과천시': 'gwacheon',
      '구리시': 'guri',
      '남양주시': 'namyangju',
      '오산시': 'osan',
      '시흥시': 'siheung',
      '군포시': 'gunpo',
      '의왕시': 'uiwang',
      '하남시': 'hanam',
      '용인시': 'yongin',
      '파주시': 'paju',
      '이천시': 'icheon',
      '안성시': 'anseong',
      '김포시': 'gimpo',
      '화성시': 'hwaseong',
      '광주시': 'gwangju-gyeonggi',
      '여주시': 'yeoju',
      '양평군': 'yangpyeong',
      '고양군': 'goyang-gun',
      '연천군': 'yeoncheon',
      '가평군': 'gapyeong',
      '포천군': 'pocheon',

      // 전라북도
      '전주시': 'jeonju',
      '군산시': 'gunsan',
      '익산시': 'iksan',
      '정읍시': 'jeongeup',
      '남원시': 'namwon',
      '김제시': 'gimje',
      '완주군': 'wanju',
      '진안군': 'jinan',
      '무주군': 'muju',
      '장수군': 'jangsu',
      '임실군': 'imsil',
      '순창군': 'sunchang',
      '고창군': 'gochang',
      '부안군': 'buan',

      // 인천광역시
      '중구': 'jung-incheon',
      '동구': 'dong-incheon',
      '미추홀구': 'michuhol',
      '연수구': 'yeonsu',
      '남동구': 'namdong',
      '부평구': 'bupyeong',
      '계양구': 'gyeyang',
      '서구': 'seo-incheon',
      '강화군': 'ganghwa',
      '옹진군': 'ongjin',
    };

    // province name을 영문으로 변환
    const provinceName = provinceMapping[province.name] || province.name.toLowerCase()
      .replace(/특별자치도|광역시|특별시/g, '')
      .replace(/\s+/g, '');
    
    // district name을 영문으로 변환
    const districtName = districtMapping[district.name] || district.name.toLowerCase()
      .replace(/시|군|구/g, '')
      .replace(/\s+/g, '');

    return `${provinceName}-${districtName}`;
  };

  // selectedDistrict 변경 시 URL 업데이트
  useEffect(() => {
    if (selectedDistrict) {
      const newPath = generateDistrictPath(selectedDistrict);
      console.log('Updating URL to:', newPath);
      
      // 현재 URL과 다를 때만 업데이트 (무한 루프 방지)
      const currentPath = window.location.pathname.split('/').pop();
      if (currentPath !== newPath) {
        router.replace(`/results/${newPath}`, { scroll: false });
      }
    }
  }, [selectedDistrict, router, getProvinceById]);

  // 안전한 지역명 생성 함수
  const getDistrictName = (): string => {
    console.log('Selected district:', selectedDistrict);
    
    // selectedDistrict가 유효한 객체이고 name 속성이 있는 경우
    if (selectedDistrict?.name && selectedDistrict?.province_id) {
      // province_id를 사용해서 province 정보 가져오기
      const province = getProvinceById(selectedDistrict.province_id);
      console.log('Found province:', province);
      
      if (province?.name) {
        return `${province.name} ${selectedDistrict.name}`;
      }
    }

    // selectedDistrict가 없거나 유효하지 않은 경우 기본값 반환
    return '전라북도 전주시';
  };

  // 기본값 설정
  const rank = districtData?.rank || 3;
  const rankText = `종합순위 ${rank}위`;
  const districtName = getDistrictName();

  // 다음/이전 지자체로 이동하는 함수
  const handleNavigate = (direction: 'prev' | 'next') => {
    const districts = [
      { id: 'seoul-gangnam', name: '서울시 강남구', rank: 1 },
      { id: 'seoul-songpa', name: '서울시 송파구', rank: 2 },
      { id: 'jeonbuk-jeonju', name: '전라북도 전주시', rank: 3 },
      { id: 'gyeonggi-seongnam', name: '경기도 성남시', rank: 4 },
      { id: 'incheon-yeonsu', name: '인천시 연수구', rank: 5 },
    ];

    const currentIndex = districts.findIndex((d) => d.id === districtData?.id);
    let targetIndex: number;

    if (direction === 'prev') {
      targetIndex = currentIndex > 0 ? currentIndex - 1 : districts.length - 1;
    } else {
      targetIndex = currentIndex < districts.length - 1 ? currentIndex + 1 : 0;
    }

    const targetDistrict = districts[targetIndex];

    if (!targetDistrict) return null;

    console.log(
      `Navigating to ${targetDistrict.name} (${targetDistrict.rank}위)`,
    );

    // replace를 사용하여 스크롤 위치 유지
    router.replace(`/results/${targetDistrict.id}`, { scroll: false });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '16px',
          width: '100%',
          justifyContent: 'center',
          padding: '20px',
          marginBottom: '50px',
        }}
      >
        <JewelRadarChart size={470} data={chartData} />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        {/* 이전 지자체 화살표 */}
        <button
          onClick={() => handleNavigate('prev')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(28, 63, 211, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(180deg)' }}
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="#1C3FD3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 순위 텍스트 */}
        <div
          style={{
            fontSize: '1.2rem',
            color: '#1C3FD3',
            fontWeight: '600',
          }}
        >
          {rankText}
        </div>

        {/* 다음 지자체 화살표 */}
        <button
          onClick={() => handleNavigate('next')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(28, 63, 211, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="#1C3FD3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* 지자체 이름 */}
      <div
        style={{
          fontSize: '3.2rem',
          color: '#000',
          fontWeight: '600',
          marginBottom: '50px',
        }}
      >
        {districtName}
      </div>

      {/* KLACI Code 원형 컴포넌트 */}
      <KlaciCodeCircles />

      {/* 유형 텍스트 */}
      <div
        style={{
          fontSize: '2.2rem',
          color: '#474E59',
          fontWeight: 'bold',
          marginBottom: '12px',
        }}
      >
        안전복지형
      </div>

      {/* 유형 설명 */}
      <div
        style={{
          fontSize: '1.3rem',
          fontWeight: 600,
          color: '#949FB0',
          marginBottom: '50px',
        }}
      >
        인생 2막 올스타전 도시
      </div>

      {/* 세 줄 텍스트 */}
      <div
        style={{
          fontSize: '1rem',
          color: '#333',
          lineHeight: 1.2,
          textAlign: 'center',
          maxWidth: '600px',
        }}
      >
        <div style={{ marginBottom: '8px' }}>
          인구 유입은 이루어지나 경제는 성장 정체 상태이고
        </div>
        <div style={{ marginBottom: '8px' }}>
          생활 기반은 부족하지만, 안전 수준은 높아 안정적인 공동체를 이루고 있는
          유형입니다.
        </div>
        <div>경제 활력 제고와 생활 환경 개선이 시급합니다</div>
      </div>
    </div>
  );
};

export default TitleSection;
