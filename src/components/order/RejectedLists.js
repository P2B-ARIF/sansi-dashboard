import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import React from "react";

const RejectedLists = ({ order: orderDetails }) => {
	const {
		email,
		user,
		order,
		orderNo,
		paymentMethod,
		shippingAddress,
		cancelInfo,
		fieldInfo,
	} = orderDetails || {};
	const { email: emailUser, name: userName, phone: userPhone } = user || {};
	const { contact, address, phone, name, district } = shippingAddress || {};

	return (
		<div className='border-t border-red-500 p-3 px-10 flex justify-around gap-3 bg-red-100'>
			<div className='text-sm'>
				<h4 className='font-bold text-slate-600'>
					#Order No: {orderNo || "NaN"}
				</h4>
				<h4>Name: {userName}</h4>
				<h4>Email: {email || emailUser}</h4>
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
			<div>
				<TableContainer>
					<Table variant='simple' size={"sm"}>
						<Thead>
							<Tr className='text-xs'>
								<Th>Product ID</Th>
								<Th>Size</Th>
								<Th>Quantity</Th>
								<Th>Price</Th>
								<Th>Total</Th>
							</Tr>
						</Thead>
						<Tbody>
							{order?.length > 0 &&
								order?.map((product, i) => {
									return (
										<Tr key={i}>
											<Td>{product?.product_Id}</Td>
											<Td textTransform={"uppercase"}>{product?.size}</Td>
											<Td textAlign={"center"}>{product?.quantity}</Td>
											<Td>{product?.price}</Td>
											<Td fontWeight={"bold"}>
												{product?.price * product?.quantity}
											</Td>
										</Tr>
									);
								})}
						</Tbody>
					</Table>
				</TableContainer>
			</div>
			<div className='text-sm'>
				<h4>
					Date:{" "}
					{cancelInfo?.rejectedDate?.fns?.fns_PP ||
						fieldInfo?.fieldDate?.fns?.fns_PP}
					<span className='block'>
						Time:{" "}
						{cancelInfo?.rejectedDate?.fns?.fns_pp ||
							fieldInfo?.fieldDate?.fns?.fns_pp}
					</span>
				</h4>
				<h4 className='font-bold text-slate-600'>
					Author: {cancelInfo?.author || fieldInfo?.author}
				</h4>
				<h4 className='font-bold text-slate-600'>Payment: {paymentMethod}</h4>
				{cancelInfo?.name && (
					<h4 className='font-bold text-slate-600'>Name: {cancelInfo?.name}</h4>
				)}
				{/* <h4 className='font-bold text-slate-600'>
					Total Amount:{" "}
					{orderPrice.reduce((prev, next) => prev + next, delivery_fee)}
				</h4> */}
			</div>
		</div>
	);
};

export default RejectedLists;
