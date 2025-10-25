'use client';

import { useDisclosure } from '@chakra-ui/react';
import BannerModal from '../ui/BannerModal';

export default function BannerSection() {
  const { open: isOpen, onOpen, onClose } = useDisclosure({ defaultOpen: true });

  return <BannerModal isOpen={isOpen} onClose={onClose} />;
}
