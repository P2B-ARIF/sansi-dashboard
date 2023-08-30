import { Td, Th, Tr } from "@chakra-ui/react";
import React from "react";

const HistoryTable = ({ history }) => {
	const { actionInfo, productDetails: details, status, user } = history || {};
	const { actionDate, admin } = actionInfo;

	return (
		<Tr>
			<Td className='text-sm'>
				<h4>{actionDate?.fns?.fns_PP}</h4>
				<h4>{actionDate?.fns?.fns_pp}</h4>
			</Td>
			<Td className='flex gap-5'>
				<div>
					<h4 className='font-bold text-slate-600 mb-1'>Admin</h4>

					<h5>Name: {admin?.name}</h5>
					<h5>Email: {admin?.email}</h5>
				</div>
				{user && (
					<div>
						<h4 className='font-bold text-slate-600 mb-1'>
							User | {user?.createdAt?.fns?.fns_PP}
						</h4>

						<h5>Name: {user?.name}</h5>
						<h5>Email: {user?.email}</h5>
						<h5>Phone: {user?.phone}</h5>
					</div>
				)}
			</Td>

			<Td>
				<Tr>
					<Th>Product Id</Th>
					<Th>Price</Th>
					<Th>Size</Th>
					<Th>Quantity</Th>
				</Tr>
				{/* <div className='flex items-center gap-5'>
					<h3></h3>
					<h3></h3>
					<h3></h3>
					<h3></h3>
				</div> */}
				{details?.map((product, index) => {
					return (
						// < key={index} className='flex gap-4'>
						<Tr key={index}>
							<Td>{product?.product_Id}</Td>
							<Td>{product?.price}</Td>
							<Td>{product?.size}</Td>
							<Td>{product?.quantity}</Td>
						</Tr>
					);
				})}
			</Td>

			<Td>{status}</Td>
		</Tr>
	);
};

export default HistoryTable;
