import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ isOpen }: SidebarProps) => {
  const style = isOpen ? "sidebar" : "hidden";

  return (
    <aside className={styles[style]}>
      <label htmlFor="product">
        <input className={styles["input"]} type="text" placeholder="Товар" />
      </label>
      <label className={styles["checkbox-wrapper"]} htmlFor="notEmpty">
        <input className={styles["checkbox"]} type="checkbox" />
        <span>Не пустой склад</span>
      </label>
      <label className={styles["dropdown-wrapper"]} htmlFor="category">
        <DropdownMenu
          name="category"
          options={["Категория 1", "Категория 2", "Категория 3"]}
        />
      </label>
    </aside>
  );
};
