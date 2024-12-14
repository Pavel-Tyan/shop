import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ProductList } from "./components/ProductList/ProductList";
import { Box, Drawer, Pagination } from "@mui/material";
import { products } from "./components/ProductList/ProductList";

export const CARDS_PER_PAGE = 8;

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [currentPage, setCurrentPage] = useState<number>(1);

  const changeCurrentPage = (_event, page: number) => {
    setCurrentPage(page);
  };

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100svh",
    position: "relative",
  };

  const paginationWrapperStyles = {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  };

  const paginationStyles = {
    margin: "15px",
  };

  const paginationItemStyles = {
    "& .MuiPaginationItem-root": {
      color: "var(--secondary-color)",
      transition: "background 0.6s",
    },
  };

  const paginationItemHoverStyles = {
    "& .MuiPaginationItem-root:hover": {
      background: "var(--blue)",
      transition: "background 0.6s",
    },
  };

  return (
    <Box sx={containerStyles}>
      <Navbar toggleDrawer={toggleDrawer} />
      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        {<Sidebar />}
      </Drawer>
      <ProductList currentPage={currentPage} />
      <Box sx={paginationWrapperStyles}>
        <Pagination
          count={Math.ceil(products.length / CARDS_PER_PAGE)}
          page={currentPage}
          onChange={changeCurrentPage}
          variant="outlined"
          sx={[
            paginationStyles,
            paginationItemStyles,
            paginationItemHoverStyles,
          ]}
        />
      </Box>
    </Box>
  );
}

export default App;
