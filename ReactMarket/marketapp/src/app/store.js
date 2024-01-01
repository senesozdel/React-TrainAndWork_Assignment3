import { configureStore } from '@reduxjs/toolkit'
import {categoriesSlice} from '../features/categories/categoriesSlice'
import  { productReducer }from '../features/products/productsSlice'
import { getUserReducer } from "../features/user/userSlice";
import { getcartReducer } from "../features/cart/shoppingcarSlice";
import { getfavoriteReducer } from "../features/wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    cart: getcartReducer,
    products: productReducer,
    currentUser: getUserReducer,
    cart: getcartReducer,
    favorite: getfavoriteReducer,
  },
})