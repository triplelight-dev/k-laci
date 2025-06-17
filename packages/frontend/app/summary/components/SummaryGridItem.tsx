'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { SummaryItem } from '../types/summary';

interface SummaryGridItemProps {
  item: SummaryItem;
}

const SummaryGridItem: React.FC<SummaryGridItemProps> = ({ item }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(item.link)}
      style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '1.5rem',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        minHeight: '100px',
        boxShadow: '0px 4px 10px 0px #0000000D',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '1.1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
            }}
          >
            {item.keyName}
          </div>
          {item.rankName && (
            <div
              style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
              }}
            >
              {item.rankName}
            </div>
          )}
        </div>
        <div
          style={{
            cursor: 'pointer',
          }}
        >
          <Image src="/quick_move.png" alt="상세보기" width={28} height={28} />
        </div>
      </div>
    </div>
  );
};

export default SummaryGridItem;
