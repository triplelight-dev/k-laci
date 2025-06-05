'use client';

import { MoveButton } from '@/atoms/buttons/MoveButton';
import React from 'react';

interface BoxItemProps {
  title: string;
  content: string;
  circleColor: string;
}

const BoxItem = ({ title, content, circleColor }: BoxItemProps) => {
  return (
    <div
      className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-sm"
      style={{
        background: '#F8F8F8',
        borderRadius: '1rem',
        padding: '1.5rem',
        paddingBottom: '3rem',
      }}
    >
      <div
        className="flex items-center"
        style={{
          display: 'flex',
          alignItems: '',
        }}
      >
        <div
          className="h-3 w-3 rounded-full"
          style={{
            backgroundColor: circleColor,
            width: '1rem',
            height: '1rem',
            borderRadius: '50%',
            marginRight: '0.5rem',
          }}
        />
        <div
          className="text-xl font-semibold"
          style={{ fontSize: '1.2rem', fontWeight: 600 }}
        >
          {title}
        </div>
      </div>

      <p className="text-gray-600">{content}</p>
    </div>
  );
};

interface MoveToResultPageButtonProps {
  buttonName: string;
}

const MoveToResultPageButton = ({
  buttonName,
}: MoveToResultPageButtonProps) => {
  return (
    <div className="flex w-full justify-center pt-4">
      <button
        className="h-12 w-40 rounded-lg bg-black font-semibold text-white transition-colors hover:bg-gray-800"
        style={{ border: 'none', cursor: 'pointer' }}
      >
        {buttonName}
      </button>
    </div>
  );
};

const StandardSection = () => {
  const boxItems = [
    {
      title: '인구성장력',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
      circleColor: '#FF6B6B',
    },
    {
      title: '경제활동력',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
      circleColor: '#4ECDC4',
    },
    {
      title: '생활기반력',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
      circleColor: '#45B7D1',
    },
    {
      title: '안전회복력',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
      circleColor: '#96CEB4',
    },
  ];

  const sectionTitle = '지역경쟁력을 보는 새로운 기준';
  const sectionSubtitle = 'K-LACI APPROACH';
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
            }}
          >
            {sectionSubtitle}
          </div>

          <div className="mb-16 max-w-2xl">
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

          {/* 중간 박스 그리드 영역 */}
          <div
            className="mb-16 grid grid-cols-2 gap-8"
            style={{ gap: '1rem', marginTop: '3rem', marginBottom: '3rem' }}
          >
            {boxItems.map((item, index) => (
              <BoxItem
                key={index}
                title={item.title}
                content={item.content}
                circleColor={item.circleColor}
              />
            ))}
          </div>

          {/* 하단 버튼 영역 */}
          <MoveButton buttonName="About" onClick={() => {}} />
        </div>
      </section>
    </div>
  );
};

export default StandardSection;
