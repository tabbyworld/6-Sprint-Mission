import styles from "./Header.module.css";
import logo from "../assets/ic_logo.svg";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles["header-container"]}>
        <a href="/">
          <img src={logo} alt="로고" />
        </a>
        <div className={styles.navbar}>
          <li>자유게시판</li>
          <li>중고마켓</li>
        </div>
      </div>
      <button className={styles["login-btn"]}>로그인</button>
    </div>
  );
}

export default Header;
