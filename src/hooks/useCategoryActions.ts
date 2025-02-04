import { useAppDispatch } from "@/redux/hooks";
import { categoryActions } from "@/redux/slices/categorySlice";

export const useCategoryActions = () => {
  const dispatch = useAppDispatch();

  const addCategory = (name: string) => {
    dispatch(categoryActions.addCategory(name));
  };

  const deleteCategory = (name: string) => {
    dispatch(categoryActions.deleteCategory(name));
  };

  const updateCategory = (category: string, newName: string) => {
    dispatch(categoryActions.updateCategory({ category, newName }));
  };

  return {
    addCategory,
    deleteCategory,
    updateCategory,
  };
};
