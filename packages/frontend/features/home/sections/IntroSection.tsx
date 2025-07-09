'use client';

import { ArrowRightUp } from '@/components/atoms/assets';
import Button from '@/components/atoms/buttons/Button';
import { DARK_MODE_COLORS } from '@/utils/colors';
import { useRouter } from 'next/navigation';
import React from 'react';

const IntroSection: React.FC = () => {
  const theme = DARK_MODE_COLORS;
  const router = useRouter();


  const descriptionLines = [
    '각 사람에게 고유한 개성과 강점이 있듯 대한민국 229곳의 지방자치단체 역시 저마다의 잠재력을 품고 있습니다.',
    '성공적인 균형발전과 지속가능성은 지역의 특성에 기반한 정교한 진단과 고유한 처방에서부터 시작됩니다.',
  ];

  const klaciDescriptionLines = [
    'KLACI는 각 지자체가 가진 잠재자산과 자원역량을 증거 기반으로 분석하고',
    '실현가능한 정책 수립을 돕는 전략적 의사결정 도구입니다.',
  ];

  const handleButtonClick = () => {
    router.push('/results');
  };

  return (
    <div
      style={{
        width: '100%',
        height: 'calc(100vh - 100px)',
        minHeight: '800px',
        backgroundImage: 'url(/backgrounds/home_intro_bg.png)',
        backgroundSize: 'calc(100% - 400px) auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.background,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* 상단 중간 글씨 */}
      <div
        style={{
          color: 'white',
          fontSize: '22px',
          marginBottom: '15px',
          fontWeight: '500',
        }}
      >
        새로운 기회를 찾는 지역을 위한 새로운 해답
      </div>

      {/* 큰 타이틀 */}
      <div
        style={{
          color: 'white',
          fontSize: '70px',
          fontWeight: '600',
          marginBottom: '20px',
          lineHeight: '1.4',
        }}
      >
        <div>229곳의 지자체</div>
        <div>
          <p
            style={{
              background: ' linear-gradient(92.4deg, #F56542 28.5%, #F4B04D 35%, #ACAAE8 65%, #74BF9E 85%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline',
            }}
          >229개</p>
          <p style={{ display: 'inline' }}>의 </p>
          <p
            style={{
              background: 'linear-gradient(92.4deg, #F56542 8.5%, #F4B04D 35%, #ACAAE8 65%, #74BF9E 95%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline',
            }}
          >역량진단서</p>
        </div>
      </div>

      {/* 디스크립션 텍스트 */}
      <div
        style={{
          color: 'white',
          fontSize: '18px',
          marginBottom: '20px',
          fontWeight: 400
        }}
      >
        {descriptionLines.map((line, index) => (
          <div key={index} style={{ marginBottom: '8px' }}>
            {line}
          </div>
        ))}
      </div>

      {/* KLACI 설명 */}
      <div
        style={{
          color: 'white',
          fontSize: '18px',
          fontWeight: 700,
          marginBottom: '30px',
          maxWidth: '700px',
        }}
      >
        {klaciDescriptionLines.map((line, index) => (
          <div key={index} style={{ marginBottom: '8px' }}>
            {line}
          </div>
        ))}
      </div>

      <Button
        label="우리 지역 잠재력 확인하기"
        icon={<ArrowRightUp />}
        onClick={handleButtonClick}
      />
    </div >
  );
};

export default IntroSection;
