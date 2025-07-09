'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { ArrowRightUp } from '../atoms/assets';

interface ContentSectionVerticalProps {
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
  image: {
    src: string;
    height?: string;
  };
  styling?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

const ContentSectionVertical: React.FC<ContentSectionVerticalProps> = ({
  badgeText,
  title,
  description,
  button,
  image,
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
        minHeight: '1080px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 메인 그리드 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          maxWidth: '1400px',
          minHeight: '500px',
          alignItems: 'stretch',
          width: '100%',
        }}
      >
        {/* 좌측: 상단 뱃지/타이틀 + 하단 텍스트/버튼 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            gap: '77px',
          }}
        >
          {/* 상단: 뱃지와 타이틀 */}
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
                borderRadius: '9px',
                fontSize: '14px',
                fontWeight: '400',
                marginBottom: '28px',
                border: `1px solid ${styling.textColor || 'white'}`,
              }}
            >
              {badgeText}
            </div>
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: styling.textColor || 'white',
                lineHeight: '68px',
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

          {/* 하단: 텍스트 설명과 버튼 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            {/* 상단 일반 텍스트 */}
            <div
              style={{
                fontSize: '18px',
                color: styling.textColor || 'white',
                lineHeight: '28px',
                marginBottom: '30px',
                width: '655px',
                fontWeight: '400',
              }}
            >
              {description.texts.map((text, index) => (
                <div key={index} style={{ marginBottom: '0px', width: '100%' }}>
                  {text}
                </div>
              ))}
            </div>

            {/* 하단 볼드 텍스트 */}
            <div
              style={{
                fontSize: '18px',
                color: styling.textColor || 'white',
                marginBottom: '30px',
                fontWeight: '700',
                width: '100%',
              }}
            >
              {description.boldTexts.map((text, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: '8px',
                    width: '100%',
                    whiteSpace: 'pre-line',
                  }}
                >
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
                fontSize: '18px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {button.text}
              <ArrowRightUp />
            </button>
          </div>
        </div>

        {/* 우측: 통으로 이어지는 이미지 */}
        <div
          style={{
            width: '100%',
            height: image.height || '500px',
            padding: '20px',
            backgroundColor: 'transparent',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={image.src}
            alt="섹션 이미지"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '12px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSectionVertical;
