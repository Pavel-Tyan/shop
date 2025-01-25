import { useContext } from "react";
import { MUIStyles } from "@/@types";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import {
  ProductsContext,
  Context,
} from "@components/ProductsProvider/ProductsProvider";

export const DropdownMenu = () => {
  const context = useContext<ProductsContext>(Context);

  const addCategory = context ? context.addToCurrentCategories : () => {};
  const removeCurrentCategories = context
    ? context.removeCurrentCategories
    : () => {};
  const categories = context ? context.categories : [];

  const formStyles: MUIStyles = {
    width: "200px",
    background: "var(--gray)",
  };
  const inputStyles: MUIStyles = {
    color: "var(--secondary-color)",
  };

  return (
    <FormControl fullWidth sx={formStyles}>
      <InputLabel id="category-select-label" sx={inputStyles}>
        Добавить фильтр
      </InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        label="Категория"
      >
        {categories.map((item) => (
          <MenuItem onClick={() => addCategory(item)} key={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <Button onClick={removeCurrentCategories}>Сбросить фильтры</Button>
    </FormControl>
  );
};
