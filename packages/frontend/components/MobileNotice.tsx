'use client';

import React from 'react';

const MobileNotice: React.FC = () => {
  return (
    <div className="animate-fade-in flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div
        className="animate-slide-up w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl"
        style={{ padding: '40px' }}
      >
        {/* 아이콘 */}
        <div
          className="mb-6"
          style={{
            fontSize: '50px',
          }}
        >
          😊
        </div>

        {/* 제목 */}
        <h1 className="mb-4 text-2xl font-bold text-gray-900">
          모바일은 준비중!
        </h1>

        {/* 설명 */}
        <p className="mb-6 leading-relaxed text-gray-600" style={{ lineHeight: 1.5}}>
          KLACI는 PC 환경에 최적화되어 있습니다.
          <br />더 나은 경험을 위해 PC로 접속해 주세요!
        </p>
      </div>
    </div>
  );
};

export default MobileNotice;
