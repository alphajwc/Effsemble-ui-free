import React, { useState } from "react";
import { ModalContext } from "./ModalContext";
import ModalHeader, { ModalHeaderProps } from "./ModalHeader";
import ModalBody, { ModalBodyProps } from "./ModalBody";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

interface ModalComposition {
  Header: React.FC<ModalHeaderProps>;
  Body: React.FC<ModalBodyProps>;
}

const Modal: React.FC<ModalProps> & ModalComposition = ({
  open,
  onClose,
  children,
  className = "mx-auto w-full max-w-lg rounded bg-white dark:bg-gray-900 dark:border p-6 shadow-lg",
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div className="flex min-h-screen items-center justify-center">
        <div className={`${className}`}>
          <ModalContext.Provider value={{ open, closeModal: onClose }}>
            {children}
          </ModalContext.Provider>
        </div>
      </div>
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;
