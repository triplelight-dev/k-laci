import { Box, Button, Flex } from '@chakra-ui/react';
import Image from 'next/image';

interface BannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function BannerModal({ isOpen, onClose, children }: BannerModalProps) {
  if (!isOpen) return null;

  // 모달이 열릴 때 body 스크롤 방지
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden';
  }

  // 모달이 닫힐 때 body 스크롤 복원
  const handleClose = () => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
    onClose();
  };

  return (
    <>
      <Box
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
          maxWidth: '560px',
          width: '95%',
          // maxHeight: '90vh',
          height: 'auto',
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 1001,
          overflowY: 'auto',
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
            <Box style={{ position: 'relative', width: '100px', height: '30px' }}>
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
              onClick={handleClose}
              style={{
                minWidth: 'auto',
                height: 'auto',
                padding: '8px',
                background: 'none',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Box 
                style={{ 
                  position: 'relative', 
                  width: '24px', 
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src="/icons/modal-close-icon.png"
                  alt="Close modal"
                  fill
                  style={{ 
                    objectFit: 'contain',
                    cursor: 'pointer',
                    zIndex: 2,
                  }}
                  priority
                />
              </Box>
            </Button>
          </Flex>
        </Flex>
        {children}
      </Flex>
    </>
  );
}
