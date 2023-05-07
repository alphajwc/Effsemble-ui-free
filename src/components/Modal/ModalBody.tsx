import React from "react";

export interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default ModalBody;
