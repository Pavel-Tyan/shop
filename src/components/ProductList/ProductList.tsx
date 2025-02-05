import { ProductCard } from "@components/ProductCard/ProductCard";
import { ProductCardProps } from "@components/ProductCard/ProductCard.props";
import { ProductListProps } from "@components/ProductList/ProductList.props";
import Box from "@mui/material/Box/Box";
import { MUIStyles } from "@/@types";
import { CARDS_PER_PAGE } from "@/constants";

export type Product = ProductCardProps & { id: string };

export const ProductList = ({ currentPage, products }: ProductListProps) => {
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
