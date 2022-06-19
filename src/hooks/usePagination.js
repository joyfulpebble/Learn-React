import {useMemo} from "react";

export function usePagination(totalPages) {
  const getPagesArray = (value) => {
    let pagesArray = [];
    for (let i = 0; i < value; i++) {
      pagesArray.push(i + 1);
    }
    return pagesArray;
  }

  const cashingPages = useMemo(() => {
    return getPagesArray(totalPages);
  }, [totalPages]);

  return cashingPages;
}