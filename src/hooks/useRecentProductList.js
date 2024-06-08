import { useEffect, useState } from "react";
import { getProductList } from "../api/api";

export function useRecentProductList(currentPage, searchQuery, sort) {
  const [recentProductList, setRecentProductList] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [count, setCount] = useState(10);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 375 && width <= 767) {
      setCount(4);
    } else if (width >= 768 && width <= 1199) {
      setCount(6);
    } else {
      setCount(10);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    async function fetchRecentProductList() {
      try {
        const data = await getProductList({
          id: currentPage,
          count: count,
          sort: sort,
          query: searchQuery,
        });
        setRecentProductList(data.list);
        setTotalPages(Math.ceil(data.totalCount / count));
      } catch (e) {
        console.error(e);
      }
    }

    fetchRecentProductList();
  }, [currentPage, searchQuery, sort, count]);

  return { recentProductList, totalPages };
}
