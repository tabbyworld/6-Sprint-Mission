import styles from "./Search.module.css";
import searchIcon from "../assets/ic_search.svg";

function Search({ text }) {
  return (
    <div className={styles.search}>
      <img className={styles.icon} src={searchIcon} alt="검색 아이콘" />
      <input type="text" placeholder="검색할 상품을 입력해주세요" />
    </div>
  );
}

export default Search;
