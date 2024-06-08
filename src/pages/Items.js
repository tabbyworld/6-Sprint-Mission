import { useState } from "react";
import { useFavoriteProductList } from "../hooks/useFavoriteProductList";
import { useRecentProductList } from "../hooks/useRecentProductList";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import Pagination from "../components/Pagination";

export default function ItemPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("recent");
  const favoriteProductList = useFavoriteProductList();
  const { recentProductList, totalPages } = useRecentProductList(
    currentPage,
    searchQuery,
    sort
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSortChange = (selectedSort) => {
    setSort(selectedSort);
  };

  return (
    <>
      <Header />
      <CardContainer
        category="베스트 상품"
        productList={favoriteProductList}
        group="best"
        position="top"
      />
      <CardContainer
        category="전체 상품"
        productList={recentProductList}
        group="all"
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSortChange={handleSortChange}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
