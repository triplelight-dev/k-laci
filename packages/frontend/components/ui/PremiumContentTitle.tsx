import React from 'react';

interface PremiumContentTitleProps {
  title: string;
  badgeText?: string;
}

const PremiumContentTitle: React.FC<PremiumContentTitleProps> = ({
  title,
  badgeText = 'Premium Insight',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '25px',
        width: '100%',
        // border: '1px solid red',
        paddingTop: '50px',
        paddingBottom: '50px',
      }}
    >
      {/* Premium Insight 뱃지 */}
      <div
        style={{
          borderRadius: '8px',
          border: '1px solid #000000',
          backgroundColor: 'transparent',
          padding: '6px 10px',
        }}
      >
        <span
          style={{
            fontSize: '16px',
            fontWeight: '500',
            color: '#000000',
          }}
        >
          {badgeText}
        </span>
      </div>

      {/* 제목 */}
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '32px',
            lineHeight: '1.25',
            fontWeight: '700',
            color: '#111827',
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default PremiumContentTitle;
