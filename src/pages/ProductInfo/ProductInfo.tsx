import { MUIStyles } from "@/@types";
import { HorizontalDivider } from "@/components/HorizontalDivider/HorizontalDivider";
import { useProductActions } from "@/hooks/useProductActions";
import { Layout } from "@/layouts/Layout";
import { useAppSelector } from "@/redux/hooks";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { useParams } from "react-router";

const ProductInfo = () => {
  const containerStyles: MUIStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  };

  const cardStyles: MUIStyles = {
    padding: "20px",
    display: "flex",
    alignItems: "center",
    gap: "30px",
    background: "var(--gray)",
    width: "1100px",
    height: "430px",
    borderRadius: "7px",
    border: "none",
    color: "var(--secondary-color)",
    transition: "background 0.6s, width 0.6s, height 0.6s",
  };

  const imageStyles: MUIStyles = {
    width: "30%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "7px",
  };

  const contentStyles: MUIStyles = {
    width: "100%",
  };

  const titleStyles: MUIStyles = {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: 800,
  };

  const textStyles: MUIStyles = {
    width: "100%",
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: "200px",
    textWrap: "balance",
  };

  const { id } = useParams();

  const currentProduct = useAppSelector((state) =>
    state.products.productList.find((product) => product.id === id)
  );

  const { addProduct, deleteProductById, updateProduct } = useProductActions();

  return (
    <Layout hasDrawer={false}>
      <Box sx={containerStyles}>
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
              image="/no-image.png"
              alt={"Изображение " + currentProduct?.name}
              sx={imageStyles}
            />
          )}
          <Box sx={contentStyles}>
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
            <Typography sx={textStyles}>
              {currentProduct?.description}
            </Typography>
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
        <Button>Редактировать информацию</Button>
      </Box>
    </Layout>
  );
};

export default ProductInfo;
