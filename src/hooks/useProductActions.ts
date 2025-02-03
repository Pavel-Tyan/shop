import { useAppDispatch } from "@/redux/hooks";
import { Product, productActions } from "@/redux/slices/productSlice";

export const useProductActions = () => {
  const dispatch = useAppDispatch();

  const addProduct = (product: Product) => {
    dispatch(productActions.addProduct(product));
  };

  const deleteProductById = (id: string) => {
    dispatch(productActions.deleteProductById(id));
  };

  const updateProduct = (product: Product) => {
    dispatch(productActions.updateProduct(product));
  };

  return {
    addProduct,
    deleteProductById,
    updateProduct,
  };
};
