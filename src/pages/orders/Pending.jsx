import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetFetchOrders } from "./../../api/orders";
import { removeUser } from "../../toolkit/UserSlice";
import empty from "./../../assets/box.png";
import Skeleton from "../../components/Skeleton";
import PendingOrder from "../../components/order/PendingOrder";

const Pending = () => {
	const [loading, setLoading] = useState(false);
	const [orders, setOrders] = useState([]);
	const dispatch = useDispatch();
	const [hit, setHit] = useState("");

	useEffect(() => {
		setLoading(true);

		const fetch = async () => {
			try {
				const data = await GetFetchOrders("pending");
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
	}, [dispatch, hit]);

	return (
		<div className='bg-white py-2'>
			<h3 className='text-xl font-bold text-slate-700 py-5 ml-5'>
				Pending Order
			</h3>
			<div className='mx-5'>
				{loading && <Skeleton noOfLines={5} />}
				{orders?.map((order, index) => (
					<PendingOrder
						key={index}
						order={order}
						index={index}
						setHit={setHit}
					/>
				))}

				{loading === false && orders?.length === 0 && (
					<div className='py-10 flex flex-col justify-center items-center border shadow-md rounded-lg'>
						<img src={empty} alt='' className='w-[100px] opacity-60' />
						<h4 className='flex items-center justify-center text-center font-bold text-slate-700'>
							Category Empty
						</h4>
					</div>
				)}
			</div>
		</div>
	);
};

export default Pending;
