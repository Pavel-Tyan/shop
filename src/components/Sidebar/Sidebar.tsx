import SearchIcon from "@mui/icons-material/Search";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import {
  Box,
  Button,
  Card,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { MUIStyles } from "../../@types";
import { useContext, useState } from "react";
import { Context, ProductsContext } from "../ProductsProvider/ProductsProvider";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ toggleDrawer }: SidebarProps) => {
  const context = useContext<ProductsContext>(Context);

  const currentCategories = context ? context.currentCategories : [];

  const searchProducts = context ? context.searchProducts : () => {};

  const handleClick = () => {
    searchProducts(searchValue);
    toggleDrawer();
  };

  const [searchValue, setSearchValue] = useState<string>("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

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

  const categoryCardStyles: MUIStyles = {
    width: "50%",
    height: "35px",
    background: "var(--blue)",
    color: "var(--secondary-color)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
      <DropdownMenu />
      {currentCategories.map((item) => (
        <Card sx={categoryCardStyles} key={item}>
          {item}
        </Card>
      ))}
    </Box>
  );
};
