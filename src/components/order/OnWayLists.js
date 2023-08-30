import React from "react";
import { useState } from "react";
import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import { removeUser } from "../../toolkit/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import OnWayCard from "./OnWayCard";

const OnWayLists = ({ order, index, setHit }) => {
	const [loading, setLoading] = useState(false);
	const [cLoading, setCLoading] = useState(false);
	const toast = useToast();
	const dispatch = useDispatch();
	const { user: admin } = useSelector(state => state.user);

	const {
		order: orders,
		user,
		shippingAddress,
		issueDate,
		delivery_fee,
		orderNo,
		_id,
	} = order || {};
	const { email, name: userName, phone: userPhone } = user || {};
	const { address, contact, district, name, phone } = shippingAddress;

	let orderPrice = orders?.map(o => o.quantity * o.price);

	const handleCompleteOrder = async () => {
		const permission = window.confirm("Are you sure to complete the order?");

		if (permission) {
			setCLoading(true);
			const url = `${process.env.REACT_APP_SERVER_URL}/admin/order/complete`;
			await axios
				.put(
					url,
					{ id: _id, name: admin?.name },
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${JSON.parse(
								localStorage.getItem("token_"),
							)}`,
						},
					},
				)
				.then(res => {
					setCLoading(false);
					if (res?.data?.acknowledged) {
						toast({
							title: "Congratulations",
							description: "Order Completely Delivered.",
							status: "success",
							position: "bottom-right",
							duration: 5000,
							isClosable: true,
						});
						setHit("order success fully complete");
					}
				})
				.catch(err => {
					if (err?.response?.data?.access === false) {
						dispatch(removeUser());
						localStorage.removeItem("token_");
					}
					console.log(err, "order complete");
					setCLoading(false);
				});
		}
	};

	const handleFieldOrder = async () => {
		const permission = window.confirm("Are you sure to field the order?");

		if (permission) {
			setLoading(true);
			const url = `${process.env.REACT_APP_SERVER_URL}/admin/order/field`;
			await axios
				.put(
					url,
					{ id: _id, name: admin?.name },
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${JSON.parse(
								localStorage.getItem("token_"),
							)}`,
						},
					},
				)
				.then(res => {
					setLoading(false);
					if (res?.data?.acknowledged) {
						toast({
							title: "Order Submit.",
							description: "Now take to shipped agent.",
							status: "success",
							position: "bottom-right",
							duration: 5000,
							isClosable: true,
						});
						setHit("order submit");
					}
				})
				.catch(err => {
					if (err?.response?.data?.access === false) {
						dispatch(removeUser());
						localStorage.removeItem("token_");
					}
					console.log(err, "order field");
					setLoading(false);
				});
		}
	};

	return (
		<div className='border rounded-lg p-5 my-5'>
			<div className='flex items-center justify-between'>
				<h5 className='font-bold text-slate-500'>User Details</h5>
				<h5 className='font-bold text-slate-500'>Shipping Details</h5>
				<h5 className='font-bold text-slate-500'>Amount Details</h5>
			</div>
			<div className='flex items-center justify-between'>
				<div className='text-sm'>
					<h4 className='font-bold text-slate-600'>#Serial No: {index + 1}</h4>
					<h4 className='font-bold text-slate-600'>
						#Order No: {orderNo || "NaN"}
					</h4>
					<h4>Name: {userName}</h4>
					<h4>Email: {email}</h4>
					<h4>Phone: {userPhone}</h4>
				</div>
				<div className='text-sm'>
					<h3>Name: {name}</h3>
					<h3>Phone: {phone}</h3>
					<h3>Address: {address}</h3>
					<h3>Contact: {contact}</h3>
					{shippingAddress?.apartment && (
						<h3>Apartment: {shippingAddress?.apartment}</h3>
					)}
					<h3>District: {district}</h3>
				</div>
				<div className='text-sm'>
					<h4>
						Date: {issueDate?.fns?.fns_PP}
						<span className='block'>Time: {issueDate?.fns?.fns_pp}</span>
					</h4>
					<h4 className='font-bold text-slate-600'>
						Delivery Fee: {delivery_fee}
					</h4>
					<h4 className='font-bold text-slate-600'>
						Total Amount:{" "}
						{orderPrice.reduce((prev, next) => prev + next, delivery_fee)}
					</h4>
					<Button
						isLoading={cLoading ? true : false}
						disabled={cLoading ? true : false}
						onClick={() => handleCompleteOrder()}
						size={"xs"}
						colorScheme='green'
					>
						Complete Delivery
					</Button>
					<Button
						isLoading={loading ? true : false}
						disabled={loading ? true : false}
						onClick={() => handleFieldOrder()}
						size={"xs"}
						colorScheme='red'
						ml={"2px"}
					>
						Cancel
					</Button>
				</div>
			</div>

			<div className='grid grid-cols-2 gap-3 mt-3'>
				{orders?.map((order, index) => (
					<OnWayCard key={index} order={order} />
				))}
			</div>
		</div>
	);
};

export default OnWayLists;
