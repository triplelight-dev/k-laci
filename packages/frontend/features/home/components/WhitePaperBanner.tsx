'use client';

import BannerModal from '@/components/ui/BannerModal';
import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';

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
        py="4px"
        borderRadius="4px"
        fontSize="14px"
        fontWeight="bold"
        mb="16px"
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

const WhitePaperBanner = () => {
  const { open: isOpen, onOpen, onClose } = useDisclosure({ defaultOpen: true });
  
  const title = ['대한민국 지역역량 데이터 백서', '2025-2026 발간'];
  const description = [
    '229개 기초자치단체의 10년 흐름을 2025–2026 최신 데이터로 재정비했습니다. 이렇게 업데이트된 데이터는 대한민국 모든 지역을 한 권으로 비교할 수 있는 백서',
    '(약 600페이지)',
    '로 첫 공개합니다.\n',
    '대한민국 모든 지역의 강점·약점·변화 방향을 진단하는\n 새로운 기준서를 만나보세요.'
  ];

  return (
    <BannerModal isOpen={isOpen} onClose={onClose}>
      <Flex direction="column" w="100%" h="100%">
        <Flex
          direction="column"
          align="center"
          gap="24px"
          flex="1"
          pt="40px"
          px="24px"
        >
          <Flex direction="column" gap="8px">
            {title.map((line, index) => (
              <Text
                key={index}
                fontSize="30px"
                fontWeight="bold"
                textAlign="center"
                lineHeight="1.1"
              >
                {line}
              </Text>
            ))}
          </Flex>

          <Box
            fontSize="16px"
            textAlign="center"
            lineHeight="1.6"
            whiteSpace="pre-line"
            maxW="460px"
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
            gap="3px"
            textAlign="left"
            fontWeight="bold"
            fontSize="16px"
            lineHeight="1.5"
            color="#000000"
          >
            <Text>・ 최신 데이터 기반 심층 인사이트</Text>
            <Text>・ 핵심 지표별 진단 및 전략 가이드</Text>
            <Text>・ 229개 기초자치단체의 비교 진단 보고서</Text>
          </Flex>

          <Box w="100%" h="1px" bg="#D9D9E8" mb="4px" />

          <Flex gap="16px" w="100%">
            <PriceCard badgeText="정가" price={890000} />
            <PriceCard badgeText="얼리버드 혜택가" price={490000} isSpecial />
          </Flex>
        </Flex>

        <Button
          onClick={() => {}}
          w="100%"
          bg="#000000"
          color="white"
          p="16px"
          borderRadius="0 0 8px 8px"
          border="none"
          cursor="pointer"
          fontSize="16px"
          fontWeight="bold"
        >
          백서 출시 알림 신청하기
        </Button>
      </Flex>
    </BannerModal>
  );
};

export default WhitePaperBanner;