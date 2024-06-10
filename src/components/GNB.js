import { Link, NavLink } from "react-router-dom";
import styles from "./GNB.module.css";
import Button from "./Button";
import logo from "../assets/ic_logo.svg";
import logoText from "../assets/ic_logo_text.svg";
import userIcon from "../assets/ic_user.svg";

function GNB({ showButton = true, showUser = false }) {
  return (
    <header className={styles.gnb}>
      <div className={styles["gnb-container"]}>
        <Link to="/">
          <img src={logo} alt="로고" className={styles.logo} />
        </Link>
        <Link to="/">
          <img src={logoText} alt="로고" className={styles["logo-text"]} />
        </Link>
        <ul className={styles.navbar}>
          <li>
            <NavLink
              to="/boards"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/items"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              중고마켓
            </NavLink>
          </li>
        </ul>
      </div>
      {showButton && <Button text={"로그인"} />}
      {showUser && <img src={userIcon} alt="사용자 프로필 이미지" />}
    </header>
  );
}

export default GNB;
