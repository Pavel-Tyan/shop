import { createContext, useState } from "react";
import { Product } from "@components/ProductList/ProductList";
import { ProductsProviderProps } from "@components/ProductsProvider/ProductsProvider.props";
import { useAppSelector } from "@/redux/hooks";

export type ProductsContext = {
  products: Product[];
  categories: string[];
  currentCategories: string[];
  filteredProducts: Product[];
  addToCurrentCategories: (category: string) => void;
  searchProducts: (searchValue: string) => void;
  removeCurrentCategories: () => void;
} | null;
// Замокаем данные, которые по хорошему идут с бекенда.
// const products: Product[] = [
//   {
//     id: "1",
//     name: "Молоко",
//     description: "Молоко 3,5%",
//     category: "Еда",
//     count: 5,
//     measure: "л",
//   },
//   {
//     id: "2",
//     name: "Пицца маргарита",
//     description:
//       "традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой. Повар, специализирующийся на приготовлении пиццы, — пиццайоло.",
//     category: "Еда",
//     count: 10,
//     measure: "шт",
//     img: "./pizza-1.png",
//   },
//   {
//     id: "3",
//     name: "Сырная пицца",
//     description:
//       "традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой. Повар, специализирующийся на приготовлении пиццы, — пиццайоло.",
//     category: "Еда",
//     count: 10,
//     measure: "шт",
//     img: "./pizza-1.png",
//   },
//   {
//     id: "4",
//     name: "Гавайская пицца",
//     description:
//       "традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой. Повар, специализирующийся на приготовлении пиццы, — пиццайоло.",
//     category: "Еда",
//     count: 10,
//     measure: "шт",
//     img: "./pizza-1.png",
//   },
//   {
//     id: "5",
//     name: "Тетради",
//     description: "Тетради 64 листа",
//     category: "Канцелярия",
//     count: 100,
//     measure: "шт",
//   },
//   {
//     id: "6",
//     name: "Альбом",
//     description: "Альбом 24 листа",
//     category: "Канцелярия",
//     count: 50,
//     measure: "шт",
//   },
//   {
//     id: "7",
//     name: "Альбом",
//     description: "Альбом 24 листа",
//     category: "Канцелярия",
//     count: 50,
//     measure: "шт",
//   },
//   {
//     id: "8",
//     name: "Альбом",
//     description: "Альбом 24 листа",
//     category: "Канцелярия",
//     count: 50,
//     measure: "шт",
//   },
//   {
//     id: "9",
//     name: "Альбом",
//     description: "Альбом 24 листа",
//     category: "Канцелярия",
//     count: 50,
//     measure: "шт",
//   },
//   {
//     id: "10",
//     name: "Альбом",
//     description: "Альбом 24 листа",
//     category: "Канцелярия",
//     count: 50,
//     measure: "шт",
//   },
// ];
const categories: string[] = ["Еда", "Канцелярия"];

export const Context = createContext<ProductsContext>(null);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const products = useAppSelector((state) => state.products.productList);
  const [currentCategories, setCurrentCategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const searchProducts = (categories: string[], searchValue: string) => {
    console.log(categories);
    console.log(searchValue);
    return products.filter((product) => {
      // Проверяем, что продукт содержит все выбранные категории
      for (const category of currentCategories) {
        if (!product.category?.includes(category)) {
          return false;
        }
      }
      // Проверяем на соответствие значения в поле поиска
      console.log(
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      return product.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  };

  const contextValue = {
    products: products,
    categories: categories,
    currentCategories: currentCategories,
    filteredProducts: filteredProducts,
    addToCurrentCategories: (category: string) => {
      // Set используется, чтобы удалить дубликаты категорий
      setCurrentCategories([...new Set([...currentCategories, category])]);
    },
    searchProducts: (searchValue: string) => {
      setFilteredProducts(searchProducts(categories, searchValue));
    },

    removeCurrentCategories: () => {
      setCurrentCategories([]);
    },
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
