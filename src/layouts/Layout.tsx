import { MUIStyles } from "@/@types";
import { Header } from "@/components/Header/Header";
import Box from "@mui/material/Box/Box";
import { LayoutProps } from "./Layout.props";

export const Layout = ({ children, hasDrawer, toggleDrawer }: LayoutProps) => {
  const containerStyles: MUIStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100svh",
    position: "relative",
  };

  return (
    <Box sx={containerStyles}>
      <Header hasDrawer={hasDrawer} toggleDrawer={toggleDrawer} />
      {children}
    </Box>
  );
};
