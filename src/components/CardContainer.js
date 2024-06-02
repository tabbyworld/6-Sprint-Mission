import Button from "./Button";
import styles from "./CardContainer.module.css";
import Search from "./Search";

function CardContainer({ category }) {
  return (
    <div className={styles["card-container"]}>
      <header className={styles.header}>
        <h1 className={styles.category}>{category}</h1>
        <div className={styles.left}>
          <Search />
          <Button text="상품 등록하기" />
        </div>
      </header>
    </div>
  );
}

export default CardContainer;
