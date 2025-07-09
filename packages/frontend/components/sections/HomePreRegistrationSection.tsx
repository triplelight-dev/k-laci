'use client';

import Image from 'next/image';
import { useState } from 'react';
import { UserService } from '../../api/services/user.service';
import { useIsLoggedIn } from '../../store';
import LoginGuideModal from '../ui/LoginGuideModal';
import PreRegistrationModal from '../ui/PreRegistrationModal';

const HomePreRegistrationSection = () => {
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
    '지역자산역량지수 프레임워크 해설과 활용법,',
    '그리고 모든 지자체의 데이터와 심층 인사이트를 한 권의 책으로 받아보세요.',
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
        style={{
          width: '100%',
          padding: '80px 0px',
          backgroundColor: '#14161D',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '80px',
            width: '90%',
            maxWidth: '1700px',
            margin: '0 auto',
          }}
        >
          {/* 좌측: 기존 내용 */}
          <div
            style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            {/* 메인 타이틀 */}
            <div
              style={{
                fontSize: '34px',
                fontWeight: '600',
                textAlign: 'left',
                marginBottom: '24px',
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
                marginBottom: '32px',
                textAlign: 'left',
              }}
            >
              {DESCRIPTION_TEXTS.map((text, index) => (
                <div
                  key={index}
                  style={{
                    fontSize: '16px',
                    color: '#D1D5DB',
                    lineHeight: '1.6',
                  }}
                >
                  {text}
                </div>
              ))}
            </div>

            {/* 사전예약 바로가기 버튼 */}
            <button
              onClick={handlePreRegistrationClick}
              disabled={isLoading}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 36px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid #ffffff',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.6 : 1,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#000000';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
            >
              {isLoading ? '로딩 중...' : '사전예약 바로가기'}
              {!isLoading && (
                <Image
                  src="/arrow_button_icon_white.png"
                  alt="화살표 아이콘"
                  width={10}
                  height={10}
                />
              )}
            </button>
          </div>

          {/* 우측: 이미지 */}
          <div
            style={{
              flex: '1.5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="/report_banner.png"
              alt="KLACI 인사이트 리포트"
              style={{
                maxWidth: '550px',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
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
