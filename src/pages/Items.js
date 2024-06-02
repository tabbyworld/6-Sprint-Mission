import { useEffect, useState } from "react";
import { getProductList } from "../api/api";
import Header from "../components/Header";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";

export default function ItemPage() {
  const [productList, setProductList] = useState([]);

  async function fetchProductList() {
    try {
      const data = await getProductList(1);
      setProductList(data.list);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <>
      <Header />
      <CardContainer category="베스트 상품" />
      <div className="product-list">
        {productList.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <CardContainer category="전체 상품" />
    </>
  );
}
