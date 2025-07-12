'use client';

import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '1080px',
        backgroundColor: '#14161D',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
      }}>
        <div style={{
          width: '1400px',
        }}>
          <img src="/home/video-mask.png" alt="video-mask" width={500}
            style={{

            }}
          />
        </div>
      </div>
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