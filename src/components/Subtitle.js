import styles from "./Subtitle.module.css";

function Subtitle({ content }) {
  return <h2 className={styles.subtitle}>{content}</h2>;
}

export default Subtitle;
