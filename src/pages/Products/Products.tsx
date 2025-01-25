import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Product, ProductList } from "../../components/ProductList/ProductList";
import { Box, Drawer, Pagination } from "@mui/material";
import { MUIStyles } from "../../@types";
import { ProductsProvider } from "../../components/ProductsProvider/ProductsProvider";

export const CARDS_PER_PAGE = 8;

// Замокаем данные, которые по хорошему идут с бекенда.
const products: Product[] = [
  {
    id: "1",
    name: "Молоко",
    description: "Молоко 3,5%",
    category: "Еда",
    count: 5,
    measure: "л",
  },
  {
    id: "2",
    name: "Пицца маргарита",
    description:
      "традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой. Повар, специализирующийся на приготовлении пиццы, — пиццайоло.",
    category: "Еда",
    count: 10,
    measure: "шт",
    img: "./pizza-1.png",
  },
  {
    id: "3",
    name: "Сырная пицца",
    description:
      "традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой. Повар, специализирующийся на приготовлении пиццы, — пиццайоло.",
    category: "Еда",
    count: 10,
    measure: "шт",
    img: "./pizza-1.png",
  },
  {
    id: "4",
    name: "Гавайская пицца",
    description:
      "традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой. Повар, специализирующийся на приготовлении пиццы, — пиццайоло.",
    category: "Еда",
    count: 10,
    measure: "шт",
    img: "./pizza-1.png",
  },
  {
    id: "5",
    name: "Тетради",
    description: "Тетради 64 листа",
    category: "Канцелярия",
    count: 100,
    measure: "шт",
  },
  {
    id: "6",
    name: "Альбом",
    description: "Альбом 24 листа",
    category: "Канцелярия",
    count: 50,
    measure: "шт",
  },
  {
    id: "7",
    name: "Альбом",
    description: "Альбом 24 листа",
    category: "Канцелярия",
    count: 50,
    measure: "шт",
  },
  {
    id: "8",
    name: "Альбом",
    description: "Альбом 24 листа",
    category: "Канцелярия",
    count: 50,
    measure: "шт",
  },
  {
    id: "9",
    name: "Альбом",
    description: "Альбом 24 листа",
    category: "Канцелярия",
    count: 50,
    measure: "шт",
  },
  {
    id: "10",
    name: "Альбом",
    description: "Альбом 24 листа",
    category: "Канцелярия",
    count: 50,
    measure: "шт",
  },
];

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

  const pageCount = Math.ceil(products.length / CARDS_PER_PAGE);

  const containerStyles: MUIStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100svh",
    position: "relative",
  };

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
    <Box sx={containerStyles}>
      <Header hasDrawer={true} toggleDrawer={toggleDrawer} />
      <ProductsProvider>
        <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
          {<Sidebar toggleDrawer={toggleDrawer} />}
        </Drawer>
        <ProductList currentPage={currentPage} />
      </ProductsProvider>
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
    </Box>
  );
};

export default Products;
