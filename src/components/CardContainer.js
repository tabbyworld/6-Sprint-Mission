import styles from "./CardContainer.module.css";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Search from "./Search";
import Card from "./Card";
import { Link } from "react-router-dom";

function CardContainer({ category, productList, type }) {
  return (
    <div className={styles["card-container"]}>
      <header className={styles.header}>
        <h1 className={styles.category}>{category}</h1>
        {category === "전체 상품" && (
          <div className={styles.left}>
            <Search />
            <Link to="/addItem">
              <Button text="상품 등록하기" />
            </Link>
            <Dropdown />
          </div>
        )}
      </header>
      <div className={`${styles.list} ${styles[type]}`}>
        {productList.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
