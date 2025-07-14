import AuthPersistenceProvider from '@/components/AuthPersistenceProvider';
import MobileDetector from '@/components/MobileDetector';
import { getSiteUrl, isProductionDomain } from '@/config/environment';
import { ChakraProvider, ReactQueryProviders } from '@/providers';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';

// Pretendard Variable 가변 폰트 (상대 경로로 수정)
const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2', // app에서 public으로 가는 상대 경로
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
  fallback: [
    'system-ui',
    '-apple-system', 
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif'
  ],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// 동적 메타데이터 함수
export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl();
  const isProduction = isProductionDomain();

  // Production 환경이 아닌 경우 기본 메타데이터만 반환
  if (!isProduction) {
    return {
      title: 'KLACI - 개발 환경',
      description: 'KLACI 개발 환경',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  // Production 환경인 경우 전체 SEO 메타데이터 반환
  return {
    title: '지역자산역량지수(KLACI) - Korea Local Asset Competency Index 2025',
    description:
      '전국 229개 지자체의 숨겨진 강점과 새로운 기회를 직접 발견해보세요. 지역자산역량지수(KLACI)로 지역의 잠재자산과 자생력을 분석하고, 균형발전과 로컬 중심의 순환경제를 위한 지역맞춤 전략을 제시합니다.',
    openGraph: {
      title: '지역자산역량지수(KLACI) - Korea Local Asset Competency Index 2025',
      description:
        '전국 229개 지자체의 숨겨진 강점과 새로운 기회를 직접 발견해보세요. 지역자산역량지수(KLACI)로 지역의 잠재자산과 자생력을 분석하고, 균형발전과 로컬 중심의 순환경제를 위한 지역맞춤 전략을 제시합니다.',
      url: siteUrl,
      siteName: 'KLACI',
      images: [
        {
          url: `${siteUrl}/thumbnail/thumbnail.png`,
          width: 1200,
          height: 630,
          alt: 'KLACI - 지역 자산 역량 지수',
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '지역자산역량지수(KLACI) - Korea Local Asset Competency Index 2025',
      description:
        '전국 229개 지자체의 숨겨진 강점과 새로운 기회를 직접 발견해보세요. 지역자산역량지수(KLACI)로 지역의 잠재자산과 자생력을 분석하고, 균형발전과 로컬 중심의 순환경제를 위한 지역맞춤 전략을 제시합니다.',
      images: [`${siteUrl}/thumbnail/thumbnail.png`],
    },
    keywords: [
      '지역자산역량지수', '지역자산지수', '지역역량지수', '지역자산력', '지역력', '지역경쟁력',
      'KLACI', '지역력지수', '지역경쟁력지수', '균형발전', '전영수 교수', '트리플라잇',
      '이은화 대표', '정유진 대표', '지역개발론', '지역주도성', '지역자산', '지역주체',
      '로컬복원', '로컬 중심의 순환경제와 특화모델', '로컬 주도 회복 시스템', '생태복원',
      '자치분권형 로컬리즘', '자립자강형 복원모델', '지역맞춤의 복원전략', '잠재자산',
      '자생력', '탈중앙화', '자원역량', '로컬 기반 지속가능성', '지역성', '분수효과',
      '선진국형 경제질서', '내국 기반의 역내 경제', '로컬 요소', '글로컬', '내발적',
      '민주적', '자립적', '개방적', '영리적 작동체계'
    ],
    authors: [
      { name: 'KLACI Team' },
      { name: '전영수 교수' },
      { name: '트리플라잇' },
      { name: '이은화 대표' },
      { name: '정유진 대표' }
    ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: siteUrl,
    },
    category: '지역개발',
    classification: '지역자산역량지수',
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  viewportFit: 'cover' as const,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProduction = isProductionDomain();

  return (
    <html lang="ko" className={`w-full ${pretendard.variable}`} suppressHydrationWarning>
      <head>
        {/* Production 환경에서만 Analytics 스크립트 로드 */}
        {isProduction && (
          <>
            {/* Google Analytics */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-KDXMQDERTP"
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-KDXMQDERTP', { page_path: window.location.pathname });
                `,
              }}
            />

            {/* Microsoft Clarity */}
            <Script
              id="microsoft-clarity"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(c,l,a,r,i,t,y){
                      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", "sb23wewodm");
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${pretendard.className} ${geistSans.variable} ${geistMono.variable} min-h-screen w-full bg-white antialiased`}
        style={{
          overscrollBehavior: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <ReactQueryProviders>
          <ChakraProvider>
            <AuthPersistenceProvider>
              <MobileDetector>{children}</MobileDetector>
            </AuthPersistenceProvider>
          </ChakraProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
