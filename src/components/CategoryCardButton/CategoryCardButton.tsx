import Button from "@mui/material/Button/Button";
import { CategoryCard } from "@components/CategoryCard/CategoryCard";
import { CategoryCardButtonProps } from "@components/CategoryCardButton/CategoryCardButton.props";
import { MUIStyles } from "@/@types";

export const CategoryCardButton = ({
  children,
  onClick,
}: CategoryCardButtonProps) => {
  const buttonStyles: MUIStyles = {
    border: "none",
  };

  return (
    <Button sx={buttonStyles} onClick={onClick}>
      <CategoryCard>{children}</CategoryCard>
    </Button>
  );
};
