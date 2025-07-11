'use client';

import { ROUTES } from '@/constants/data';
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
    router.push(ROUTES.LOGIN);
  };

  const handleSignupClick = () => {
    router.push(ROUTES.SIGNUP);
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191B22',
        color: '#ffffff',
        paddingBottom: '80px',
        minHeight: '400px',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-248px',
        left: 0,
        right: 0,
        background: 'linear-gradient(180deg, rgba(245, 245, 245, 0.00) 0%, #ffffff 100%)',
        height: 246,
        zIndex: 1,
        width: '100%',
      }}>
      </div>
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

        {/* 하단 두 개 버튼 */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          {/* 왼쪽 버튼: 흰색 배경 */}
          <button
            onClick={handleLoginClick}
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: 'none',
              borderRadius: '8px',
              padding: '14px 24px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              justifyContent: 'center',
              minWidth: '180px',
            }}
          >
            로그인
          </button>

          {/* 오른쪽 버튼: 투명 배경 흰색 보더 */}
          <button
            onClick={handleSignupClick}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '1px solid white',
              borderRadius: '8px',
              padding: '14px 24px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              justifyContent: 'center',
              minWidth: '180px',
            }}
          >
            회원가입 바로가기
            <img
              src="/arrow_button_icon_white.png"
              alt="화살표 아이콘"
              style={{
                width: '10px',
                height: '10px',
                display: 'block',
              }}
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default LoginSuggestionSection;
