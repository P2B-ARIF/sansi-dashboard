import React, { useEffect, useState } from "react";
import { GetFlashSaleProduct } from "../api/products";
import { useDispatch } from "react-redux";
import { removeUser } from "../toolkit/UserSlice";
import Skeleton from "../components/Skeleton";
import ProductsCard from "../components/ProductsCard";
import empty from "./../assets/box.png";

const Flash = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const [hit, setHit] = useState("");

	useEffect(() => {
		setLoading(true);
		const fetch = async () => {
			try {
				const data = await GetFlashSaleProduct();
				if (data) {
					setProducts(data);
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
	}, [dispatch, hit]);

	return (
		<>
			{loading && (
				<div className='m-3 rounded-lg overflow-hidden'>
					<Skeleton noOfLines={5} />
				</div>
			)}
			<div className='hidden m-3 md:m-10 md:grid grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4'>
				{!loading &&
					products?.map(product => (
						<ProductsCard
							key={product.product_Id}
							product={product}
							setHit={setHit}
						/>
					))}
			</div>
			{!loading && products?.length === 0 && (
				<div className='py-10 flex flex-col justify-center items-center border shadow-md rounded-lg'>
					<img src={empty} alt='' className='w-[100px] opacity-60' />
					<h4 className='flex items-center justify-center text-center font-bold text-slate-700'>
						On Way Order Empty
					</h4>
				</div>
			)}
		</>
	);
};

export default Flash;
