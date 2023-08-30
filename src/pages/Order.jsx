import React from "react";
import OrderStatus from "./../components/OrderStatus";

const Order = ({ title }) => {
	return (
		<div>
			<OrderStatus />
			{/* <h1>{title}</h1> */}
		</div>
	);
};

export default Order;
