import React from "react";

const OnWayCard = ({ order }) => {
	const { product_Id, quantity, price, size, productDetails } = order;
	const {
		imageUrl,
		name,
		stock,
		price: productPrice,
		discount,
	} = productDetails;
	return (
		<div className='rounded-lg shadow-md overflow-hidden flex justify-between text-sm border border-gray-200 p-3'>
			<div className='flex gap-3'>
				<div className='h-[150px] overflow-hidden '>
					<img
						src={imageUrl.length > 0 ? imageUrl[0] : imageUrl}
						alt=''
						className='h-full w-full object-cover object-center rounded-lg transition-transform duration-300 hover:scale-105'
					/>
				</div>
				<div>
					<h3 className='font-bold'>{name}</h3>

					<h4>Stock: {stock}</h4>
					<h4>Discount: {discount}</h4>
					<h4>Price: {productPrice}</h4>
				</div>
			</div>
			<div>
				<h3>Product Id: {product_Id}</h3>
				<h3>Quantity: {quantity}</h3>
				<h3>Size: {size}</h3>
				<h3>Price: {price}</h3>
				<h3 className='font-bold text-slate-600'>Total: {price * quantity}</h3>
			</div>
		</div>
	);
};

export default OnWayCard;
