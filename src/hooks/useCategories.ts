import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { categoryActions } from "@/redux/slices/categorySlice";

export const useCategories = () => {
  const categories = useAppSelector((state) => state.categories.categoryList);
  const dispatch = useAppDispatch();

  const addCategoryByName = (name: string) => {
    dispatch(categoryActions.addCategoryByName(name));
  };

  const deleteCategoryByName = (name: string) => {
    dispatch(categoryActions.deleteCategoryByName(name));
  };

  return { categories, addCategoryByName, deleteCategoryByName };
};
