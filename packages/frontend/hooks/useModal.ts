import { useCallback, useState } from 'react';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 모달 열기
    const openModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    // 모달 닫기
    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    return { isOpen, openModal, closeModal };
};