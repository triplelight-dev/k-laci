'use client';

import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { UserService } from '../../api/services/user.service';
import { useIsLoggedIn } from '../../store';
import Button from '../atoms/buttons/Button';
import LoginGuideModal from '../ui/LoginGuideModal';
import PreRegistrationModal from '../ui/PreRegistrationModal';

const HomePreRegistrationSection = (props: { height?: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginGuideModalOpen, setIsLoginGuideModalOpen] = useState(false);
  const [agree_to_report_reservation, setAgreeToReportReservation] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);


  const isLoggedIn = useIsLoggedIn();

  // 타이틀 텍스트를 배열로 정의
  const MAIN_TITLE = ['균형발전 전략의 시작,', 'KLACI 데이터 백서'];

  // 설명 텍스트를 배열로 정의
  const DESCRIPTION_TEXTS = [
    '지역자산역량지수 프레임워크 해설과 활용법,', '그리고 모든 지자체의 데이터와 심층 인사이트를 한 권의 책으로 받아보세요.'
  ];

  const handlePreRegistrationClick = async () => {
    // 로그인하지 않은 경우 로그인 안내 모달 표시
    if (!isLoggedIn) {
      setIsLoginGuideModalOpen(true);
      return;
    }

    setIsLoading(true);


    try {
      // 유저 프로필 조회 API 호출
      const response = await UserService.getProfile();


      if (response.success) {
        // 리포트 사전동의 여부 확인
        const hasAgreedToReport =
          response.data.agreeToReportReservation || false;
        setAgreeToReportReservation(hasAgreedToReport);
        setUserId(response.data.id);
        setIsModalOpen(true);
      } else {
        console.error('프로필 정보를 불러오는데 실패했습니다.');
      }
    } catch (error) {
      console.error('프로필 정보를 불러오는데 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section
        className="hidden lg:block"
        style={{
          width: '100%',
          minHeight: '500px',
          padding: '80px 120px',
          backgroundColor: '#14161D',
          color: '#ffffff',
          height: props.height || 'calc(100vh - 300px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Flex justifyContent="space-between" alignItems="start" maxWidth="1400px" width="100%">
          {/* 좌측: 기존 내용 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            {/* 메인 타이틀 */}
            <div
              style={{
                fontSize: '48px',
                fontWeight: '600',
                textAlign: 'left',
                marginBottom: '36px',
                lineHeight: '1.4',
              }}
            >
              {MAIN_TITLE.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>

            {/* 설명 텍스트들 */}
            <div
              style={{
                marginBottom: '74px',
                textAlign: 'left',
              }}
            >
              {DESCRIPTION_TEXTS.map((text, index) => (
                <div
                  key={index}
                  style={{
                    fontSize: '18px',
                    color: '#fff',
                    lineHeight: '1.6',
                  }}
                >
                  {text}
                </div>
              ))}
            </div>

            {/* 사전예약 바로가기 버튼 */}
            <div
              style={{
                background: 'linear-gradient(90deg, #F56542 0%, #F4B04D 33%, #ACAAE8 66%, #74BF9E 100%)',
                padding: '1px',
                borderRadius: '14px',
                opacity: isLoading ? 0.6 : 1,
              }}
            >
              <Button
                label={
                  <>
                    {isLoading ? '로딩 중...' : '사전예약 바로가기'}
                    {!isLoading && (
                      <Image
                        src="/arrow_button_icon_white.png"
                        alt="화살표 아이콘"
                        width={10}
                        height={10}
                      />
                    )}
                  </>
                }
                variant='secondary'
                theme='dark'
                onClick={handlePreRegistrationClick}
                disabled={isLoading}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 36px',
                  backgroundColor: '#14161D',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '14px',
                  fontSize: '18px',
                  fontWeight: '400',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  width: '100%',
                }}
              >

              </Button>
            </div>
          </div>

          {/* 우측: 이미지 */}
          <div
            style={{
              display: 'flex',
              maxWidth: '800px',
              justifyContent: 'center',

            }}
          >
            <img
              src="/report_banner.png"
              alt="KLACI 인사이트 리포트"
              style={{
                maxWidth: '600px',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
        </Flex>
      </section>

      {/* 사전예약 모달 */}
      {userId && (
        <PreRegistrationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          agree_to_report_reservation={agree_to_report_reservation}
          userId={userId}
        />
      )}

      {/* 로그인 안내 모달 */}
      <LoginGuideModal
        isOpen={isLoginGuideModalOpen}
        onClose={() => setIsLoginGuideModalOpen(false)}
      />
    </>
  );
};

export default HomePreRegistrationSection;
