'use client';

import { ArrowRightUp } from '@/components/atoms/assets';
import Button from '@/components/atoms/buttons/Button';
import { ROUTES } from '@/constants/data';
import { useIsMobile } from '@/hooks';
import { useDistrict } from '@/store';
import { useRouter } from 'next/navigation';

interface LoginSuggestionSectionProps {
  title?: string;
  descriptions?: string[];
}

const LoginSuggestionSection = ({
  descriptions = [
    '지자체가 보유한 역량의 분포와 범주별 순위,',
    '55가지 세부지표별 데이터를 무료로 확인할 수 있습니다',
  ],
}: LoginSuggestionSectionProps) => {
  const { selectedProvince, selectedDistrict } = useDistrict();
  const router = useRouter();


  const handleLoginClick = () => {
    router.push(ROUTES.LOGIN);
  };

  const handleSignupClick = () => {
    router.push(ROUTES.SIGNUP);
  };

  const selectedProvinceName = selectedProvince?.name || '서울';
  const selectedDistrictName = selectedDistrict?.name || '종로구';

  const header = `${selectedProvinceName} ${selectedDistrictName}의 숨겨진 역량,\n지금 확인해보세요`

  const isMobile = useIsMobile();

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
        paddingBottom: '96px',
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
          maxWidth: isMobile ? '100%' : '600px',
          width: '100%',
        }}
      >
        {/* 타이틀 */}
        <h2
          style={{
            fontSize: isMobile ? '28px' : '48px',
            fontWeight: isMobile ? '500' : '600',
            margin: isMobile ? '10px 0 10px' : '55px 0 25px',
            color: '#ffffff',
            whiteSpace: 'pre-line',
          }}
        >
          {header}
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
                fontSize: isMobile ? '15px' : '18px',
                lineHeight: isMobile ? '20px' : '28px',
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
          <Button variant='primary' onClick={handleLoginClick} label='로그인'
            style={{
              width: isMobile ? '170px' : '255px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px'
            }}
          />

          <Button variant='secondary' onClick={handleSignupClick} label='회원가입'
            icon={<ArrowRightUp color='white' />}
            style={{
              width: isMobile ? '170px' : '255px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px'
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default LoginSuggestionSection;
