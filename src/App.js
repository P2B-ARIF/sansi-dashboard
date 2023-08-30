import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategory } from "./toolkit/CategorySlice";
import { fetchProducts } from "./toolkit/ProductsSlice";
import { fetchUser } from "./toolkit/UserSlice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
		dispatch(fetchCategory());
		dispatch(fetchUser());
	}, [dispatch]);

	return <RouterProvider router={router} />;
}

export default App;
