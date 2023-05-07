import React, { useContext } from "react";
import { PaginationContext } from "./PaginationContext";

export interface NextButtonProps {
  selectedStyle?: string;
  children?: React.ReactNode | string;
  className?: string;
}

export const NextButton: React.FC<NextButtonProps> = ({
  selectedStyle = "",
  children = "Next",
  className = "rounded-r border border-gray-300 px-3 py-1",
}) => {
  const { currentPage, totalPages, handlePageChange } =
    useContext(PaginationContext);

  const handleClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <button
      className={`${className} ${selectedStyle}`}
      onClick={handleClick}
      disabled={currentPage === totalPages}
    >
      {children}
    </button>
  );
};
