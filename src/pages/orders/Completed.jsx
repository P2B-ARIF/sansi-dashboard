import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetFetchOrders } from "./../../api/orders";
import { removeUser } from "../../toolkit/UserSlice";
import empty from "./../../assets/box.png";
import Skeleton from "../../components/Skeleton";
import CompletedLists from "../../components/order/CompletedLists";

const Completed = () => {
	const [loading, setLoading] = useState(false);
	const [orders, setOrders] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		setLoading(true);

		const fetch = async () => {
			try {
				const data = await GetFetchOrders("cancelled");
				if (data.order) {
					setOrders(data.order);
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
	}, [dispatch]);

	return (
		<div className='bg-white py-2'>
			<h3 className='text-xl font-bold text-slate-700 py-5 ml-5'>
				Completed Order
			</h3>
			<div className='mx-5 border rounded-lg overflow-hidden'>
				<div className='flex items-center justify-between uppercase font-bold text-slate-700 text-sm p-3 px-10'>
					<span>Date</span>
					<span>Shipping Address</span>
					<span>Product Details</span>
					<span>Payment</span>
				</div>
				{orders?.map((order, index) => (
					<CompletedLists key={index} order={order} />
				))}

				{loading ? (
					<Skeleton noOfLines={5} />
				) : (
					!loading &&
					orders?.length === 0 && (
						<div className='py-10 flex flex-col justify-center items-center border shadow-md rounded-lg'>
							<img src={empty} alt='' className='w-[100px] opacity-60' />
							<h4 className='flex items-center justify-center text-center font-bold text-slate-700'>
								Completed Items Empty
							</h4>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Completed;
