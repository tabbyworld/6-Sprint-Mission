import { useEffect, useState } from "react";
import { getProductList } from "../api/api";

export function useFavoriteProductList() {
  const [favoriteProductList, setFavoriteProductList] = useState([]);

  useEffect(() => {
    async function fetchFavoriteProductList() {
      try {
        const data = await getProductList({
          id: 1,
          count: 4,
          sort: "favorite",
        });
        setFavoriteProductList(data.list);
      } catch (e) {
        console.error(e);
      }
    }

    fetchFavoriteProductList();
  }, []);

  return favoriteProductList;
}
