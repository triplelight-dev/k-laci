'use client';

import { useIsMobile } from '@/hooks';
import { useDisclosure } from '@chakra-ui/react';
import BannerModal from '../ui/BannerModal';

export default function BannerSection() {
  const isMobile = useIsMobile();
  const { open: isOpen, onOpen, onClose } = useDisclosure({ defaultOpen: true });

  return <BannerModal isOpen={isOpen} onClose={onClose} mobile={isMobile} />;
}
