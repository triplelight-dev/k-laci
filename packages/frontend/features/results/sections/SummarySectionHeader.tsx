'use client';

import { useIsMobile } from '@/hooks';
import { Flex, Text } from '@chakra-ui/react';

interface SummarySectionHeaderProps {
  badgeLabel: string;
  title: string;
}

export function SummarySectionHeader({
  badgeLabel,
  title,
}: SummarySectionHeaderProps) {
  const isMobile = useIsMobile();

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="0px"
      marginBottom="15px"
    >
      {badgeLabel &&

        <div
          style={{
            borderRadius: '9px',
            border: '1.5px solid #000',
            padding: '4.5px 10px',
            fontSize: '1rem',
            fontWeight: '500',
            lineHeight: '24px',
            width: 'fit-content',
            marginBottom: '22px',
          }}
        >
          {badgeLabel}
        </div>
      }
      <Text fontWeight="600" lineHeight="42px" color="#000"
        style={{
          fontSize: isMobile ? '20px' : '36px'
        }}
      >
        {title}
      </Text>
    </Flex>
  );
}
