import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
	return (
		<Link
			to={`/products/${product?.product_Id}`}
			className='item_card w-full flex flex-col'
		>
			<img
				src={
					product?.imageUrl.length > 0
						? product?.imageUrl[0]
						: product?.imageUrl
				}
				alt=''
				className='w-full h-[300px] object-cover object-top'
			/>
			<div className='text-center py-5'>
				<h3>{product?.name}</h3>
				<h4 className='line-through'>Tk {product?.price}</h4>
				<h4 className='text-lg text-red-500'>Tk {product?.discount}</h4>
			</div>
		</Link>
	);
};

export default ProductCard;
