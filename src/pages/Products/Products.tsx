import { useState } from "react";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { ProductList } from "@components/ProductList/ProductList";
import { Box, Drawer, Pagination } from "@mui/material";
import { MUIStyles } from "@/@types";
import { Layout } from "@layouts/Layout";
import { useAppSelector } from "@/redux/hooks";
export const CARDS_PER_PAGE = 8;

const Products = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [currentPage, setCurrentPage] = useState<number>(1);

  const changeCurrentPage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setCurrentPage(page);
  };

  const filterCategory = useAppSelector(
    (state) => state.searchParams.categoryFilter
  );

  const searchValue = useAppSelector((state) => state.searchParams.searchValue);

  const searchedProducts = useAppSelector((state) => {
    const products = state.products.productList;
    return products.filter((product) => {
      // Проверяем, что продукт соответствует категории
      if (filterCategory && product.category !== filterCategory) {
        return false;
      }
      // Проверяем на соответствие значения в поле поиска
      return product.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  });

  const pageCount = Math.ceil(searchedProducts.length / CARDS_PER_PAGE);

  const paginationWrapperStyles: MUIStyles = {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  };

  const paginationStyles: MUIStyles = {
    margin: "15px",
  };

  const paginationItemStyles: MUIStyles = {
    "& .MuiPaginationItem-root": {
      color: "var(--secondary-color)",
      transition: "background 0.6s",
    },
  };

  const paginationItemHoverStyles: MUIStyles = {
    "& .MuiPaginationItem-root:hover": {
      background: "var(--blue)",
      transition: "background 0.6s",
    },
  };

  return (
    <Layout hasDrawer={true} toggleDrawer={toggleDrawer}>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <Sidebar toggleDrawer={toggleDrawer} />
      </Drawer>
      <ProductList currentPage={currentPage} products={searchedProducts} />
      <Box sx={paginationWrapperStyles}>
        <Pagination
          count={pageCount}
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
    </Layout>
  );
};

export default Products;
