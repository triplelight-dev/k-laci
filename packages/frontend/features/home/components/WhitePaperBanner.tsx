'use client';

import BannerModal from '@/components/ui/BannerModal';
import { useIsMobile } from '@/hooks';
import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface PriceCardProps {
  badgeText: string;
  price: number;
  isSpecial?: boolean;
}

const PriceCard = ({ badgeText, price, isSpecial = false }: PriceCardProps) => {
  const formattedPrice = price.toLocaleString();

  return (
    <Box
      bg={isSpecial ? '#191B22' : '#E7E8EA'}
      borderRadius="8px"
      p="16px"
      flex="1"
    >
      <Box
        display="inline-block"
        bg={isSpecial ? '#EA4524' : '#191B22'}
        color="white"
        px="12px"
        borderRadius="4px"
        fontSize="14px"
        fontWeight="bold"
        mb="px"
      >
        {badgeText}
      </Box>
      <Text
        fontSize="24px"
        fontWeight="500"
        color={isSpecial ? 'white' : '#191B22'}
      >
        {formattedPrice}원
      </Text>
    </Box>
  );
};

const BANNER_KEY = 'whitepaper_banner_closed';
const EXPIRY_TIME = 5 * 60 * 1000; // 5분

const WhitePaperBanner = () => {
  const isMobile = useIsMobile();
  const [isInitialized, setIsInitialized] = useState(false);
  const { open: isOpen, onOpen, onClose } = useDisclosure({
    defaultOpen: false,
  });

  useEffect(() => {
    const storedData = sessionStorage.getItem(BANNER_KEY);
    if (storedData) {
      const data = JSON.parse(storedData);
      const now = Date.now();

      // 만료되지 않았으면 배너를 숨김
      if (data.expiry > now) {
        onClose();
      } else {
        // 만료되었으면 세션스토리지에서 제거
        sessionStorage.removeItem(BANNER_KEY);
        onOpen();
      }
    } else {
      onOpen();
    }
    setIsInitialized(true);
  }, [onOpen, onClose]);

  const handleClose = () => {
    const expiryTime = Date.now() + EXPIRY_TIME;
    sessionStorage.setItem(BANNER_KEY, JSON.stringify({
      closed: true,
      expiry: expiryTime
    }));
    onClose();
  };

  const title = ['대한민국 지역역량 데이터 백서', '2025-2026 발간'];
  const description = [
    '229개 기초자치단체의 10년 흐름을 2025–2026 최신 데이터로 재정비했습니다. 이렇게 업데이트된 데이터는 대한민국 모든 지역을 한 권으로 비교할 수 있는 백서',
    '(약 600페이지)',
    '로 첫 공개합니다.\n',
    '대한민국 모든 지역의 강점·약점·변화 방향을 진단하는\n 새로운 기준서를 만나보세요.'
  ];

  // // 초기화되기 전에는 렌더링하지 않음
  // if (!isInitialized) return null;

  const zoomStyle = {
    // 1. 줌 적용: 0.8배 축소
    transform: 'scale(1)',
    // 2. 변환 기준점: 왼쪽 상단(0, 0)을 기준으로 축소되도록 설정
    transformOrigin: 'top',
    // 3. 축소로 인해 생긴 빈 공간을 채우기 위해 원래 크기보다 키움 (100% / 0.8 = 125%)
    width: '125%',
    height: '125%',
    // 4. 컨테이너 밖으로 나가는 내용 숨김
    overflow: 'hidden',
    padding: '0px 16px'
  };

  return (
    <BannerModal isOpen={isOpen} onClose={handleClose} mobile={isMobile}>
      <Flex direction="column"
        style={isMobile ? zoomStyle : { width: '100%', height: '100%' }}>
        <Flex
          direction="column"
          align="center"
          gap="16px"
          flex="1"
          pt={{ base: "20px", sm: "22px" }}
          px={{ base: "20px", sm: "24px" }}
        >
          <Flex direction="column" gap="2px">
            {title.map((line, index) => (
              <Text
                key={index}
                fontSize={{ base: "24px", sm: "30px" }}
                fontWeight="bold"
                textAlign="center"
                lineHeight="1.1"
              >
                {line}
              </Text>
            ))}
          </Flex>

          <Box
            fontSize={{ base: "15px", sm: "16px" }}
            textAlign="center"
            lineHeight="1.6"
            whiteSpace="pre-line"
            maxW={{ base: "100%", sm: "460px" }}
            color="black"
            style={{ padding: isMobile ? '20px' : '' }}
          >
            <Text as="span">{description[0]}</Text>
            <Text as="span" fontSize="14px" color="#666666">
              {description[1]}
            </Text>
            <Text as="span">{description[2]}</Text>
            <Text as="span" display="block" mt="16px">
              {description[3]}
            </Text>
          </Box>

          <Box w="100%" h="1px" bg="#D9D9E8" />

          <Flex
            direction="column"
            gap="1px"
            textAlign="left"
            fontWeight="bold"
            fontSize={{ base: "15px", sm: "16px" }}
            lineHeight="1.5"
            color="#000000"
          >
            <Text>・ 최신 데이터 기반 심층 인사이트</Text>
            <Text>・ 핵심 지표별 진단 및 전략 가이드</Text>
            <Text>・ 229개 기초자치단체의 비교 진단 보고서</Text>
          </Flex>

          <Box w="100%" h="1px" bg="#D9D9E8" mb="1px" />

          <Flex gap="16px" w="100%"
            style={{ padding: isMobile ? '20px 40px' : '' }}>
            <PriceCard badgeText="정가" price={890000} />
            <PriceCard badgeText="얼리버드 혜택가" price={490000} isSpecial />
          </Flex>

          <Flex direction="column" align="center" fontSize={{ base: "15px", sm: "16px" }} color="black" mt="4px">
            <Text>'대한민국 지역역량 데이터 백서 2025-2026'를 구매하시려면</Text>
            <Text>회원가입 후 메일을 등록해주세요.</Text>
            <Text>
              <Text as="span" fontWeight="bold">11월 중순에 안내 메일이 발송</Text>
              <Text as="span">될 예정입니다.</Text>
            </Text>
          </Flex>

          <Text fontSize={{ base: "12px", sm: "13px" }} color="#9A9EA3" mb={{ base: "12px", sm: "24px" }}>
            * 최신 데이터 반영·기능 업데이트된 웹서비스 v2는 내년 상반기에 정식 오픈됩니다.
          </Text>
        </Flex>

        <div
          style={{
            padding: isMobile ? '0px 30px' : ''
          }}>
          <Button
            onClick={handleClose}
            w="100%"
            bg="#000000"
            color="white"
            p={{ base: "30px", sm: "26px" }}
            borderRadius="8px"
            border="none"
            cursor="pointer"
            fontSize="16px"
            fontWeight="bold"
            mb="4px"
          >
            {isMobile? '백서 출신 알림 신청하기' : '확인'}
          </Button>
        </div>
      </Flex>
    </BannerModal>
  );
};

export default WhitePaperBanner;