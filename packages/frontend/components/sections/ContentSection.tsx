'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface ContentSectionProps {
  badgeText: string;
  title: {
    lines: string[];
    gradientWords: string[];
  };
  description: {
    texts: string[];
    boldTexts: string[];
  };
  button: {
    text: string;
    route: string;
  };
  bottomImage: {
    src: string;
    height?: string;
    transparentBackground?: boolean;
  };
  styling?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

const ContentSection: React.FC<ContentSectionProps> = ({
  badgeText,
  title,
  description,
  button,
  bottomImage,
  styling = {},
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(button.route);
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '600px',
        backgroundColor: styling.backgroundColor || 'transparent',
        display: 'flex',
        flexDirection: 'column',
        padding: '60px 20px',
      }}
    >
      {/* 상단 2x2 그리드 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          maxWidth: '1200px',
          minHeight: '300px',
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        {/* 좌상단: 뱃지와 타이틀 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '100%',
          }}
        >
          <div
            style={{
              backgroundColor: 'transparent',
              color: styling.textColor || 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '400',
              marginBottom: '20px',
              border: `1px solid ${styling.textColor || 'white'}`,
            }}
          >
            {badgeText}
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: styling.textColor || 'white',
              lineHeight: '1.2',
            }}
          >
            {title.lines.map((line, index) => (
              <div key={index}>
                {line.split(' ').map((word, wordIndex) => {
                  const isGradientWord = title.gradientWords.includes(word);
                  return (
                    <span key={wordIndex}>
                      {isGradientWord ? (
                        <span
                          style={{
                            background:
                              'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundSize: '200% 200%',
                          }}
                        >
                          {word}
                        </span>
                      ) : (
                        word
                      )}
                      {wordIndex < line.split(' ').length - 1 ? ' ' : ''}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* 우상단: 텍스트 설명과 버튼 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '100%',
          }}
        >
          {/* 상단 일반 텍스트 */}
          <div
            style={{
              fontSize: '14px',
              color: styling.textColor || 'white',
              lineHeight: '1.5',
              marginBottom: '20px',
              width: '100%',
            }}
          >
            {description.texts.map((text, index) => (
              <div key={index} style={{ marginBottom: '12px', width: '100%' }}>
                {text}
              </div>
            ))}
          </div>

          {/* 하단 볼드 텍스트 */}
          <div
            style={{
              fontSize: '15px',
              color: styling.textColor || 'white',
              marginBottom: '30px',
              fontWeight: 'bold',
              width: '100%',
            }}
          >
            {description.boldTexts.map((text, index) => (
              <div key={index} style={{ marginBottom: '8px', width: '100%' }}>
                {text}
              </div>
            ))}
          </div>

          {/* 버튼 */}
          <button
            onClick={handleButtonClick}
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: 'none',
              borderRadius: '8px',
              padding: '14px 32px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {button.text}
            <img
              src="/arrow_button_icon.png"
              alt="화살표 아이콘"
              style={{
                width: '10px',
                height: '10px',
                display: 'block',
                alignSelf: 'flex-start',
                marginTop: '2px',
              }}
            />
          </button>
        </div>
      </div>

      {/* 하단 이미지 */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          height: bottomImage.height || '300px',
          backgroundImage: `url(${bottomImage.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: bottomImage.transparentBackground ? 'transparent' : '#14161D',
          borderRadius: '32px',
        }}
      ></div>
    </div>
  );
};

export default ContentSection;
