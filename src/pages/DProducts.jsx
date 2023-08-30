import React, { useEffect } from "react";
import ProductsCard from "./../components/ProductsCard";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import MProductsCard from "../components/MProductsCard";
import { GetFetchProducts } from "../api/products";
import { removeUser } from "../toolkit/UserSlice";
import Skeleton from "../components/Skeleton";

const DProducts = () => {
	const { products: category } = useParams();
	const [categoryProducts, setCategoryProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const [hit, setHit] = useState("");

	useEffect(() => {
		setLoading(true);

		const fetch = async () => {
			try {
				const data = await GetFetchProducts(category);
				if (data) {
					setCategoryProducts(data);
					setLoading(false);
				}

				if (data.access === false) {
					dispatch(removeUser());
					localStorage.removeItem("token_");
				}
			} catch (error) {
				console.error("Error in useEffect:", error);
			} finally {
				setLoading(false);
			}
		};
		fetch();
	}, [dispatch, category, hit]);
	return (
		<>
			{loading && (
				<div className='m-3 rounded-lg overflow-hidden'>
					<Skeleton noOfLines={5} />
				</div>
			)}
			<div className='hidden m-3 md:m-10 md:grid grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4'>
				{!loading &&
					categoryProducts?.map(product => (
						<ProductsCard
							key={product.product_Id}
							product={product}
							setHit={setHit}
						/>
					))}
			</div>
			<div className='md:hidden m-3 md:m-10 grid grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4'>
				{!loading &&
					categoryProducts?.map(product => (
						<MProductsCard
							key={product.product_Id}
							product={product}
							setHit={setHit}
						/>
					))}
			</div>
		</>
	);
};

export default DProducts;
