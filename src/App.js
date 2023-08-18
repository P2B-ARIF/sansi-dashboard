import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "./toolkit/CategorySlice";
import { fetchProducts } from "./toolkit/ProductsSlice";

function App() {
	const dispatch = useDispatch();
	const { products, carts } = useSelector(state => state.products);

	useEffect(() => {
		dispatch(fetchProducts());
		dispatch(fetchCategory());
		// dispatch(categorySpec());
	}, [dispatch]);

	return <RouterProvider router={router} />;
}

export default App;
