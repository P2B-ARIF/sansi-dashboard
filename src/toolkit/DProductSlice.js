import { createSlice } from "@reduxjs/toolkit";

import data from "../assets/dis.json";

const DProductsSlice = createSlice({
	name: "categorySpecification",
	initialState: {
		specification: data,
		isLoading: false,
	},
});

export default DProductsSlice.reducer;
