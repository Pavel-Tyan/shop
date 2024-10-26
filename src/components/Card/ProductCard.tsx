import { useState } from "react";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";
import { Popup } from "../Popup/Popup";

export const ProductCard = (props: ProductCardProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const { name, description, img } = props;

  return (
    <>
      <button onClick={togglePopup} className={styles["card"]}>
        {img && (
          <img
            className={styles["img"]}
            src={img}
            alt={"Изображение " + name}
          />
        )}
        {!img && (
          <img
            className={styles["img"]}
            src={"./no-image.png"}
            alt={"Изображение " + name}
          />
        )}
        <div className={styles["content"]}>
          <div className={styles["title"]}>{name}</div>
          <hr className={styles["divider"]} />
          <p className={styles["text"]}>{description}</p>
        </div>
      </button>

      <Popup
        productInfo={props}
        isOpen={isPopupOpen}
        closePopup={togglePopup}
      />
    </>
  );
};
