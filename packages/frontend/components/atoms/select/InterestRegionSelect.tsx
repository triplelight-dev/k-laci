import { useProvincesWithRegions } from '@/hooks/useProvincesWithRegions';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface InterestRegionSelectProps {
  selectedRegionId?: string;
  onRegionChange: (regionId: string) => void;
}

export default function InterestRegionSelect({
  selectedRegionId,
  onRegionChange,
}: InterestRegionSelectProps) {
  const { data: provincesWithRegions = [], error } = useProvincesWithRegions();
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);

  // 모든 region을 하나의 배열로 합치기
  const allRegionOptions = provincesWithRegions.flatMap(
    (province) =>
      province.regions?.map((region) => ({
        value: region.id,
        label: `${province.name} ${region.name}`,
        provinceName: province.name,
        regionName: region.name,
      })) || [],
  );

  // 선택된 region 정보 찾기
  const selectedRegion = allRegionOptions.find(
    (opt) => opt.value === selectedRegionId,
  );

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        regionRef.current &&
        !regionRef.current.contains(event.target as Node)
      ) {
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
        ref={regionRef}
        style={{
          position: 'relative',
          width: '100%',
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
            height: '50px',
            boxSizing: 'border-box',
          }}
          onClick={() => setIsRegionOpen(!isRegionOpen)}
        >
          <span
            style={{
              fontSize: '14px',
              color: selectedRegionId ? '#111827' : '#9CA3AF',
            }}
          >
            {selectedRegionId
              ? selectedRegion?.label
              : '관심 지역을 선택해주세요'}
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

        {isRegionOpen && (
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
              maxHeight: '300px',
              overflowY: 'auto',
            }}
          >
            {allRegionOptions.map((option) => (
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
  );
}
