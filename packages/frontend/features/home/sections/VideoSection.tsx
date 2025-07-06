'use client';

import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#14161D',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'cover',
        }}
      >
        <source src="/videos/klaci_intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection; 