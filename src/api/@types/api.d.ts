export type Category = {
  id: number;
  name: string;
};

export type CategoryDto = Omit<Category, "id">;

export type Product = {
  id: number;
  name: string;
  description: string;
  count: number;
  measure: string;
  img: string;
  category: string;
};

export type ProductDto = Omit<Product, "id">;
