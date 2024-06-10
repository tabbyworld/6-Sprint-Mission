import styles from "./Title.module.css";

function Title({ content }) {
  return <h1 className={styles.title}>{content}</h1>;
}

export default Title;
