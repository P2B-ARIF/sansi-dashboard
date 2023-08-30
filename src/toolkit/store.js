import { configureStore } from "@reduxjs/toolkit";
// import CategorySlice from "./CategorySlice";
import ProductsSlice from "./ProductsSlice";
import DProductSlice from "./DProductSlice";
import UserSlice from "./UserSlice";

export const store = configureStore({
	reducer: {
		products: ProductsSlice,
		// category: CategorySlice,
		categorySpec: DProductSlice,
		user: UserSlice,
	},
});
