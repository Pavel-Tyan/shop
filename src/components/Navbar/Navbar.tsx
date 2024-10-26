import styles from "./Navbar.module.css";
import { NavbarProps } from "./Navbar.props";

export const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <nav className={styles["navbar"]}>
      <ul className={styles["wrapper"]}>
        <li>
          <a onClick={toggleSidebar} className={styles["link"]} href="#">
            Боковое меню
          </a>
        </li>
        <li>
          <a className={styles["link"]} href="#">
            Продукты
          </a>
        </li>
        <li>
          <a className={styles["link"]} href="#">
            Склады
          </a>
        </li>
        <li>
          <a className={styles["link"]} href="#">
            О системе
          </a>
        </li>
        <li>
          <a className={styles["link"]} href="#">
            Личная страница
          </a>
        </li>
      </ul>
    </nav>
  );
};
