import styles from "./Header.module.css";
import logo from "../assets/ic_logo.svg";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <Link to="/">
          <img src={logo} alt="로고" />
        </Link>
        <ul className={styles.navbar}>
          <li>
            <NavLink
              to="/boards"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/items"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              중고마켓
            </NavLink>
          </li>
        </ul>
      </div>
      <button className={styles["login-btn"]}>로그인</button>
    </header>
  );
}

export default Header;
