import { useAppDispatch } from "@/redux/hooks";
import { Category, categoryActions } from "@/redux/slices/categorySlice";

export const useCategoriesActions = () => {
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
    addCategory,
    deleteCategory,
    updateCategory,
  };
};
