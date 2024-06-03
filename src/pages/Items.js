import { useEffect, useState } from "react";
import { getProductList } from "../api/api";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";

export default function ItemPage() {
  const [recentProductList, setRecentProductList] = useState([]);
  const [favoriteProductList, setFavoriteProductList] = useState([]);

  async function fetchRecentProductList() {
    try {
      const data = await getProductList(1, 12, "recent");
      setRecentProductList(data.list);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchFavoriteProductList() {
    try {
      const data = await getProductList(1, 4, "favorite");
      setFavoriteProductList(data.list);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchRecentProductList();
    fetchFavoriteProductList();
  }, []);

  return (
    <>
      <Header />
      <CardContainer
        category="베스트 상품"
        productList={favoriteProductList}
        type="best"
      />
      <CardContainer
        category="전체 상품"
        productList={recentProductList}
        type="all"
      />
    </>
  );
}
