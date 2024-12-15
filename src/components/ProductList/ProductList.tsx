import { ProductCard } from "../ProductCard/ProductCard";
import { ProductCardProps } from "../ProductCard/ProductCard.props";
import { ProductListProps } from "./ProductList.props";
import { CARDS_PER_PAGE } from "../../App";
import Box from "@mui/material/Box/Box";
import { MUIStyles } from "../../@types";
import { Context, ProductsContext } from "../ProductsProvider/ProductsProvider";
import { useContext } from "react";

export type Product = ProductCardProps & { id: string };

export const ProductList = ({ currentPage }: ProductListProps) => {
  const context = useContext<ProductsContext>(Context);
  const products = context?.filteredProducts || [];

  const currentProducts = products.slice(
    (currentPage - 1) * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE
  );

  const wrapperStyles: MUIStyles = {
    display: "grid",
    gap: "20px 30px",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: "30px",
  };

  return (
    <Box sx={wrapperStyles}>
      {currentProducts.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Box>
  );
};
