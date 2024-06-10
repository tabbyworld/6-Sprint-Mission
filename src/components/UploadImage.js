import styles from "./UploadImage.module.css";
import plusIcon from "../assets/ic_plus.svg";

function UploadImage() {
  return (
    <div className={styles.input}>
      <img src={plusIcon} alt="업로드 아이콘" />
      <p className={styles.text}>이미지 등록</p>
    </div>
  );
}

export default UploadImage;
