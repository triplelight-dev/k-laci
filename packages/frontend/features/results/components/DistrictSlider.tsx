import React, { useRef, useState } from 'react';
import { DistrictRank } from '@/types/district';
import { DistrictCard } from './DistrictCard';

interface DistrictSliderProps {
  districts: DistrictRank[];
}

export const DistrictSlider: React.FC<DistrictSliderProps> = ({
  districts,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (sliderRef.current) {
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="relative w-full">
      <div className="px-8">
        <div
          ref={sliderRef}
          className="scrollbar-hide flex cursor-grab gap-12 overflow-x-auto py-12 active:cursor-grabbing"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {districts.map((district, index) => (
            <div
              key={index}
              className="flex-shrink-0 first:ml-4 last:mr-4"
              style={{ marginRight: '1rem' }}
            >
              <DistrictCard data={district} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
