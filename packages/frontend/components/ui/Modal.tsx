'use client'
import React, { useEffect } from "react";

interface ModalProps {
  title?: string;
  setModal: () => void;
  children?: React.ReactNode;
}

const Modal = ({ title, setModal, children }: ModalProps) => {
  const preventOffModal = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      id="모달 외부"
      onClick={setModal}
      className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-500/50 m-5"
    >
      <div
        id="모달"
        onClick={preventOffModal}
        className="flex flex-col bg-white w-full rounded-md gap-5 items-center"
        style={{
          padding: '50px',
          margin: '20px'
        }}
      >
        <div className="text-gray-400"
          style={{
            padding: '4px 8px',
            backgroundColor: 'transparent',
            fontSize: '30px',
            color: '#000000',
          }}>{title}</div>
        <div className="text-gray-400">{children}</div>

      </div>
    </div>
  );
};

export default Modal;