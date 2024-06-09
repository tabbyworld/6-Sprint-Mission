import { Link } from "react-router-dom";
import { useState } from "react";
import { useWindowResize } from "../hooks/useWindowResize";
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
  const isMobile = useWindowResize();
  const [selectedOption, setSelectedOption] = useState("최신순");

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    handleSortChange(option === "최신순" ? "recent" : "favorite");
  };

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
                <Dropdown
                  selectedOption={selectedOption}
                  onChange={handleDropdownChange}
                />
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
              <Dropdown
                selectedOption={selectedOption}
                onChange={handleDropdownChange}
              />
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
