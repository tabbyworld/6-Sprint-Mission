import { useEffect, useState, useRef } from "react";
import styles from "./Dropdown.module.css";
import dropdownIcon from "../assets/ic_arrow_down.svg";
import dropdownIconMobile from "../assets/ic_sort.svg";

function Dropdown({ onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("최신순");
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option === "최신순" ? "recent" : "favorite");
    setIsOpen(false);
  };

  const handleDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 375 && window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleDropdown);
    return () => {
      document.removeEventListener("mousedown", handleDropdown);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.header} onClick={toggleDropdown}>
        {isMobile ? (
          <img src={dropdownIconMobile} alt="드롭다운 모바일 아이콘" />
        ) : (
          <>
            {selectedOption} <img src={dropdownIcon} alt="드롭다운 아이콘" />
          </>
        )}
      </div>
      {isOpen && (
        <div className={styles.options}>
          <div
            className={`${styles.option} ${styles.top}`}
            onClick={() => handleOptionClick("최신순")}
          >
            최신순
          </div>
          <div
            className={styles.option}
            onClick={() => handleOptionClick("좋아요순")}
          >
            좋아요순
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
