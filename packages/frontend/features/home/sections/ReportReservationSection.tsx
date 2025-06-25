'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ReportReservationSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 예약 로직 구현
    console.log('Reserving report for:', email);
  };

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-white">
            <h2 className="text-3xl font-bold mb-4">
              상세 분석 리포트
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              선택한 지역의 상세한 역량 분석 리포트를 이메일로 받아보세요
            </p>
            
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                예약하기
              </button>
            </form>
          </div>
          
          <div className="flex-1">
            <Image
              src="/report_image.png"
              alt="Report Preview"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportReservationSection; 