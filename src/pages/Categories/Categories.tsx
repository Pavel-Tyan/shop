import { MUIStyles } from "@/@types";
import { CategoryCard } from "@/components/CategoryCard/CategoryCard";
import { useCategories } from "@/hooks/useCategories";
import { Box } from "@mui/material";

const Categories = () => {
  const { categories, addCategoryByName, deleteCategoryByName } =
    useCategories();

  const wrapperStyles: MUIStyles = {
    display: "grid",
    gap: "20px 30px",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: "30px",
  };

  return (
    <Box sx={wrapperStyles}>
      {categories.map((category) => (
        <CategoryCard key={category.name}>{category.name}</CategoryCard>
      ))}
    </Box>
  );
};

export default Categories;
