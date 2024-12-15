import { AppBar, Toolbar, MenuItem, MenuList, Button } from "@mui/material";
import { HeaderProps } from "./Header.props";
import { MUIStyles } from "../../@types";

export const Header = ({ toggleDrawer }: HeaderProps) => {
  const appBarStyles: MUIStyles = {
    bgcolor: "var(--primary-color)",
    opacity: 0.8,
  };
  const toolbarStyles: MUIStyles = { justifyContent: "center" };
  const menuListStyles: MUIStyles = { display: "flex", gap: "40px" };
  const menuItemsStyles: MUIStyles = {
    transition: "color 0.6s",
  };
  const menuItemsHoverStyles: MUIStyles = {
    "&:hover": {
      color: "var(--blue)",
      transition: "color 0.6s",
    },
  };
  return (
    <AppBar position="sticky" sx={appBarStyles}>
      <Toolbar sx={toolbarStyles}>
        <nav>
          <MenuList sx={menuListStyles}>
            <Button
              color="inherit"
              onClick={toggleDrawer}
              sx={[menuItemsStyles, menuItemsHoverStyles]}
            >
              Боковое меню
            </Button>
            <MenuItem sx={[menuItemsStyles, menuItemsHoverStyles]}>
              Продукты
            </MenuItem>
            <MenuItem sx={[menuItemsStyles, menuItemsHoverStyles]}>
              Склады
            </MenuItem>
            <MenuItem sx={[menuItemsStyles, menuItemsHoverStyles]}>
              О системе
            </MenuItem>
            <MenuItem sx={[menuItemsStyles, menuItemsHoverStyles]}>
              Личная страница
            </MenuItem>
          </MenuList>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
