import AuthPersistenceProvider from '@/components/AuthPersistenceProvider';
import MobileDetector from '@/components/MobileDetector';
import Providers from '@/components/Providers';
import { getSiteUrl } from '@/config/environment';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '지역자산역량지수(KLACI) - Korea Local Asset Competency Index 2025',
  description:
    '전국 229개 지자체의 숨겨진 강점과 새로운 기회를 직접 발견해보세요.',
  openGraph: {
    title: '지역자산역량지수(KLACI) - Korea Local Asset Competency Index 2025',
    description:
      '전국 229개 지자체의 숨겨진 강점과 새로운 기회를 직접 발견해보세요.',
    url: getSiteUrl(),
    siteName: 'KLACI',
    images: [
      {
        url: `${getSiteUrl()}/thumbnail/thumbnail.png`,
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
      '전국 229개 지자체의 숨겨진 강점과 새로운 기회를 직접 발견해보세요.',
    images: [`${getSiteUrl()}/thumbnail/thumbnail.png`],
  },
  keywords: ['지역', '자산', '역량', '지수', '분석', 'KLACI', '로컬', '경쟁력'],
  authors: [{ name: 'KLACI Team' }],
  robots: {
    index: true,
    follow: true,
  },
};

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
  return (
    <html lang="ko" className="w-full">
      <head>
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen w-full bg-white antialiased`}
        style={{
          overscrollBehavior: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <Providers>
          <AuthPersistenceProvider>
            <MobileDetector>{children}</MobileDetector>
          </AuthPersistenceProvider>
        </Providers>
      </body>
    </html>
  );
}
