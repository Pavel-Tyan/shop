import { Card } from "@mui/material";
import { CategoryCardProps } from "./CategoryCard.props";
import { MUIStyles } from "@/@types";

export const CategoryCard = ({ children }: CategoryCardProps) => {
  const categoryCardStyles: MUIStyles = {
    width: "200px",
    height: "35px",
    background: "var(--blue)",
    color: "var(--secondary-color)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <Card sx={categoryCardStyles}>{children}</Card>;
};
