'use client';

import { useEffect, useState } from 'react';
import { UserService } from '../../api/services/user.service';

interface PreRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  agree_to_report_reservation: boolean;
  userId: string;
}

const PreRegistrationModal = ({
  isOpen,
  onClose,
  agree_to_report_reservation,
  userId,
}: PreRegistrationModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  // 모달이 열리고 동의하지 않은 경우 자동으로 API 호출
  useEffect(() => {
    if (
      isOpen &&
      !agree_to_report_reservation &&
      userId &&
      !isLoading &&
      !isUpdated
    ) {
      handleAutoRegistration();
    }
  }, [isOpen, agree_to_report_reservation, userId]);

  const handleAutoRegistration = async () => {
    if (!userId) {
      console.error('사용자 정보를 찾을 수 없습니다.');
      onClose();
      return;
    }

    setIsLoading(true);

    try {
      const response = await UserService.agreeToReportReservation(userId);

      if (response.success) {
        setIsUpdated(true);
      } else {
        console.error(`사전예약 등록에 실패했습니다: ${response.message}`);
        onClose();
      }
    } catch (error: any) {
      // 사용자에게 더 구체적인 에러 메시지 표시
      let errorMessage = '사전예약 등록에 실패했습니다.';
      if (error.response?.status === 400) {
        if (
          error.response.data.message &&
          Array.isArray(error.response.data.message)
        ) {
          errorMessage = `유효성 검사 오류: ${error.response.data.message.join(', ')}`;
        } else {
          errorMessage = '잘못된 요청입니다. 서버를 확인해주세요.';
        }
      } else if (error.response?.status === 401) {
        errorMessage = '로그인이 필요합니다. 다시 로그인해주세요.';
      } else if (error.response?.status === 404) {
        errorMessage = '사용자 프로필을 찾을 수 없습니다. 다시 로그인해주세요.';
      } else if (error.response?.status === 500) {
        errorMessage = '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
      } else if (error.code === 'ECONNREFUSED') {
        errorMessage =
          '서버에 연결할 수 없습니다. 백엔드 서버가 실행 중인지 확인해주세요.';
      }

      console.error(errorMessage);
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirm = () => {
    onClose();
    setIsUpdated(false);
  };

  if (!isOpen) return null;

  const title = agree_to_report_reservation
    ? '이미 사전 예약을 등록했습니다'
    : isUpdated
      ? '사전예약 등록 완료'
      : '사전예약 등록';

  const messages = agree_to_report_reservation
    ? [
        '서비스 정식 오픈과 함께 회원가입 시 등록하신 메일 주소로',
        '리포트 송부 관련 안내 메일을 보내드리겠습니다.',
      ]
    : isUpdated
      ? [
          'KLACI 리포트 사전 예약을 등록해주셔서 감사합니다.',
          '서비스 정식 오픈과 함께 회원가입 시 등록하신 메일 주소로',
          '리포트 송부 관련 안내 메일을 보내드리겠습니다.',
        ]
      : ['사전예약 등록 중입니다...'];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '40px',
          maxWidth: '500px',
          width: '90%',
          textAlign: 'center',
          color: '#000000',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 아이콘 */}
        <div
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#f3f4f6',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto 24px',
            fontSize: '24px',
          }}
        >
          {isUpdated
            ? '✓'
            : agree_to_report_reservation
              ? '✓'
              : isLoading
                ? '...'
                : '?'}
        </div>

        {/* 타이틀 */}
        <div
          style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '24px',
            lineHeight: '1.4',
          }}
        >
          {title}
        </div>

        {/* 메시지들 */}
        <div
          style={{
            marginBottom: '32px',
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                fontSize: '14px',
                color: 'black',
                lineHeight: '1.4',
              }}
            >
              {message}
            </div>
          ))}
        </div>

        {/* 버튼 - 이미 동의했거나 업데이트 완료된 경우에만 표시 */}
        {(agree_to_report_reservation || isUpdated) && (
          <button
            onClick={handleConfirm}
            style={{
              width: '380px',
              backgroundColor: '#000000',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 32px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#333333';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
            }}
          >
            확인
          </button>
        )}
      </div>
    </div>
  );
};

export default PreRegistrationModal;
