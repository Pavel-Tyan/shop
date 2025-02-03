import { MUIStyles } from "@/@types";
import { HorizontalDivider } from "@/components/HorizontalDivider/HorizontalDivider";
import { useProductActions } from "@/hooks/useProductActions";
import { Layout } from "@/layouts/Layout";
import { useAppSelector } from "@/redux/hooks";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useParams } from "react-router";

const ProductInfo = () => {
  const cardStyles: MUIStyles = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
    background: "var(--gray)",
    width: "750px",
    height: "400px",
    borderRadius: "7px",
    border: "none",
    color: "var(--secondary-color)",
    transition: "background 0.6s, width 0.6s, height 0.6s",
  };

  const imageStyles: MUIStyles = {
    width: "100%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "7px",
  };

  const titleStyles: MUIStyles = {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: 800,
  };

  const textStyles: MUIStyles = {
    width: "100%",
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: "50px",
    textWrap: "balance",
  };

  const { id } = useParams();

  const currentProduct = useAppSelector((state) =>
    state.products.productList.find((product) => product.id === id)
  );

  const { addProduct, deleteProductById, updateProduct } = useProductActions();

  return (
    <Layout hasDrawer={false}>
      <Card sx={cardStyles}>
        {currentProduct?.img && (
          <CardMedia
            component="img"
            image={currentProduct.img}
            alt={"Изображение " + currentProduct.name}
            sx={imageStyles}
          />
        )}
        {!currentProduct?.img && (
          <CardMedia
            component="img"
            image="./no-image.png"
            alt={"Изображение " + currentProduct?.name}
            sx={imageStyles}
          />
        )}
        <Box>
          <Typography sx={titleStyles} variant="h1">
            {currentProduct?.name}
          </Typography>
          <HorizontalDivider />
          <Typography sx={titleStyles} variant="h1">
            {"Категория: " + currentProduct?.category}
          </Typography>
          <HorizontalDivider />
          <Typography sx={titleStyles} variant="h1">
            Описание
          </Typography>
          <Typography sx={textStyles}>{currentProduct?.description}</Typography>
          <HorizontalDivider />
          <Typography sx={titleStyles} variant="h1">
            {"Категория: " + currentProduct?.category}
          </Typography>
          <HorizontalDivider />
          <Typography sx={titleStyles} variant="h1">
            {"Доступное количество: " +
              currentProduct?.count +
              " " +
              currentProduct?.measure}
          </Typography>
        </Box>
      </Card>
    </Layout>
  );
};

export default ProductInfo;
