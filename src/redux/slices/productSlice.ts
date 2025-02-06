import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  name: string;
  description?: string;
  category?: string;
  count: number;
  measure: string;
  img?: string;
}

interface ProductListState {
  productList: Product[];
}

const initialState: ProductListState = {
  productList: [
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
      img: "/pizza-1.png",
    },
    {
      id: "3",
      name: "Сырная пицца",
      description:
        "традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой. Повар, специализирующийся на приготовлении пиццы, — пиццайоло.",
      category: "Еда",
      count: 10,
      measure: "шт",
      img: "/pizza-1.png",
    },
    {
      id: "4",
      name: "Гавайская пицца",
      description:
        "традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи, грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой. Повар, специализирующийся на приготовлении пиццы, — пиццайоло.",
      category: "Еда",
      count: 10,
      measure: "шт",
      img: "/pizza-1.png",
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
  ],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteProductById: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.productList.findIndex((product) => product.id === id);

      if (index !== -1) {
        state.productList.splice(index, 1);
      }
    },

    addProduct: (state, action: PayloadAction<Product>) => {
      state.productList.push(action.payload);
    },

    updateProduct: (state, action: PayloadAction<Product>) => {
      const updatedProduct = action.payload;
      const index = state.productList.findIndex(
        (product) => product.id === updatedProduct.id
      );

      if (index !== -1) {
        state.productList[index] = updatedProduct;
      }
    },

    updateCategoryName: (
      state,
      action: PayloadAction<{ category: string; newName: string }>
    ) => {
      const { category, newName: updatedCategory } = action.payload;
      state.productList.forEach((product) => {
        if (product.category === category) {
          product.category = updatedCategory;
        }
      });
    },
  },
});

export const { reducer: productReducer, actions: productActions } =
  productSlice;
