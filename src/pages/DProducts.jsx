import React, { useEffect } from "react";
import ProductsCard from "./../components/ProductsCard";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import MProductsCard from "../components/MProductsCard";

const DProducts = () => {
	const { products } = useSelector(state => state.products);
	const { products: category } = useParams();
	const [categoryProducts, setCategoryProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (products?.length > 0) {
			const filter = products?.filter(p => p?.category === category);
			setCategoryProducts(filter);
		} else {
			navigate("/dashboard");
		}
	}, [products]);

	return (
		<>
			<div className='hidden m-3 md:m-10 md:grid grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4'>
				{categoryProducts?.map(product => (
					<ProductsCard key={product.product_Id} product={product} />
				))}
			</div>
			<div className='md:hidden m-3 md:m-10 grid grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4'>
				{categoryProducts?.map(product => (
					<MProductsCard key={product.product_Id} product={product} />
				))}
			</div>
		</>
	);
};

export default DProducts;
