'use client';

import BannerModal from '@/components/ui/BannerModal';
import { Button, Flex, useDisclosure } from '@chakra-ui/react';

export default function WhitePaperBanner() {
  const { open: isOpen, onOpen, onClose } = useDisclosure({ defaultOpen: true });
  
  const title = ['대한민국 지역역량 데이터 백서', '2025-2026 발간']
    const description = [
      '229개 기초자치단체의 10년 흐름을 2025–2026 최신 데이터로 재정비했습니다. 이렇게 업데이트된 데이터는 대한민국 모든 지역을 한 권으로 비교할 수 있는 백서',
      '(약 600페이지)',
      '로 첫 공개합니다.\n',
      '대한민국 모든 지역의 강점·약점·변화 방향을 진단하는 새로운 기준서를 만나보세요.'
  ];

  return (
    <BannerModal isOpen={isOpen} onClose={onClose}>
      <Flex style={{
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}>
        {/* 상단 컨텐츠 영역 */}
        <Flex style={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          flex: 1,
          padding: '40px 24px 0',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            {title.map((line, index) => (
              <h1 key={index} style={{
                fontSize: '30px',
                fontWeight: 'bold',
                textAlign: 'center',
                margin: 0,
                lineHeight: 1.1,
              }}>
                {line}
              </h1>
            ))}
          </div>
          <div style={{
            fontSize: '16px',
            textAlign: 'center',
            lineHeight: '1.6',
            margin: 0,
            whiteSpace: 'pre-line',
            maxWidth: '460px',
          }}>
            <span>{description[0]}</span>
            <span style={{ 
              fontSize: '14px',
              color: '#666666',
            }}>
              {description[1]}
            </span>
            <span>{description[2]}</span>
            <span style={{
              display: 'block',
              marginTop: '16px',
            }}>
              {description[3]}
            </span>
          </div>

          {/* 상단 디바이더 */}
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#D9D9E8',
          }} />

          {/* 특징 리스트 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#000000',
          }}>
            <div>・ 최신 데이터 기반 심층 인사이트</div>
            <div>・ 핵심 지표별 진단 및 전략 가이드</div>
            <div>・ 229개 기초자치단체의 비교 진단 보고서</div>
          </div>

          {/* 하단 디바이더 */}
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#D9D9E8',
          }} />

        </Flex>

        {/* 하단 버튼 */}
        <Button
          onClick={() => {}}
          style={{
            width: '100%',
            backgroundColor: '#000000',
            color: 'white',
            padding: '16px',
            borderRadius: '0 0 8px 8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            marginTop: 'auto',
          }}
        >
          백서 출시 알림 신청하기
        </Button>
      </Flex>
    </BannerModal>
  );
}
