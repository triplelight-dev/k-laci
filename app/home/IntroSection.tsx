'use client';

import React from 'react';

const IntroSection = () => {
  const text = `You can't find the feeling All is the same in the pouring rain, y'know, y'know Coming out of the ceiling Falling from above, growing in and out of love A broken heart is still beating`;

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: 'lightgray' }}>
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
          <MoveToResultPageButton buttonName="Results" />
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

const MoveToResultPageButton = ({ buttonName }: { buttonName: string }) => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        width: '100%',
        paddingTop: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button
        style={{
          width: '10rem',
          height: '3rem',
          backgroundColor: 'black',
          color: 'white',
          fontSize: '1rem',
          fontWeight: 600,
          borderRadius: '0.5rem',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default IntroSection;
