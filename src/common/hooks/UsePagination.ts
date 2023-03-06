import { useState } from "react";

export const usePagination = (defaultValue = 1) => {
  const [page, setPage] = useState(defaultValue);
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return {
    page,
    handlePageChange,
  };
};
