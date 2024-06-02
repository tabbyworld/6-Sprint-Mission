import styles from "./Card.module.css";
import heartIcon from "../assets/ic_heart.svg";

export default function Card({ product }) {
  const { images, description, price, favoriteCount } = product || {};

  const cutDescription =
    description && description.length > 10
      ? `${description.slice(0, 10)}···`
      : description;

  return (
    <div className={styles.card}>
      <img src={images[0]} alt={description} className={styles.image} />
      <p className={styles.description}>{cutDescription}</p>
      <span className={styles.price}>{price}원</span>
      <span className={styles.heart}>
        <img src={heartIcon} alt="좋아요 이모티콘" />
        {favoriteCount}
      </span>
    </div>
  );
}
