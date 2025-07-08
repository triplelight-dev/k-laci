'use client';

import React, { useState } from 'react';
import { UserService } from '../../../api/services/user.service';
import LoginGuideModal from '../../../components/ui/LoginGuideModal';
import PreRegistrationModal from '../../../components/ui/PreRegistrationModal';
import { useIsLoggedIn } from '../../../store';

const PreRegistrationSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginGuideModalOpen, setIsLoginGuideModalOpen] = useState(false);
  const [agree_to_report_reservation, setAgreeToReportReservation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  
  const isLoggedIn = useIsLoggedIn();

  const title = '균형발전 전략의 시작, KLACI 인사이트 리포트';
  const descriptions = [
    '지역자산역량지수 프레임워크 해설과 활용법,',
    '그리고 각 지자체의 데이터 인사이트를 한 권의 책으로 받아보세요',
  ];

  const reservationButtonText = '사전 예약 바로가기';

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
        const hasAgreedToReport = response.data.agreeToReportReservation || false;
        setAgreeToReportReservation(hasAgreedToReport);
        setUserId(response.data.id);
        setIsModalOpen(true);
      } else {
        alert('프로필 정보를 불러오는데 실패했습니다.');
      }
    } catch (error) {
      alert('프로필 정보를 불러오는데 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          backgroundColor: 'white',
          borderRadius: '12px',
          color: 'black',
          minHeight: '400px',
          overflow: 'hidden',
        }}
      >
        {/* 가운데 정렬된 내용 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            padding: '60px 40px',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '24px',
              lineHeight: '1.4',
            }}
          >
            {title}
          </div>

          {descriptions.map((description, index) => (
            <div
              key={index}
              style={{
                fontSize: '1.2rem',
                textAlign: 'center',
                lineHeight: 1.5,
              }}
            >
              {description}
            </div>
          ))}

          <button
            onClick={handlePreRegistrationClick}
            disabled={isLoading}
            style={{
              border: 'none',
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              minWidth: '220px',
              background: 'black',
              color: 'white',
              marginTop: '50px',
              transition: 'background-color 0.2s ease',
              opacity: isLoading ? 0.6 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#333333';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#000000';
              }
            }}
          >
            {isLoading ? '로딩 중...' : reservationButtonText}
          </button>
        </div>
      </div>

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

export default PreRegistrationSection;
