import { MUIStyles } from "../../@types";
import { DropdownMenuProps } from "./DropdownMenu.props";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export const DropdownMenu = ({
  currentOptions,
  options,
  addOption,
}: DropdownMenuProps) => {
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
        Категория
      </InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        value={currentOptions[0]}
        onChange={addOption}
        label="Категория"
      >
        {options.map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
