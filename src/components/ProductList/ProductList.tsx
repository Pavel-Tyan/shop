import { ProductCard } from "../ProductCard/ProductCard";
import { ProductCardProps } from "../ProductCard/ProductCard.props";
import styles from "./ProductList.module.css";
import { ProductListProps } from "./ProductList.props";
import { CARDS_PER_PAGE } from "../../App";

type Product = ProductCardProps & { id: string };

//Замокаем данные о продуктах, которые нужно брать с бэкенда
export const products: Product[] = [
  {
    id: "1",
    name: "Молоко",
    description: "Молоко 3,5%",
    category: "Еда",
    count: 5,
    measure: "л",
  },
  {
    id: "2",
    name: "Пицца маргарита",
    description:
      "традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой. Повар, специализирующийся на приготовлении пиццы, — пиццайоло.",
    category: "Еда",
    count: 10,
    measure: "шт",
    img: "./pizza-1.png",
  },
  {
    id: "3",
    name: "Сырная пицца",
    description:
      "традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой. Повар, специализирующийся на приготовлении пиццы, — пиццайоло.",
    category: "Еда",
    count: 10,
    measure: "шт",
    img: "./pizza-1.png",
  },
  {
    id: "4",
    name: "Гавайская пицца",
    description:
      "традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой. Повар, специализирующийся на приготовлении пиццы, — пиццайоло.",
    category: "Еда",
    count: 10,
    measure: "шт",
    img: "./pizza-1.png",
  },
  {
    id: "5",
    name: "Тетради",
    description: "Тетради 64 листа",
    category: "Канцелярия",
    count: 100,
    measure: "шт",
  },
  {
    id: "6",
    name: "Альбом",
    description: "Альбом 24 листа",
    category: "Канцелярия",
    count: 50,
    measure: "шт",
  },
  {
    id: "7",
    name: "Альбом",
    description: "Альбом 24 листа",
    category: "Канцелярия",
    count: 50,
    measure: "шт",
  },
  {
    id: "8",
    name: "Альбом",
    description: "Альбом 24 листа",
    category: "Канцелярия",
    count: 50,
    measure: "шт",
  },
  {
    id: "9",
    name: "Альбом",
    description: "Альбом 24 листа",
    category: "Канцелярия",
    count: 50,
    measure: "шт",
  },
  {
    id: "10",
    name: "Альбом",
    description: "Альбом 24 листа",
    category: "Канцелярия",
    count: 50,
    measure: "шт",
  },
];

export const ProductList = ({ currentPage }: ProductListProps) => {
  const currentProducts = products.slice(
    (currentPage - 1) * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE
  );

  return (
    <div className={styles["wrapper"]}>
      {currentProducts.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
