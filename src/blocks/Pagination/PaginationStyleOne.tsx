import React from "react";
import { Pagination } from "@/components/Pagination/Pagination";
export default function PaginationStyleOne() {
  const handlePageChange = (page: number) => {
    alert("Current Page: " + page);
  };
  return (
    <section className="break-words bg-white dark:bg-gray-800 max-sm:p-5 sm:p-10">
      <Pagination totalPages={10} onPageChange={handlePageChange}>
        <Pagination.PrevButton />
        <Pagination.List />
        <Pagination.NextButton />
      </Pagination>
    </section>
  );
}
