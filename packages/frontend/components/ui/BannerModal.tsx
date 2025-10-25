import { Box, Button, Flex } from '@chakra-ui/react';
import Image from 'next/image';

interface BannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function BannerModal({ isOpen, onClose, children }: BannerModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <Box
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        }}
      />
      <Flex
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '500px',
          width: '90%',
          height: '700px',
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 1001,
        }}
      >
        <Flex 
          style={{
            width: '100%',
            paddingTop: '10px',
            paddingLeft: '16px',
            paddingRight: '16px',
          }}
        >
          {/* 좌측 빈 공간 */}
          <Box style={{ flex: 1 }} />
          
          {/* 중앙 로고 */}
          <Flex style={{ flex: 1, justifyContent: 'center' }}>
            <Box style={{ position: 'relative', width: '120px', height: '30px' }}>
              <Image
                src="/klaci_logo_black_prod.png"
                alt="KLACI Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Flex>
          
          {/* 우측 버튼 영역 */}
          <Flex style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Button
              onClick={onClose}
              style={{
                minWidth: 'auto',
                height: 'auto',
                padding: '8px',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              ✕
            </Button>
          </Flex>
        </Flex>
        {children}
      </Flex>
    </>
  );
}
