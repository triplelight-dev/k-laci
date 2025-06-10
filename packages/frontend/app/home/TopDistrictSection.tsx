'use client';

import React from 'react';

import { MoveButton } from '@/atoms/buttons/MoveButton';
import { DistrictSlider } from '../components/district/DistrictSlider';
import { mockDistrictData } from '../types/district';

const TopDistrictSection = () => {
  const sectionTitle = 'K-LACI가 주목한 TOP 10 지역';
  const sectionSubtitle = 'K-LACI TOP 10';
  const detailTexts = [
    '지역의 진짜 역량은 추정이 아닌 데이터로 판단해야 합니다.',
    '그래서 우리는 5대 영역, 55개 지표로 전국 229개 지자체를 분석했습니다.',
  ];

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
      <section className="w-full bg-gray-50 py-20" style={{ width: '75%' }}>
        <div className="container mx-auto px-4">
          {/* 상단 타이틀 및 텍스트 영역 */}
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: 400,
              marginBottom: '1.2rem',
              color: '#848380',
            }}
          >
            {sectionSubtitle}
          </div>

          <div className="mb-16 max-w-2xl" style={{ marginBottom: '3rem' }}>
            <div
              className="mb-6 text-4xl font-bold"
              style={{ fontSize: '2rem', fontWeight: 800 }}
            >
              {sectionTitle}
            </div>

            <div style={{ marginTop: '1rem' }}>
              {detailTexts.map((text, idx) => (
                <div
                  key={idx}
                  className="text-lg text-gray-600"
                  style={{ fontSize: '1.2rem', fontWeight: 400 }}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* 슬라이더 추가 */}
          <div className="mb-12" style={{ marginBottom: '3rem' }}>
            <DistrictSlider districts={mockDistrictData} />
          </div>

          {/* 하단 버튼 영역 */}
          <MoveButton
            buttonName="TOP 10"
            onClick={() => {}}
            borderColor="white"
            textColor="white"
          />
        </div>
      </section>
    </div>
  );
};

export default TopDistrictSection;
