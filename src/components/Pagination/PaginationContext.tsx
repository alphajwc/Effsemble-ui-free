import { createContext } from "react";

interface PaginationContextValue {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  handlePageChange: (page: number) => void;
  totalPages: number;
}

export const PaginationContext = createContext<PaginationContextValue>({
  currentPage: 1,
  setCurrentPage: () => {},
  handlePageChange: () => {},
  totalPages: 1,
});
