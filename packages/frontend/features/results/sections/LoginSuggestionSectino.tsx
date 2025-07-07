'use client';

import { useRouter } from 'next/navigation';

interface LoginSuggestionSectionProps {
  title?: string;
  descriptions?: string[];
}

const LoginSuggestionSection = ({
  title = '우리 지역의 숨겨진 역량, 지금 바로 확인해보세요',
  descriptions = [
    '지자체가 보유한 역량의 분포와 범주별 순위,',
    '55가지 세부지표별 데이터를 무료로 확인할 수 있습니다',
  ],
}: LoginSuggestionSectionProps) => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/auth/login');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '0px 20px',
        minHeight: '400px',
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '600px',
          width: '100%',
        }}
      >
        {/* 타이틀 */}
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '24px',
            color: '#ffffff',
          }}
        >
          {title}
        </h2>

        {/* 설명 텍스트들 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
            marginBottom: '40px',
          }}
        >
          {descriptions.map((description, index) => (
            <div
              key={index}
              style={{
                fontSize: '16px',
                lineHeight: '1.3',
                color: '#ffffff',
                margin: 0,
              }}
            >
              {description}
            </div>
          ))}
        </div>

        {/* 로그인 바로가기 버튼 */}
        <button
          onClick={handleLoginClick}
          style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            border: 'none',
            borderRadius: '8px',
            padding: '16px 32px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            minWidth: '200px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f0f0f0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
          }}
        >
          로그인하고 더 알아보기
        </button>
      </section>
    </div>
  );
};

export default LoginSuggestionSection;
