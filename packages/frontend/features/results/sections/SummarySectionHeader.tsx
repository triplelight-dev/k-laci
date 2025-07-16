import { Flex, Text } from "@chakra-ui/react";

interface SummarySectionHeaderProps {
  badgeLabel: string;
  title: string;
}

export function SummarySectionHeader(
  {
    badgeLabel,
    title,
  }: SummarySectionHeaderProps
) {
  return (
    <Flex flexDirection='column' justifyContent='center' alignItems='center' padding='0 135px'>
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
      >{badgeLabel}
      </div>
      <Text
        fontSize='32px'
        fontWeight='600'
        lineHeight='42px'
        color='#000'

      >{title}</Text>
    </Flex>
  )
}