import React, { Children } from "react";
import { useModal } from "./ModalContext";

export interface ModalHeaderProps {
  children: React.ReactNode;
  className?: string;
  closeIcon?: React.ReactNode | string;
  closeButtonStyle?: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  className = "text-2xl font-bold mb-4 flex items-center justify-between",
  closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 96 960 960"
      width="20"
      className="fill-current"
    >
      <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
    </svg>
  ),
  closeButtonStyle = "text-gray-500 hover:text-gray-700 focus:outline-none",
}) => {
  const { closeModal } = useModal();

  return (
    <div className={`${className}`}>
      {children}
      <button className={`${closeButtonStyle}`} onClick={closeModal}>
        <span className="sr-only">Close modal</span>
        {closeIcon}
      </button>
    </div>
  );
};

export default ModalHeader;
