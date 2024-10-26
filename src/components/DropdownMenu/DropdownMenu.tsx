import { DropdownMenuProps } from "./DropdownMenu.props";
import styles from "./DropdownMenu.module.css";

export const DropdownMenu = ({ name, options }: DropdownMenuProps) => {
  return (
    <select name={name} className={styles["dropdown"]}>
      <option> -- Выберите категорию --</option>
      {options.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
};
