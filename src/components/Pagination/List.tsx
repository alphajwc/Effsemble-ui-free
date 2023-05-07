import React, { useContext } from "react";
import { PaginationContext } from "./PaginationContext";

export interface ListProps {
  selectedStyle?: string;
  unselectedStyle?: string;
  className?: string;
}

export const List: React.FC<ListProps> = ({
  selectedStyle = "bg-blue-500 text-white",
  unselectedStyle = "",
  className = "border border-gray-300 px-3 py-1",
}) => {
  const { currentPage, totalPages, handlePageChange } =
    useContext(PaginationContext);

  return (
    <div className="flex">
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            className={`${className} ${
              isActive ? selectedStyle : unselectedStyle
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};
