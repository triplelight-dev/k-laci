import MobileDetector from '@/components/MobileDetector';
import Providers from '@/components/Providers';
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
  title: 'K-LACI',
  description: 'Korea Local Asset Competency Index',
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
    viewportFit: 'cover',
  },
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
          <MobileDetector>
            {children}
          </MobileDetector>
        </Providers>
      </body>
    </html>
  );
}
