import { Product } from "@/redux/slices/productSlice";

export interface ProductListProps {
  currentPage: number;
  products: Product[];
}
