import { ProductCardProps } from "@components/ProductCard/ProductCard.props";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { MUIStyles } from "@/@types";
import { useNavigate } from "react-router";
import { HorizontalDivider } from "../HorizontalDivider/HorizontalDivider";

export const ProductCard = (props: ProductCardProps) => {
  const cardStyles: MUIStyles = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
    background: "var(--gray)",
    width: "240px",
    height: "280px",
    borderRadius: "7px",
    border: "none",
    color: "var(--secondary-color)",
    transition: "background 0.6s, width 0.6s, height 0.6s",
  };

  const cardHoverStyles: MUIStyles = {
    background: "var(--blue)",
    width: "245px",
    height: "285px",
    color: "var(--secondary-color)",
    transition: "background 0.6s, width 0.6s, height 0.6s",
    cursor: "pointer",
  };

  const cardImageStyles: MUIStyles = {
    marginTop: "10px",
    height: "160px",
    width: "90%",
    objectFit: "cover",
    borderRadius: "7px",
  };

  const cardContentStyles: MUIStyles = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  const cardTitleStyles: MUIStyles = {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: 800,
  };

  const cardTextStyles: MUIStyles = {
    width: "100%",
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: "50px",
    textWrap: "balance",
  };

  const { name, description, img, id } = props;

  const navigate = useNavigate();

  return (
    <>
      <Card
        onClick={() => navigate(`/products/${id}`)}
        sx={[cardStyles, { "&:hover": cardHoverStyles }]}
      >
        {img && (
          <CardMedia
            component="img"
            image={img}
            alt={"Изображение " + name}
            sx={cardImageStyles}
          />
        )}
        {!img && (
          <CardMedia
            component="img"
            image="/no-image.png"
            alt={"Изображение " + name}
            sx={cardImageStyles}
          />
        )}
        <Box sx={cardContentStyles}>
          <Typography variant="h1" sx={cardTitleStyles}>
            {name}
          </Typography>
          <HorizontalDivider />
          <Typography sx={cardTextStyles}>{description}</Typography>
        </Box>
      </Card>
    </>
  );
};
