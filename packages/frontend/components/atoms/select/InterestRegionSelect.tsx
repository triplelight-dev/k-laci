import { useProvincesWithRegions } from '@/hooks/useProvincesWithRegions';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface InterestRegionSelectProps {
  selectedProvinceId?: string;
  selectedRegionId?: string;
  onProvinceChange: (provinceId: string) => void;
  onRegionChange: (regionId: string) => void;
}

export default function InterestRegionSelect({
  selectedProvinceId,
  selectedRegionId,
  onProvinceChange,
  onRegionChange,
}: InterestRegionSelectProps) {
  const { data: provincesWithRegions = [], error } = useProvincesWithRegions();
  const [isProvinceOpen, setIsProvinceOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const provinceRef = useRef<HTMLDivElement>(null);
  const regionRef = useRef<HTMLDivElement>(null);

  // API에서 가져온 데이터로 province 옵션 생성
  const provinceOptions = provincesWithRegions.map(province => ({
    value: province.id.toString(),
    label: province.name
  }));

  // 선택된 province에 따른 region 옵션 생성
  const selectedProvince = provincesWithRegions.find(p => p.id.toString() === selectedProvinceId);
  const regionOptions = selectedProvince?.regions?.map(region => ({
    value: region.id,
    label: region.name
  })) || [];

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (provinceRef.current && !provinceRef.current.contains(event.target as Node)) {
        setIsProvinceOpen(false);
      }
      if (regionRef.current && !regionRef.current.contains(event.target as Node)) {
        setIsRegionOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px',
        }}
      >
        <label
          style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
          }}
        >
          관심 지역 설정
        </label>
        <span
          style={{
            fontSize: '14px',
            color: '#9A9EA3',
          }}
        >
          선택 사항
        </span>
      </div>
      
      <div
        style={{
          width: '100%',
          height: '50px',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          padding: '0 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          boxSizing: 'border-box',
        }}
      >
        {/* 광역시/도 선택 */}
        <div
          ref={provinceRef}
          style={{
            position: 'relative',
            width: '150px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              border: '1px solid #D1D5DB',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: 'white',
            }}
            onClick={() => setIsProvinceOpen(!isProvinceOpen)}
          >
            <span
              style={{
                fontSize: '14px',
                color: selectedProvinceId ? '#111827' : '#9CA3AF',
              }}
            >
              {selectedProvinceId 
                ? provinceOptions.find(opt => opt.value === selectedProvinceId)?.label 
                : '광역시/도'
              }
            </span>
            <Image
              src="/arrow_down.png"
              alt="arrow down"
              width={12}
              height={12}
              style={{
                transform: isProvinceOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            />
          </div>
          
          {isProvinceOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'white',
                border: '1px solid #D1D5DB',
                borderRadius: '4px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                zIndex: 10,
                maxHeight: '200px',
                overflowY: 'auto',
              }}
            >
              {provinceOptions.map((option) => (
                <div
                  key={option.value}
                  style={{
                    padding: '8px 12px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    color: '#111827',
                    borderBottom: '1px solid #F3F4F6',
                  }}
                  onClick={() => {
                    onProvinceChange(option.value);
                    setIsProvinceOpen(false);
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#F9FAFB';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 시/군/구 선택 */}
        <div
          ref={regionRef}
          style={{
            position: 'relative',
            width: '150px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              border: '1px solid #D1D5DB',
              borderRadius: '4px',
              cursor: selectedProvinceId ? 'pointer' : 'not-allowed',
              backgroundColor: selectedProvinceId ? 'white' : '#F9FAFB',
              opacity: selectedProvinceId ? 1 : 0.5,
            }}
            onClick={() => selectedProvinceId && setIsRegionOpen(!isRegionOpen)}
          >
            <span
              style={{
                fontSize: '14px',
                color: selectedRegionId ? '#111827' : '#9CA3AF',
              }}
            >
              {selectedRegionId 
                ? regionOptions.find(opt => opt.value === selectedRegionId)?.label 
                : '시/군/구'
              }
            </span>
            <Image
              src="/arrow_down.png"
              alt="arrow down"
              width={12}
              height={12}
              style={{
                transform: isRegionOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            />
          </div>
          
          {isRegionOpen && selectedProvinceId && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'white',
                border: '1px solid #D1D5DB',
                borderRadius: '4px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                zIndex: 10,
                maxHeight: '200px',
                overflowY: 'auto',
              }}
            >
              {regionOptions.map((option) => (
                <div
                  key={option.value}
                  style={{
                    padding: '8px 12px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    color: '#111827',
                    borderBottom: '1px solid #F3F4F6',
                  }}
                  onClick={() => {
                    onRegionChange(option.value);
                    setIsRegionOpen(false);
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#F9FAFB';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
