'use client';

import React, { useState } from 'react';
import PreRegistrationModal from '../../../components/ui/PreRegistrationModal';

const PreRegistrationSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agree_to_report_reservation, setAgreeToReportReservation] = useState(false); // 임시로 false로 설정

  const title = '균형발전 전략의 시작, KLACI 인사이트 리포트';
  const descriptions = [
    '지역자산역량지수 프레임워크 해설과 활용법,',
    '그리고 각 지자체의 데이터 인사이트를 한 권의 책으로 받아보세요',
  ];

  const reservationButtonText = '사전 예약 바로가기';

  const handlePreRegistrationClick = () => {
    setIsModalOpen(true);
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
            style={{
              border: 'none',
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
              minWidth: '220px',
              background: 'black',
              color: 'white',
              marginTop: '50px',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#333333';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
            }}
          >
            {reservationButtonText}
          </button>
        </div>
      </div>

      {/* 모달 */}
      <PreRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        agree_to_report_reservation={agree_to_report_reservation}
      />
    </>
  );
};

export default PreRegistrationSection;
