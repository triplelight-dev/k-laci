import AuthPersistenceProvider from '@/components/AuthPersistenceProvider';
import MobileDetector from '@/components/MobileDetector';
import Providers from '@/components/Providers';
import { getSiteUrl } from '@/config/environment';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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
  title: 'KLACI - Korea Local Asset Competency Index',
  description: '지역 자산 역량 지수를 확인하고 지역별 경쟁력을 분석해보세요',
  openGraph: {
    title: 'KLACI - Korea Local Asset Competency Index',
    description: '지역 자산 역량 지수를 확인하고 지역별 경쟁력을 분석해보세요',
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
    title: 'KLACI - Korea Local Asset Competency Index',
    description: '지역 자산 역량 지수를 확인하고 지역별 경쟁력을 분석해보세요',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen w-full bg-white antialiased`}
        style={{
          overscrollBehavior: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <Providers>
          <AuthPersistenceProvider>
            <MobileDetector>
              {children}
            </MobileDetector>
          </AuthPersistenceProvider>
        </Providers>
      </body>
    </html>
  );
}
