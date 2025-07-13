'use client';

import { ArrowRightUp } from '@/components/atoms/assets';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function EmptyRankCard() {
  return (
    <Link href="/summary/top-100">
      <Flex
        border="1px solid #2B3041"
        borderRadius="40px"
        height='562px'
        width='385px'
        backgroundColor='#191b22'
        justifyContent='center'
        alignItems='center'
        gap='10px'
        cursor='pointer'
        transition='all 0.2s ease'
        _hover={{
          backgroundColor: '#2a2d36',
          borderColor: '#3a3f4f'
        }}
      >
        <Text fontSize="18px" fontWeight="400" color="#ffffff" >
          종합순위 TOP 100 전체보기
        </Text>
        <ArrowRightUp color='#ffffff' />
      </Flex>
    </Link>
  );
}