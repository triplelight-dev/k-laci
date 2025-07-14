'use client';

import { ArrowRightUp } from '@/components/atoms/assets';
import Button from '@/components/atoms/buttons/Button';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import RankCardSlider from '../components/RankCardSlider';

export default function RankSection() {
  const router = useRouter();

  const handleViewAllClick = () => {
    router.push('/summary/top-100');
  };

  return (
    <Flex height="100vh" justifyContent='center' alignItems='center' backgroundColor='#14161D' minHeight='1080px'>
      <Flex flexDirection='column' gap='20px' alignItems='center' width='100%'>
        <Heading fontSize="30px" fontWeight="600" color="#ffffff" textAlign="center" height='fit-content'>
          종합순위 TOP 100
        </Heading>
        <Text fontSize="18px" fontWeight="400" color="#ffffff" textAlign="center" marginBottom='40px'>
          55개 세부지표에서 가장 높은 점수를 기록한 100개 지자체를 확인해보세요.
        </Text>
        <RankCardSlider />
        <div style={{ marginTop: '40px' }}>
          <Button 
            label='종합순위 TOP 100 전체보기' 
            icon={<ArrowRightUp />} 
            onClick={handleViewAllClick}
          />
        </div>
      </Flex>
    </Flex>
  );
}