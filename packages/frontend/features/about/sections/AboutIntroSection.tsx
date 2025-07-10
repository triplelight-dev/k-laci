'use client';

import { DARK_MODE_COLORS } from '@/utils/colors';
import React from 'react';

const AboutIntroSection: React.FC = () => {
  const theme = DARK_MODE_COLORS;

  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        gap: '308px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.background,

      }}
    >

      {/* 메인 이미지 */}
      <img
        src="/about/about_intro.png"
        alt="About Intro"
        style={{
          width: '100%',
          height: '410px',
          maxHeight: '80%',
          objectFit: 'contain',
        }}
      />

      {/* 하단 아이콘 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '238px',
        }}
      >
        <img
          src="/klaci_jewel.png"
          alt="KLACI Jewel"
          style={{
            width: '35px',
            height: '35px',
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  );
};

export default AboutIntroSection;
