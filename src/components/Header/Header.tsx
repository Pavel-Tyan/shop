import { AppBar, Toolbar, MenuItem, MenuList, Button } from "@mui/material";
import { HeaderProps } from "@components/Header/Header.props";
import { MUIStyles } from "@/@types";
import { Link } from "react-router";

export const Header = ({
  hasDrawer: hasSidebar,
  toggleDrawer,
}: HeaderProps) => {
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
            {hasSidebar && (
              <Button
                color="inherit"
                onClick={toggleDrawer}
                sx={[menuItemsStyles, menuItemsHoverStyles]}
              >
                Боковое меню
              </Button>
            )}
            <MenuItem sx={[menuItemsStyles, menuItemsHoverStyles]}>
              <Link to="/">Продукты</Link>
            </MenuItem>
            <MenuItem sx={[menuItemsStyles, menuItemsHoverStyles]}>
              <Link to="/categories">Категории</Link>
            </MenuItem>
            <MenuItem sx={[menuItemsStyles, menuItemsHoverStyles]}>
              Склады
            </MenuItem>
            <MenuItem sx={[menuItemsStyles, menuItemsHoverStyles]}>
              О системе
            </MenuItem>
            <MenuItem sx={[menuItemsStyles, menuItemsHoverStyles]}>
              <Link to="/profile">Личная страница</Link>
            </MenuItem>
          </MenuList>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
