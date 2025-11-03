'use client';

import { ROUTES } from '@/constants/data';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { UserService } from '../../api/services/user.service';
import { useIsLoggedIn } from '../../store';
import Button from '../atoms/buttons/Button';

interface CardStyle {
  opacity: number;
  transform: string;
  border: string;
  zIndex: number;
}
// 💡 가정: 기존 data 배열의 요소는 { id: number, image: string, ... } 형태라고 가정합니다.

// 1. 추가할 3개의 새로운 이미지 데이터 정의
const serviceMainImage = {
  id: 1,
  image: 'URL_FOR_SERVICE_MAIN_IMAGE',
  title: '서비스 메인 이미지'
};

const version2Info = {
  id: 2,
  image: 'URL_FOR_VERSION2_INFO',
  title: '버전 2 안내'
};

const whitepaperPromo = {
  id: 3,
  image: 'URL_FOR_WHITEPAPER_PROMO',
  title: '백서 홍보 배너'
};

const MobileHomeSection = (props: { height?: string }) => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const extendedData = [
    serviceMainImage,
    version2Info,
    whitepaperPromo
  ];
  const dataLength = 3;
  const [hoveredCardId, setHoveredCardId] = useState<string | number | null>(
    null,
  );

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % 3);
  }, [3]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + 3) % 3);
  }, [3]);

  // 마우스 드래그 이벤트 핸들러
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - dragStart.x;
      const threshold = 50; // 드래그 임계값

      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
        setIsDragging(false);
      }
    },
    [isDragging, dragStart, nextSlide, prevSlide],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // 터치 이벤트 핸들러
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    setDragStart({ x: touch.clientX, y: touch.clientY });
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      const deltaX = touch.clientX - dragStart.x;
      const threshold = 50;

      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    },
    [dragStart, nextSlide, prevSlide],
  );

  // 카드의 위치와 스타일 계산
  const getCardStyle = (index: number, cardId: string | number): CardStyle => {
    const distance = index - currentIndex;
    const totalCards = dataLength;

    // 순환 거리 계산 (가장 가까운 경로)
    let adjustedDistance = distance;
    if (Math.abs(distance) > totalCards / 2) {
      adjustedDistance =
        distance > 0 ? distance - totalCards : distance + totalCards;
    }

    // 카드 간격 (카드 너비 + gap) - 간격을 늘림
    const cardSpacing = 400; // 260px 카드 + 140px gap
    const translateX = adjustedDistance * cardSpacing;

    // Fadeout 효과: 거리에 따른 투명도 계산
    const baseOpacity = 1;
    const opacity = Math.max(0, baseOpacity - Math.abs(adjustedDistance) * 0.3);

    // 호버된 카드인지 확인
    const isHovered = hoveredCardId === cardId;

    if (adjustedDistance === 0) {
      // 가운데 카드 (선택된 카드)
      return {
        opacity: 1,
        transform: `translateX(${translateX}px) scale(1)`,
        border: isHovered ? '1px solid #000000' : '1px solid #E7E8EA',
        zIndex: 10,
      };
    } else if (Math.abs(adjustedDistance) === 1) {
      // 바로 옆 카드들
      return {
        opacity: Math.max(0.3, opacity),
        transform: `translateX(${translateX}px) scale(1)`,
        border: isHovered ? '1px solid #000000' : '1px solid #E7E8EA',
        zIndex: 9,
      };
    } else if (Math.abs(adjustedDistance) === 2) {
      // 두 번째 옆 카드들
      return {
        opacity: Math.max(0.1, opacity),
        transform: `translateX(${translateX}px) scale(1)`,
        border: isHovered ? '1px solid #000000' : '1px solid #E7E8EA',
        zIndex: 8,
      };
    } else if (Math.abs(adjustedDistance) === 3) {
      // 세 번째 옆 카드들
      return {
        opacity: Math.max(0.05, opacity),
        transform: `translateX(${translateX}px) scale(1)`,
        border: isHovered ? '1px solid #000000' : '1px solid #E7E8EA',
        zIndex: 7,
      };
    } else {
      // 멀리 있는 카드들
      return {
        opacity: 0,
        transform: `translateX(${translateX}px) scale(1)`,
        border: isHovered ? '1px solid #000000' : '1px solid #E7E8EA',
        zIndex: 1,
      };
    }
  };

  return (
    <div className="flex flex-col gap-3">

      <>

        <div className="flex flex-col items-center w-full gap-5"
          style={{
            padding: '16px'
          }}>

          <img
            src="/mobile/mobile_home.png"
            alt="모바일 페이지"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px'
            }}
          />

          <div className="flex flex-col w-full block items-center gap-5">
            {/* Login Button - 흰색 배경 */}
            <Link href={ROUTES.RESULT} className="w-full block">
              <Button
                variant="primary"
                label="우리 지자체 조회하기"
                padding="17px 0px"
                fontSize="16px"
                fontWeight="500"
                width='100%'
                theme='dark'
              />
            </Link>

            {/* Signup Button - 투명 배경 흰 보더 + 우측 대각선 아이콘 */}
            <Link href={ROUTES.LOGIN} className="w-full block">
              <Button
                variant="secondary"
                label="로그인/회원가입"
                padding="17px 0px"
                fontSize="16px"
                fontWeight="500"
                width='100%'
              />
            </Link>
          </div>

        </div>

      </>
      {false && (
        <>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {extendedData.map((item, index) => {
              const adjustedIndex = index % dataLength;
              const cardStyle = getCardStyle(adjustedIndex, item.id);

              return (
                <div
                  key={`${item.id}-${index}`}
                  style={{
                    position: 'absolute',
                    opacity: cardStyle.opacity,
                    transform: cardStyle.transform,
                    zIndex: cardStyle.zIndex,
                    transition: 'all 0.5s ease',
                    pointerEvents: cardStyle.zIndex >= 8 ? 'auto' : 'none', // 보이는 카드만 클릭 가능
                    minHeight: '100px'
                  }}
                  onMouseEnter={() => setHoveredCardId(item.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                >

                  {item.title}

                </div>
              );
            })}
          </div>

          {/* 2-1. 버튼 두 개 (한 줄 배치) */}
          <div className="flex gap-2">
            {/* 1. 지자체 조회 버튼 */}
            {/* Link 태그에 w-full을 적용하여 부모 너비를 차지하게 합니다. */}
            <Link href="/results" className="w-full">
              <Button
                // 💡 버튼 자체에도 w-full을 적용하여 Link의 너비를 채웁니다.
                // 💡 h-16 (높이 4rem)를 적용하여 높이를 높입니다.
                className="h-60 bg-gray-100 text-gray-800"
                width="100%"
                variant="primary"
                label="지자체 조회"
                // padding 프롭 대신 h-16 클래스로 높이를 조절했으므로 padding을 조정하거나 제거할 수 있습니다.
                // padding="10px 30px"
                fontSize="28px" // 폰트 크기도 약간 키웠습니다.
                fontWeight="600"
              />
            </Link>

            {/* 2. 백서 구매 버튼 */}
            {/* 💡 Button 자체에 w-full과 h-16을 적용합니다. */}
            <Link href="/results" className="w-full">
              <Button
                className="h-60 bg-gray-100 text-gray-800"
                width="100%"
                variant="primary"
                label={
                  <>
                    백서 구매<br />
                    페이지 연결
                  </>
                }
                // padding="10px 30px"
                fontSize="28px"
                fontWeight="600"
              />
            </Link>
          </div>

          {/* 2-2. 버튼 하나 (그 아래) */}
          <Button
            width="100%"
            variant="primary"
            label="서비스와 연구진 소개"
            padding="10px 30px"
            fontSize="28px"
            fontWeight="600"
          />

          {/* 2-3. 버튼 하나 더 (그 아래) */}
          <Button
            width="100%"
            variant="primary"
            label="지역역량지수 도출과정"
            padding="10px 30px"
            fontSize="28px"
            fontWeight="600"
          />
        </>
      )}

    </div >
  );
};

export default MobileHomeSection;
