import { useCategories } from "@/hooks/useCategories";

const Categories = () => {
  const { categories, addCategoryByName, deleteCategoryByName } =
    useCategories();

  return <div>Categories</div>;
};

export default Categories;
