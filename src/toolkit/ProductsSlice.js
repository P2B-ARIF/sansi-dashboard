import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products", async () => {
	const response = await fetch(
		`${process.env.REACT_APP_SERVER_URL}/product/allProducts`,
		{
			method: "GET",
			headers: {
				Authorization: "Bearer " + process.env.REACT_APP_SECURE_FETCHING,
			},
		},
	);
	return response.json();
});

const productsSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
		isLoading: false,
		error: null,
	},
	extraReducers: builder => {
		builder.addCase(fetchProducts.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
		});
		builder.addCase(fetchProducts.rejected, state => {
			state.products = [];
			state.isLoading = false;
		});
	},
});

export default productsSlice.reducer;
