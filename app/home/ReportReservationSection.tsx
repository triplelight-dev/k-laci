'use client';

import React from 'react';

import { MoveButton } from '@/atoms/buttons/MoveButton';

const ReportReservationSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '12rem',
        paddingBottom: '12rem',
        background: 'black',
        color: 'white',
      }}
    >
      <section className="flex w-full flex-col items-center bg-gray-50 py-20">
        {/* 타이틀 */}
        <div
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
          }}
        >
          K-LACI 229 REPORT
        </div>

        {/* 설명 텍스트 */}
        <div
          style={{
            width: '50%',
            fontSize: '1rem',
            lineHeight: '1.3rem',
            marginBottom: '1rem',
          }}
        >
          K-LACI 229는 혁신적인 디자인과 최첨단 기술이 만나 탄생한 새로운
          컬렉션입니다. 이번 컬렉션에서는 지속가능한 소재와 현대적인 실루엣을
          결합하여, 일상에서도 특별함을 느낄 수 있는 아이템들을 선보입니다. 각
          제품은 세심한 디테일과 품질로 제작되어, 착용하는 순간부터 차별화된
          경험을 제공합니다. K-LACI 229는 단순한 의류를 넘어, 당신의
          라이프스타일을 완성하는 필수 아이템이 될 것입니다. 이번 컬렉션의
          출시를 앞두고, 특별한 사전 예약 혜택을 준비했습니다.
        </div>

        {/* 이미지 섹션 */}
        <div
          style={{
            marginBottom: '1rem',
            width: '100%',
            padding: '2rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* 실제 이미지로 교체 필요 */}
            <img
              src="/report_image.png"
              alt="K-LACI Logo"
              style={{ width: '12rem' }}
            />
          </div>
        </div>

        {/* 예약 버튼 */}
        <MoveButton
          width="15rem"
          buttonName="사전 예약하기"
          background="linear-gradient(90deg, #f9d423, #ff4e50, #87e752, #4fc3f7)"
          textColor="black"
          onClick={() => {
            console.log('사전 예약하기');
          }}
        />
      </section>
    </div>
  );
};

export default ReportReservationSection;
