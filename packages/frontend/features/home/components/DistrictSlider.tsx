'use client';

import React, { useState } from 'react';
import { DistrictCard } from './DistrictCard';

const DistrictSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const districts = [
    { id: 1, name: '강남구', rank: 1, score: 95.2, category: '경제' },
    { id: 2, name: '서초구', rank: 2, score: 93.8, category: '경제' },
    { id: 3, name: '송파구', rank: 3, score: 92.1, category: '경제' },
    { id: 4, name: '마포구', rank: 4, score: 90.5, category: '문화' },
    { id: 5, name: '용산구', rank: 5, score: 89.2, category: '문화' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % districts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + districts.length) % districts.length);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800">인기 지역</h3>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {districts.map((district) => (
            <div key={district.id} className="w-full flex-shrink-0">
              <DistrictCard
                district={district}
                onClick={() => {}}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {districts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}; 

export default DistrictSlider;