import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import provinceData from '../../data/province_data.json';
import regionsData from '../../data/regions_data.json';
import { useStore } from '../../store';

interface SearchTextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onRecentSearchClick?: (value: string) => void;
}

// 지자체별 아이콘 매핑 - region ID를 사용하여 public/region-logos 폴더의 이미지 사용
const getRegionIcon = (regionName: string): string => {
  // 지역명으로부터 region ID 찾기
  const { region } = findProvinceAndRegionByName(regionName);

  if (region) {
    // region ID를 사용하여 public/region-logos 폴더의 이미지 경로 생성
    return `/region-logos/${region.id}.png`;
  }

  // 기본 아이콘 (region을 찾을 수 없는 경우)
  return '/districts/sample_dist_icon.png';
};

// 전체 지역 데이터 생성 (시도 + 구/군 페어만) - useMemo로 최적화
const useAllRegions = () => {
  return useMemo(() => {
    const allRegions: string[] = [];

    // 구/군 데이터만 추가 (시도명 + 구/군명 형태)
    regionsData.forEach((region) => {
      const province = provinceData.find((p) => p.id === region.province_id);
      if (province) {
        allRegions.push(`${province.name} ${region.name}`);
      }
    });

    // 가나다순으로 정렬
    return allRegions.sort((a, b) => a.localeCompare(b, 'ko'));
  }, []);
};

// 지역명으로부터 Province와 Region 객체 찾기
const findProvinceAndRegionByName = (fullName: string) => {
  const [provinceName, districtName] = fullName.split(' ');

  const province = provinceData.find((p) => p.name === provinceName);
  if (!province) return { province: null, region: null };

  const region = regionsData.find(
    (r) => r.province_id === province.id && r.name === districtName,
  );

  return { province, region };
};

const SearchTextInput: React.FC<SearchTextInputProps> = ({
  value,
  onChange,
  placeholder = '제주 서귀포시',
  onRecentSearchClick,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isFirstFocus, setIsFirstFocus] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Zustand store에서 필요한 함수들 가져오기
  const { setSelectedProvince, setSelectedDistrict } = useStore();

  // 전체 지역 데이터
  const allRegions = useAllRegions();

  // 입력값에 따라 지역 데이터 필터링 (최대 20개로 증가)
  const filteredRegions = useMemo(() => {
    if (!value) {
      // 입력값이 없을 때는 전체 지역 데이터를 반환 (최대 20개)
      return allRegions;
    }

    return allRegions
      .filter((region) => region.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 20); // 최대 20개로 증가
  }, [value, allRegions]);

  // 최근 검색어와 지역 데이터를 합쳐서 표시
  const filteredSearches = useMemo(() => {
    if (!value) {
      // 입력값이 없을 때는 전체 지역 데이터만 표시 (최근 검색어 제외)
      return filteredRegions.filter((e, index, self) => self.indexOf(e) === index);
    }

    const recentMatches = recentSearches.filter((search) =>
      search.toLowerCase().includes(value.toLowerCase()),
    );

    // 최근 검색어를 먼저 표시하고, 그 다음에 지역 데이터를 가나다순으로 표시
    return [...recentMatches, ...filteredRegions].filter((e, index, self) => self.indexOf(e) === index);
  }, [value, recentSearches, filteredRegions]);

  // 지역 선택 처리 함수
  const handleRegionSelect = (selectedRegion: string) => {
    onChange(selectedRegion);
    onRecentSearchClick?.(selectedRegion);
    setShowDropdown(false);

    // 최근 검색어 업데이트 max 5개
    setRecentSearches([selectedRegion, ...recentSearches].slice(0, 4));


    // Zustand store에 반영
    const { province, region } = findProvinceAndRegionByName(selectedRegion);
    if (province && region) {
      setSelectedProvince(province.id);
      setSelectedDistrict(region.id, 'search_autocomplete');

      // path parameter 방식으로 results 페이지로 이동
      router.push(`/results/region/${region.id}`);
    }
  };

  // 인풋 포커스/블러 처리
  const handleFocus = () => {
    // 첫 번째 포커스일 때만 기본값을 지움
    if (isFirstFocus && value) {
      onChange('');
      setIsFirstFocus(false);
    }
    
    if (filteredSearches.length > 0) setShowDropdown(true);
  };
  
  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 150); // 시간을 늘려서 클릭 이벤트가 처리될 수 있도록 함
  };

  // 키보드 네비게이션
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || filteredSearches.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredSearches.length - 1 ? prev + 1 : 0,
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredSearches.length - 1,
      );
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      e.preventDefault();
      const selected = filteredSearches[highlightedIndex];
      if (selected !== undefined) {
        handleRegionSelect(selected);
        inputRef.current?.blur();
      }
    }
  };

  // 입력값 바뀌면 하이라이트 초기화
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [value]);



  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '16px',
          padding: '18px 32px',
          gap: '24px',
          background: 'white',
          marginBottom: '27px',
        }}
      >
        <div className="mr-3 flex-shrink-0">
          <Image src="/textinput_icon.png" alt="검색" width={18} height={18} />
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            fontSize: '22px',
            fontWeight: '400',
            border: '1px solid transparent',
            color: '#000000',
            outline: 'none',
          }}
          autoComplete="off"
        />
      </div>

      {/* <Flex width="100%" justifyContent="flex-start" marginLeft="32px" gap="24px">
        <span style={{ fontSize: '14px', fontWeight: '400', color: '#000000', display: 'flex', alignItems: 'center', lineHeight: '24px' }}>최근 검색</span>
        <Flex gap="10px">
          {recentSearches.map((search, index) => (
            <span key={index} style={{ fontSize: '14px', lineHeight: '24px', fontWeight: '500', color: '#000000', padding: '3.5px 10px', borderRadius: '9px', border: '1px solid #000000' }}>{search}</span>
          ))}
        </Flex>
      </Flex> */}

      {/* AutoComplete Dropdown */}
      {showDropdown && filteredSearches.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: 0,
            right: 0,
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            zIndex: 9999,
            padding: '3px',
            maxHeight: '180px',
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              background: '#FFF', // 리스트 배경색
              borderRadius: '13px', // 부모보다 작은 radius
              overflow: 'hidden',
            }}
          >
            {filteredSearches.map((search, idx) => (
              <div
                key={idx}
                onClick={() => handleRegionSelect(search)}
                onMouseEnter={() => setHighlightedIndex(idx)}
                onMouseLeave={() => setHighlightedIndex(-1)}
                style={{
                  padding: '12px 24px',
                  cursor: 'pointer',
                  background:
                    idx === highlightedIndex ? '#F8F8F8' : 'transparent',
                  borderRadius: '10px',
                  border: highlightedIndex === idx ? '1px solid #E7E8EA' : '1px solid transparent',
                  color: '#222',
                  fontSize: '18px',
                  lineHeight: '28px',
                  fontWeight: '400',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'background-color 0.2s ease',
                  userSelect: 'none',
                  height: '50px',
                }}
              >
                {/* 지자체 아이콘 */}
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={getRegionIcon(search)}
                    alt={`${search} 아이콘`}
                    width={20}
                    height={20}
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>

                {/* 지자체명 */}
                <div
                  style={{
                    flex: 1,
                    fontWeight: idx === highlightedIndex ? '500' : '400',
                  }}
                >
                  {search}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 기존 최근 검색어 라벨은 그대로 */}
      {/* {recentSearches.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              fontSize: '14px',
              color: 'black',
              background: 'transparent',
              marginRight: '20px',
            }}
          >
            최근 검색어
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '15px',
              flexWrap: 'wrap',
            }}
          >
            {recentSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => handleRegionSelect(search)}
                style={{
                  fontSize: '14px',
                  color: 'black',
                  cursor: 'pointer',
                  background: 'transparent',
                  border: '1px solid black',
                  borderRadius: '10px',
                  padding: '6px 12px',
                }}
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default SearchTextInput;
