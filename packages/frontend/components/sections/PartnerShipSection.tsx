'use client';

import { ROUTES } from '@/constants/data';
import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightUp } from '../atoms/assets';
import Button from '../atoms/buttons/Button';

const PartnerShipSection = () => {
  // 텍스트 데이터를 배열로 정의
  const MAIN_TITLE = [
    '데이터 너머, 지속가능한',
    '지역 생태계를 함께 만들어갑니다',
  ];

  // 설명 텍스트를 배열로 정의하고 볼드 처리할 키워드 지정
  const DESCRIPTION_TEXTS = [
    {
      text: 'KLACI는 데이터로 사회문제를 해결하는 트리플라잇과 대한민국 균형발전 연구를 선도하는 한양대학교 로컬리즘연구회의 공동 연구로',
      boldWords: ['트리플라잇', '한양대학교 로컬리즘연구회'],
    },
    {
      text: "탄생했습니다. 우리는 인구감소와 지역소멸이라는 시대적 난제를 해결할 열쇠는, 바로 '지역 고유의 잠재력'에 있다고 믿습니다.",
      boldWords: [],
    },
    {
      text: '이러한 비전 아래, KLACI는 단순한 평가를 넘어 지역이 스스로 기회를 찾고 성장 전략을 수립하도록 돕는 과학적 진단 도구입니다.',
      boldWords: [],
    },
  ];

  const BOLD_TEXTS = [
    '데이터에 기반한 지역 혁신을 위해, 공동 연구부터 정책 컨설팅, 투자 자문에 이르기까지 다양한 형태의 파트너십을 환영합니다.',
  ];

  const LOGO_SRC = '/triplelight_logo_white.png';
  const LOGO_ALT = 'K-LACI Logo';

  // 텍스트에서 특정 키워드를 볼드 처리하는 함수
  const renderTextWithBold = (text: string, boldWords: string[]) => {
    if (!boldWords || boldWords.length === 0) {
      return text;
    }

    let result = text;
    boldWords.forEach((word) => {
      const regex = new RegExp(`(${word})`, 'g');
      result = result.replace(
        regex,
        '<strong style="font-weight: 700; color: #ffffff;">$1</strong>',
      );
    });

    return result;
  };

  return (
    <Flex justifyContent="center" alignItems="center" width="100%" height="100vh" minHeight='800px'>
      <section
        style={{
          width: '100%',
          maxWidth: '1400px',
          padding: '80px 0',
          backgroundColor: '#2A2F40',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '52px',
          justifyContent: 'center',
          // marginBottom: '200px',
        }}
      >
        {/* 로고 */}
        <div style={{ marginBottom: '40px' }}>
          <Image
            src={LOGO_SRC}
            alt={LOGO_ALT}
            width={120}
            height={56}
            style={{
              height: '45px',
              width: 'auto',
            }}
          />
        </div>

        {/* 메인 타이틀 */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: '58px',
            lineHeight: '68px',
          }}
        >
          {MAIN_TITLE.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>

        {/* 설명 텍스트 */}
        <div
          style={{
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '32px',
            color: '#D1D5DB',
            maxWidth: '1200px',
            fontWeight: '400',
          }}
        >
          {DESCRIPTION_TEXTS.map((item, index) => (
            <div
              key={index}
              style={{
                //   marginBottom: '16px',
                lineHeight: '1.6',
              }}
              dangerouslySetInnerHTML={{
                __html: renderTextWithBold(item.text, item.boldWords),
              }}
            />
          ))}
        </div>

        {/* 볼드 텍스트들 */}
        <div
          style={{
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          {BOLD_TEXTS.map((text, index) => (
            <div
              key={index}
              style={{
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '12px',
                color: '#ffffff',
              }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* 버튼들 */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
          }}
        >
          {/* 파트너십 문의하기 버튼 */}
          <a href="mailto:klaci@triplelight.co?subject=파트너십 문의&body=안녕하세요, KLACI 파트너십에 대해 문의드립니다.%0D%0A%0D%0A[여기에 문의 내용을 작성해주세요]%0D%0A%0D%0A감사합니다.">
            <Button label='파트너십 문의하기'
              variant='primary'
              icon={<ArrowRightUp color='#000000' />} />
          </a>

          {/* 회원가입 바로가기 버튼 */}
          <Link href={ROUTES.SIGNUP}>
            <Button label='회원가입 바로가기'
              variant='secondary'
              icon={<ArrowRightUp color='#ffffff' />} />
          </Link>
        </div>
      </section>
    </Flex>
  );
};

export default PartnerShipSection;
