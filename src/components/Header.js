import styles from "./Header.module.css";
import logo from "../assets/ic_logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles["header-container"]}>
        <a href="/">
          <img src={logo} alt="로고" />
        </a>
        <div className={styles.navbar}>
          <li className={styles["navbar-list"]}>자유게시판</li>
          <Link to="/items">
            <li className={styles["navbar-list"]}>중고마켓</li>
          </Link>
        </div>
      </div>
      <button className={styles["login-btn"]}>로그인</button>
    </div>
  );
}

export default Header;
