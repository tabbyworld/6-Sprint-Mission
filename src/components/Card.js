import styles from "./Card.module.css";
import heartIcon from "../assets/ic_heart.svg";

export default function Card({ product = {} }) {
  const { images = [], name = "미제", price = 0, favoriteCount = 0 } = product;

  const formatPrice = (price) => price.toLocaleString();

  return (
    <div className={styles.card}>
      <img src={images} alt="상품 이미지" className={styles.image} />
      <p className={styles.name}>{name}</p>
      <span className={styles.price}>{formatPrice(price)}원</span>
      <span className={styles.heart}>
        <img src={heartIcon} alt="좋아요 이모티콘" />
        {favoriteCount}
      </span>
    </div>
  );
}
