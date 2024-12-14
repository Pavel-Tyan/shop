import { useState } from "react";
import { ProductCardProps } from "./ProductCard.props";
import { CardDialog } from "../CardDialog/CardDialog";
import { Box, Card, CardMedia, Divider, Typography } from "@mui/material";

export const ProductCard = (props: ProductCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const { name, description, img } = props;

  const cardStyles = {
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

  const cardHoverStyles = {
    background: "var(--blue)",
    width: "245px",
    height: "285px",
    color: "var(--secondary-color)",
    transition: "background 0.6s, width 0.6s, height 0.6s",
  };

  const cardImageStyles = {
    marginTop: "10px",
    height: "160px",
    width: "90%",
    objectFit: "cover",
    borderRadius: "7px",
  };

  const cardContentStyles = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  const cardTitleStyles = {
    fontSize: "18px",
    fontWeight: 800,
  };

  const cardTextStyles = {
    width: "100%",
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: "50px",
    textWrap: "balance",
  };

  const dividerStyles = {
    width: "100%",
    background: "var(--secondary-color)",
  };

  return (
    <>
      <Card
        onClick={toggleDialog}
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
            image="./no-image.png"
            alt={"Изображение " + name}
            sx={cardImageStyles}
          />
        )}
        <Box sx={cardContentStyles}>
          <Typography sx={cardTitleStyles}>{name}</Typography>
          <Divider sx={dividerStyles} />
          <Typography sx={cardTextStyles}>{description}</Typography>
        </Box>
      </Card>
      <CardDialog
        isOpen={isDialogOpen}
        productInfo={props}
        closeDialog={toggleDialog}
      />
    </>
  );
};
