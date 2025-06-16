'use client';

import React from 'react';

import { MoveButton } from '@/atoms/buttons/MoveButton';

const IntroSection = () => {
  const text = `You can't find the feeling All is the same in the pouring rain, y'know, y'know Coming out of the ceiling Falling from above, growing in and out of love A broken heart is still beating`;

  return (
    <div
      style={{
        width: '100%',
        color: 'white',
      }}
    >
      <section className="relative flex h-[65vh] w-full items-center justify-center bg-white">
        <div
          className="container mx-auto px-4"
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div style={{ gap: '5rem' }}>
            <TitleText text="Korea" />
            <TitleText text="Local Asset Competency Index" />
          </div>
          <ContentText text={text} />
          <MoveButton buttonName="Results" onClick={() => {}} />
        </div>
      </section>
    </div>
  );
};

interface TitleTextProps {
  text: string;
}

const TitleText = ({ text }: TitleTextProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ gap: '5rem' }}
    >
      <div style={{ fontSize: '3rem', lineHeight: '3.4rem', fontWeight: 600 }}>
        {text}
      </div>
    </div>
  );
};

interface ContentTextProps {
  text: string;
}

const ContentText = ({ text }: ContentTextProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ width: '100%', paddingTop: '1rem', justifyContent: 'center' }}
    >
      <div
        style={{
          width: '40%',
          fontSize: '1.5rem',
          lineHeight: '1.7rem',
          fontWeight: 400,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default IntroSection;
