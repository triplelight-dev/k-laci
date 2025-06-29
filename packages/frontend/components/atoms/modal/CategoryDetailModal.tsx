'use client';

import React from 'react';

interface CategoryScore {
  category: string;
  score: number;
  rank: number;
  name: string;
  value: number;
  totalRank?: number;
  description?: string;
}

interface CategoryDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: CategoryScore | null;
  color: string;
}

const CategoryDetailModal: React.FC<CategoryDetailModalProps> = ({
  isOpen,
  onClose,
  score,
  color,
}) => {
  if (!isOpen || !score) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '50px',
          padding: '2.5rem',
          width: '100%',
          maxWidth: '600px',
          margin: '0 2rem',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '1.5rem',
          }}
        >
          <button
            onClick={onClose}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.5rem',
              color: '#666666',
              padding: '0.5rem',
            }}
          >
            ✕
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '2rem',
              color: color,
            }}
          >
            {score.name}
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              width: '100%',
            }}
          >
            <div
              style={{
                padding: '2rem',
                borderRadius: '25px',
                backgroundColor: '#f8f9fa',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <p style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                점수: {score.value}
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                순위: {score.rank}위
              </p>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#666666',
                  marginTop: '1rem',
                }}
              >
                {score.description || '데이터 출처 정보가 없습니다.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailModal;
