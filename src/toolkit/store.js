import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import ProductsSlice from "./ProductsSlice";
import DProductSlice from "./DProductSlice";

export const store = configureStore({
	reducer: {
		products: ProductsSlice,
		category: CategorySlice,
		categorySpec: DProductSlice,
	},
});
