import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { SidebarProps } from "./Sidebar.props";
import { MUIStyles } from "@/@types";
import { useSearchParamActions } from "@/hooks/useSearchParamActions";
import { useAppSelector } from "@/redux/hooks";
import { NO_CATEGORY_FILTER_MESSAGE } from "@/constants";

export const Sidebar = ({ toggleDrawer }: SidebarProps) => {
  const { updateFilterCategory, updateSearchValue } = useSearchParamActions();

  const handleClick = () => {
    toggleDrawer();
    updateSearchValue(searchValue);

    if (filterCategory === NO_CATEGORY_FILTER_MESSAGE) {
      updateFilterCategory("");
      return;
    }

    updateFilterCategory(filterCategory);
  };

  const [searchValue, setSearchValue] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  const [filterCategory, setFilterCategory] = useState<string>(
    NO_CATEGORY_FILTER_MESSAGE
  );

  const categories = useAppSelector((state) => state.categories.categoryList);
  const onChangeFilterCategory = (event: SelectChangeEvent<string>) => {
    setFilterCategory(event.target.value);
  };

  const sidebarWrapperStyles: MUIStyles = {
    width: "320px",
    height: "100%",
    background: "var(--gray-dark)",
    position: "fixed",
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    paddingTop: "40px",
    color: "var(--secondary-color)",
  };

  const textInputWrapper: MUIStyles = {
    width: "100%",
    padding: "0px 10px",
    display: "flex",
  };

  const textInputStyles: MUIStyles = {
    width: "80%",
    height: "45px",
    fontSize: "16px",
    borderRadius: "7px",
    background: "var(--gray)",
    border: "none",
    color: "var(--secondary-color)",
    padding: "10px 15px",
  };

  const checkboxStyles: MUIStyles = {
    width: "20px",
    height: "20px",
  };

  const checkboxWrapperStyles: MUIStyles = {
    color: "var(--secondary-color)",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const searchButtonStyles: MUIStyles = {
    background: "var(--blue)",
    color: "var(--secondary-color)",
  };

  const filterInputLabelStyles: MUIStyles = { color: "var(--secondary-color)" };

  const filterInputStyles: MUIStyles = {
    color: "var(--secondary-color)",
    background: "var(--gray)",
  };

  return (
    <Box sx={sidebarWrapperStyles}>
      <Box sx={textInputWrapper}>
        <InputLabel htmlFor="product">
          <Input
            sx={textInputStyles}
            type="text"
            placeholder="Товар"
            value={searchValue}
            onChange={onChange}
          ></Input>
        </InputLabel>
        <Button sx={searchButtonStyles} onClick={handleClick}>
          <SearchIcon />
        </Button>
      </Box>
      <InputLabel sx={checkboxWrapperStyles} htmlFor="notEmpty">
        <Input sx={checkboxStyles} type="checkbox" />
        <Typography color="inherited">Не пустой склад</Typography>
      </InputLabel>
      <InputLabel sx={filterInputLabelStyles} id="category">
        Фильтр по категории
      </InputLabel>
      <Select
        sx={filterInputStyles}
        labelId="category"
        id="category"
        value={filterCategory}
        label="Фильтр"
        onChange={onChangeFilterCategory}
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
        <MenuItem key={""} value={NO_CATEGORY_FILTER_MESSAGE}>
          {NO_CATEGORY_FILTER_MESSAGE}
        </MenuItem>
      </Select>
    </Box>
  );
};
