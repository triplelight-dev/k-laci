import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입 - KLACI',
  description: 'KLACI 회원가입 페이지',
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#F4F4F4' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-md">
          <h1 className="mb-8 text-center text-2xl font-bold">회원가입</h1>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <p className="text-center text-gray-600">
              회원가입 페이지가 준비 중입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
