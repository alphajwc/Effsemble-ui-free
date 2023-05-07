import React, { useState } from "react";
import { PrevButton, PrevButtonProps } from "./PrevButton";
import { NextButton, NextButtonProps } from "./NextButton";
import { List, ListProps } from "./List";
import { PaginationContext } from "./PaginationContext";

interface PaginationProps {
  totalPages: number;
  onPageChange?: (page: number) => void;
  children?: React.ReactNode;
}
interface PaginationComposition {
  PrevButton: React.FC<PrevButtonProps>;
  NextButton: React.FC<NextButtonProps>;
  List: React.FC<ListProps>;
}

export const Pagination: React.FC<PaginationProps> & PaginationComposition = ({
  totalPages,
  onPageChange,
  children,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (onPageChange) {
      onPageChange(page);
    }
  };
  const contextValue = {
    currentPage,
    setCurrentPage,
    handlePageChange,
    totalPages,
  };

  return (
    <PaginationContext.Provider value={contextValue}>
      <div className="flex items-center">{children}</div>
    </PaginationContext.Provider>
  );
};

Pagination.NextButton = NextButton;
Pagination.PrevButton = PrevButton;
Pagination.List = List;

export { PrevButton, NextButton, List };
