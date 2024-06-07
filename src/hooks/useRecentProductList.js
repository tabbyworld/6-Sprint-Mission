import { useEffect, useState } from "react";
import { getProductList } from "../api/api";

export function useRecentProductList(currentPage, searchQuery) {
  const [recentProductList, setRecentProductList] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchRecentProductList() {
      try {
        const data = await getProductList({
          id: currentPage,
          count: 10,
          sort: "recent",
          query: searchQuery,
        });
        setRecentProductList(data.list);
        setTotalPages(Math.ceil(data.totalCount / 10));
      } catch (e) {
        console.error(e);
      }
    }

    fetchRecentProductList();
  }, [currentPage, searchQuery]);

  return { recentProductList, totalPages };
}
