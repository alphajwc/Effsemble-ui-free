import React, { useContext } from "react";
import { PaginationContext } from "./PaginationContext";

export interface PrevButtonProps {
  selectedStyle?: string;
  children?: React.ReactNode | string;
  className?: string;
}

export const PrevButton: React.FC<PrevButtonProps> = ({
  selectedStyle = "",
  children = "Previous",
  className = "rounded-l border border-gray-300 px-3 py-1",
}) => {
  const { currentPage, handlePageChange } = useContext(PaginationContext);

  const handleClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <button
      className={`${className} ${selectedStyle}`}
      onClick={handleClick}
      disabled={currentPage === 1}
    >
      {children}
    </button>
  );
};
