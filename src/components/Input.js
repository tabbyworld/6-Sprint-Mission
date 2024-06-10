import styles from "./Input.module.css";

function Input({ placeholder, note }) {
  return (
    <input
      className={`${styles.input} ${styles[note]}`}
      placeholder={placeholder}
      type="text"
    />
  );
}

export default Input;
