import styles from "../css/AddItem.module.css";
import GNB from "../components/GNB";
import Button from "../components/Button";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Input from "../components/Input";
import UploadImage from "../components/UploadImage";

export default function AddItemPage() {
  return (
    <>
      <GNB showButton={false} showUser={true} />
      <div className={styles.container}>
        <header className={styles.header}>
          <Title content="상품 등록하기" />
          <Button text="등록" />
        </header>
        <main>
          <Subtitle content="상품 이미지" />
          <UploadImage />
          <Subtitle content="상품명" />
          <Input placeholder="상품명을 입력해주세요" />
          <Subtitle content="상품 소개" />
          <Input placeholder="상품소개를 입력해주세요" note="long" />
          <Subtitle content="판매 가격" />
          <Input placeholder="판매 가격을 입력해주세요" />
          <Subtitle content="태그" />
          <Input placeholder="태그를 입력해주세요" note="bottom" />
        </main>
      </div>
    </>
  );
}
