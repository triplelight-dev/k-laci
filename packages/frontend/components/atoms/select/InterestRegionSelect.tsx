import { useProvincesWithRegions } from '@/hooks/useProvincesWithRegions';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface InterestRegionSelectProps {
  selectedProvinceId?: string;
  selectedDistrictId?: string;
  onProvinceChange: (provinceId: string) => void;
  onDistrictChange: (districtId: string) => void;
}

export default function InterestRegionSelect({
  selectedProvinceId,
  selectedDistrictId,
  onProvinceChange,
  onDistrictChange,
}: InterestRegionSelectProps) {
  const { data: provincesWithRegions = [], error } = useProvincesWithRegions();
  const [isProvinceOpen, setIsProvinceOpen] = useState(false);
  const [isDistrictOpen, setIsDistrictOpen] = useState(false);
  const provinceRef = useRef<HTMLDivElement>(null);
  const districtRef = useRef<HTMLDivElement>(null);

  // API에서 가져온 데이터로 province 옵션 생성
  const provinceOptions = provincesWithRegions.map((province) => ({
    value: String(province.id),
    label: province.name,
  }));

  // 선택된 도/시에 해당하는 지역 옵션 생성
  const districtOptions = selectedProvinceId
    ? provincesWithRegions
        .find((province) => String(province.id) === selectedProvinceId)
        ?.regions.map((region) => ({
          value: String(region.id),
          label: region.name,
        })) || []
    : [];

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        provinceRef.current &&
        !provinceRef.current.contains(event.target as Node)
      ) {
        setIsProvinceOpen(false);
      }
      if (
        districtRef.current &&
        !districtRef.current.contains(event.target as Node)
      ) {
        setIsDistrictOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (error) {
    return (
      <div
        style={{
          width: '100%',
          height: '50px',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          color: '#6B7280',
        }}
      >
        데이터를 불러오는 중 오류가 발생했습니다.
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '50px',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 10px',
      }}
    >
      {/* 광역 셀렉트 */}
      <div
        ref={provinceRef}
        style={{
          width: '150px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px',
          cursor: 'pointer',
          position: 'relative',
          backgroundColor: 'transparent',
        }}
        onClick={() => setIsProvinceOpen(!isProvinceOpen)}
      >
        <span
          style={{
            flex: 1,
            color: selectedProvinceId ? '#000000' : '#9CA3AF',
            fontSize: '14px',
            textAlign: 'center',
          }}
        >
          {selectedProvinceId
            ? provinceOptions.find((opt) => opt.value === selectedProvinceId)
                ?.label
            : '광역명'}
        </span>
        <div
          style={{
            pointerEvents: 'none',
            transform: isProvinceOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-in-out',
            marginLeft: '8px',
          }}
        >
          <Image src="/arrow_down.png" alt="선택" width={12} height={7} />
        </div>

        {/* 광역 드롭다운 */}
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '8px',
            backgroundColor: 'white',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            width: '100%',
            zIndex: 1000,
            maxHeight: isProvinceOpen ? '200px' : '0px',
            overflow: 'hidden',
            transition: 'max-height 0.2s ease-in-out',
            visibility: isProvinceOpen ? 'visible' : 'hidden',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              padding: '8px 0',
              margin: 0,
              maxHeight: '200px',
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            {provinceOptions.map((option) => (
              <li
                key={option.value}
                onClick={(e) => {
                  e.stopPropagation();
                  onProvinceChange(option.value);
                  setIsProvinceOpen(false);
                }}
                style={{
                  padding: '12px 20px',
                  fontSize: '14px',
                  color: '#374151',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease-in-out',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = '#F9FAFB')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = 'white')
                }
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 지자체 셀렉트 */}
      <div
        ref={districtRef}
        style={{
          width: '150px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px',
          cursor: selectedProvinceId ? 'pointer' : 'not-allowed',
          position: 'relative',
          backgroundColor: 'transparent',
        }}
        onClick={() => {
          if (!selectedProvinceId) return;
          setIsDistrictOpen(!isDistrictOpen);
        }}
      >
        <span
          style={{
            flex: 1,
            color: selectedDistrictId ? '#000000' : '#9CA3AF',
            fontSize: '14px',
            textAlign: 'center',
          }}
        >
          {selectedDistrictId
            ? districtOptions.find((opt) => opt.value === selectedDistrictId)
                ?.label
            : '지자체명'}
        </span>
        <div
          style={{
            pointerEvents: 'none',
            transform: isDistrictOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-in-out',
            marginLeft: '8px',
          }}
        >
          <Image src="/arrow_down.png" alt="선택" width={12} height={7} />
        </div>

        {/* 지자체 드롭다운 */}
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '8px',
            backgroundColor: 'white',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            width: '100%',
            zIndex: 1000,
            maxHeight: isDistrictOpen ? '200px' : '0px',
            overflow: 'hidden',
            transition: 'max-height 0.2s ease-in-out',
            visibility: isDistrictOpen ? 'visible' : 'hidden',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              padding: '8px 0',
              margin: 0,
              maxHeight: '200px',
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            {districtOptions.map((option) => (
              <li
                key={option.value}
                onClick={(e) => {
                  e.stopPropagation();
                  onDistrictChange(option.value);
                  setIsDistrictOpen(false);
                }}
                style={{
                  padding: '12px 20px',
                  fontSize: '14px',
                  color: '#374151',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease-in-out',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = '#F9FAFB')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = 'white')
                }
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
