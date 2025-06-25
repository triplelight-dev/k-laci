import React from 'react';
import { DistrictRank } from '@/types/district';

interface DistrictCardProps {
  data: DistrictRank;
}

export const DistrictCard: React.FC<DistrictCardProps> = ({ data }) => {
  return (
    <div
      style={{
        width: '15rem',
        // minHeight: '20rem',
        padding: '3rem',
        background: `linear-gradient(to bottom, #86DDF4 0%, #F8F8F8 50%)`,
        color: 'black',
        borderRadius: '1rem',
      }}
    >
      {/* 서브타이틀 (순위) */}
      <div className="mb-8 w-full text-center">
        <span
          className="inline-block rounded-full border border-gray-100 bg-gray-50 px-5 py-1.5 text-sm font-medium text-gray-800"
          style={{
            backgroundColor: 'transparent',
            color: 'black',
            fontSize: '0.8rem',
            border: '1px solid #E5E5E5',
            padding: '0.3rem 1.2rem',
            marginBottom: '2rem',
          }}
        >
          종합순위 {data.rank}위
        </span>
      </div>

      {/* 지역명 */}
      <div className="mb-6 text-center">
        <div
          className="text-2xl font-bold text-gray-900"
          style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}
        >
          {data.title}
        </div>
      </div>

      {/* 서브타이틀 */}
      <div className="mb-10 text-center">
        <div
          className="text-lg font-semibold text-gray-800"
          style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4rem' }}
        >
          {data.subtitle}
        </div>
      </div>

      {/* 메트릭 박스들 */}
      <div className="grid w-full grid-cols-2 gap-5">
        {data.metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.2rem',
            }}
          >
            <div
              className="mb-2 flex gap-2"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                fontSize: '0.7rem',
              }}
            >
              <div
                className="h-3 w-3 rounded-full"
                style={{
                  width: '0.5rem',
                  height: '0.5rem',
                  backgroundColor: metric.color,
                  border: '1px solid #E5E5E5',
                  borderRadius: '50%',
                  marginRight: '0.2rem',
                }}
              />
              <span className="text-sm font-medium text-gray-800">
                {metric.title}
              </span>
            </div>
            <div
              className="text-xl font-bold text-gray-900"
              style={{ fontSize: '1.5rem', fontWeight: 800 }}
            >
              {metric.rank}위
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
