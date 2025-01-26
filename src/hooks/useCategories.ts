import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Category, categoryActions } from "@/redux/slices/categorySlice";

export const useCategories = () => {
  const categories = useAppSelector((state) => state.categories.categoryList);
  const dispatch = useAppDispatch();

  const addCategory = (name: string) => {
    dispatch(categoryActions.addCategory(name));
  };

  const deleteCategory = (name: string) => {
    dispatch(categoryActions.deleteCategory(name));
  };

  const updateCategory = (category: Category, newName: string) => {
    dispatch(categoryActions.updateCategory({ category, newName }));
  };

  return {
    categories,
    addCategory,
    deleteCategory,
    updateCategory,
  };
};
