import { INTERNAL_LINKS } from '@/constants/links';
import React from 'react';
import { ArrowRightUp } from '../atoms/assets';

const cardData = [
  [
    { title: "종합순위\nTOP 100", desc: "전국 229개 지자체 기준\n종합점수 상위 100곳", tag: "SPECIAL", bgImage: '/summary/Ranking-1.png', link: INTERNAL_LINKS.SUMMARY.TOP_100 },
    { title: "5극 3특\n종합순위", desc: "대경권, 동남권, 서남권, 수도권 등\n8개 행정체제별 종합순위", tag: "SPECIAL", bgImage: '/summary/Ranking-2.png', link: INTERNAL_LINKS.SUMMARY.FIVE_POLE_THREE_SPECIAL },
    { title: "유형별\n종합순위", desc: "강원, 경기, 경남, 경북, 광주 등\n17개 광역별 종합순위", bgImage: '/summary/Ranking-3.png', link: INTERNAL_LINKS.SUMMARY.SIX_MAJOR_PROVINCES_TOP_50 },
    { title: "광역별\n종합순위", desc: "개발도약형, 기초안정형, 안정생활형 등\n16개 유형별 종합순위", bgImage: '/summary/Ranking-4.png', link: INTERNAL_LINKS.SUMMARY.REGIONAL_RANKING },
  ],
  [
    { title: "핵심범주별\nTOP 50", desc: "인구, 경제, 생활, 안전\n4대 핵심범주별 지자체 상위 50곳", bgImage: '/summary/Ranking-5.png', link: INTERNAL_LINKS.SUMMARY.CORE_CATEGORY_TOP_50 },
    { title: "시군구별\nTOP 50", desc: "시, 군, 구\n3개 행정단위별 지자체 상위 50곳", bgImage: '/summary/Ranking-6.png', link: INTERNAL_LINKS.SUMMARY.ADMINISTRATIVE_UNIT_TOP_50 },
    { title: "6대 광역시\nTOP 50", desc: "광주, 대구, 대전, 부산, 울산, 인천 \n6대 광역시 내 지자체 상위 50곳", bgImage: '/summary/Ranking-7.png', link: INTERNAL_LINKS.SUMMARY.SIX_MAJOR_PROVINCES_TOP_50 },
    { title: "6개 도\nTOP 50", desc: "경기, 경남, 경북, 전남, 충남, 충북\n 6개 도 내 지자체 상위 50곳", bgImage: '/summary/Ranking-8.png', link: INTERNAL_LINKS.SUMMARY.SIX_PROVINCES_TOP_50 },
  ],
  [
    { title: "경제자유구역\n종합순위", desc: "전국 경제자유구역\n해당 지자체 25곳 순위", bgImage: '/summary/Ranking-9.png', link: INTERNAL_LINKS.SUMMARY.ECONOMIC_FREE_ZONE },
    { title: "성장촉진지역\n종합순위", desc: "전국 성장촉진지역\n지정 지자체 70곳 순위", bgImage: '/summary/Ranking-10.png', link: INTERNAL_LINKS.SUMMARY.GROWTH_PROMOTION_REGION },
    { title: "국가산업단지\n종합순위", desc: "전국 국가산업단지\n소재 지자체 51곳 순위", bgImage: '/summary/Ranking-11.png', link: INTERNAL_LINKS.SUMMARY.NATIONAL_INDUSTRIAL_COMPLEX },
    { title: "해안도시\n종합순위", desc: "전국 해안도시\n해당 지자체 74곳 순위", bgImage: '/summary/Ranking-12.png', link: INTERNAL_LINKS.SUMMARY.COASTAL_CITY },
  ],
];

export default function SummaryLandingSection() {
  return (
    <div
      style={{
        display: 'grid',
        gap: '24px',
        width: '1400px',
        background: '#191B22',
        padding: '40px 0',
        marginBottom: '184px'
      }}
    >
      {cardData.map((cards, rowIdx) => (
        <React.Fragment key={rowIdx}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'space-between', width: '100%' }}>
            {cards.map((card, idx) => (
              <Card key={idx} {...card} />
            ))}
          </div>
          {/* 마지막 행이 아니라면 divider 추가 */}
          {rowIdx < cardData.length - 1 && (
            <div
              style={{
                width: '100%',
                height: '2px',
                background: 'rgba(255,255,255,0.08)',
                margin: '32px 0',
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export function Card({ title, desc, tag: badge, bgImage, link }: { title: string, desc: string, tag?: string, bgImage: string, link: string }) {
  const onClick = () => {
    window.open(link, '_blank');
  }
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: '40px',
        border: '1px solid transparent',
        background: '#232631',
        boxShadow: '0 4px 32px 0 rgba(0,0,0,0.16)',
        padding: '36px 32px',
        color: '#fff',
        position: 'relative',
        display: 'flex',
        aspectRatio: '1 / 1',
        width: '100%',
        minWidth: 0,
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = '1px solid #fff';
        e.currentTarget.style.backgroundColor = '#2B3041';
        e.currentTarget.style.cursor = 'pointer';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#232631';
        e.currentTarget.style.border = '1px solid transparent';
        e.currentTarget.style.cursor = 'pointer';
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(25px)',
          pointerEvents: 'none',
        }}
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.3,
        zIndex: 50,
        pointerEvents: 'none',
      }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.7';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0.3';
        }}
      />
      {badge && <div style={{
        position: 'absolute',
        top: '24px',
        left: '24px',
        fontSize: '14px',
        color: '#fff',
        fontWeight: 500,
        letterSpacing: '1px',
        borderRadius: '8px',
        border: '1px solid #fff',
        padding: '4.5px 10px',
        pointerEvents: 'none',
      }}>{badge}</div>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '31px', zIndex: 100, pointerEvents: 'none' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '30px', fontWeight: 600, whiteSpace: 'pre-line', color: '#E7E8EA' }}>{title}</div>
          <div style={{ paddingTop: '9px' }}><ArrowRightUp color='#E7E8EA' width={14} height={14} /></div>

        </div>
        <div style={{ fontSize: '16px', fontWeight: 400, color: '#D9D9E8', whiteSpace: 'pre-line' }}>{desc}</div>

      </div>


    </div>

  );
}