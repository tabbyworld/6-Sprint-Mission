import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./CardContainer.module.css";
import Button from "./Button";
import Dropdown from "./Dropdown";
import SearchForm from "./SearchForm";
import Card from "./Card";

function CardContainer({
  category,
  productList,
  group,
  position,
  handleSearch,
  searchQuery,
  setSearchQuery,
  handleSortChange,
}) {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth >= 375 && window.innerWidth <= 767);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles["card-container"]}>
      <header className={`${styles.header} ${styles[position]}`}>
        <h1 className={styles.category}>{category}</h1>
        {category === "전체 상품" &&
          (isMobile ? (
            <>
              <Link to="/addItem">
                <Button text="상품 등록하기" />
              </Link>
              <div className={styles.mobile}>
                <SearchForm
                  handleSearch={handleSearch}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
                <Dropdown onChange={handleSortChange} />
              </div>
            </>
          ) : (
            <div className={styles.left}>
              <SearchForm
                handleSearch={handleSearch}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <Link to="/addItem">
                <Button text="상품 등록하기" />
              </Link>
              <Dropdown onChange={handleSortChange} />
            </div>
          ))}
      </header>
      <div className={`${styles.list} ${styles[group]}`}>
        {productList.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
