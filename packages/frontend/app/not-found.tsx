import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'KLACI',
  description: '요청하신 페이지를 찾을 수 없습니다.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function NotFound() {
  return (
    <div>
      <h2>페이지를 찾을 수 없습니다</h2>
      <p>요청하신 페이지가 존재하지 않습니다.</p>
    </div>
  );
} 