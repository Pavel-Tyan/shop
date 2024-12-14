import { AppBar, Toolbar, MenuItem, MenuList, Button } from "@mui/material";
import { NavbarProps } from "./Navbar.props";

export const Navbar = ({ toggleDrawer }: NavbarProps) => {
  const appBarStyles = { bgcolor: "var(--primary-color)", opacity: 0.8 };
  const toolbarStyles = { justifyContent: "center" };
  const menuListStyles = { display: "flex", gap: "40px" };

  return (
    <AppBar position="sticky" sx={appBarStyles}>
      <Toolbar sx={toolbarStyles}>
        <nav>
          <MenuList sx={menuListStyles}>
            <Button color="inherit" onClick={toggleDrawer}>
              Боковое меню
            </Button>
            <MenuItem>Продукты</MenuItem>
            <MenuItem>Склады</MenuItem>
            <MenuItem>О системе</MenuItem>
            <MenuItem>Личная страница</MenuItem>
          </MenuList>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
