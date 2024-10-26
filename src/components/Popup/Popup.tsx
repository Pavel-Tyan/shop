import { PopupProps } from "./Popup.props";
import styles from "./Popup.module.css";

export const Popup = ({ isOpen, productInfo, closePopup }: PopupProps) => {
  if (isOpen) {
    const { name, description, category, count, measure, img } = productInfo;

    return (
      <div className={styles["background"]}>
        <div className={styles["popup"]}>
          <div className={styles["img-wrapper"]}>
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
          </div>
          <div className={styles["wrapper"]}>
            <h1 className={styles["title"]}>{name}</h1>
            <hr className={styles["divider"]} />
            <h1 className={styles["title"]}>{"Категория: " + category}</h1>
            <hr className={styles["divider"]} />
            <h1 className={styles["title"]}>Описание</h1>
            <p className={styles["description"]}>{description}</p>
            <hr className={styles["divider"]} />
            <h1 className={styles["title"]}>
              {"Доступное количество: " + count + " " + measure}
            </h1>
          </div>
          <button className={styles["close"]} onClick={closePopup}>
            <img
              className={styles["close-img"]}
              src="./cross-icon.svg"
              alt="Закрыть модальное окно"
            />
          </button>
        </div>
      </div>
    );
  }

  return <></>;
};
