import { Product } from "@/api/@types/api";

export interface ProductListProps {
  currentPage: number;
  products: Product[];
}
