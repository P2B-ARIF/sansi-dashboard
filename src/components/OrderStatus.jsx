import React from "react";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

const OrderStatus = () => {
	return (
		<div className='m-10'>
			<TableContainer>
				<Table size={"sm"} variant='striped' colorScheme='teal'>
					<Thead>
						<Tr>
							<Th>Order ID</Th>
							<Th>Customer</Th>
							<Th>Order</Th>
							<Th>Delivery Date</Th>
							<Th>Delivery Pricing</Th>
							<Th>Payment</Th>
							<Th>Status</Th>
							<Th>Action</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>AKN12508</Td>
							<Td>Olivera Nules</Td>
							<Td>Nike Tshirt</Td>
							<Td>12.01.2021</Td>
							<Td>24.90</Td>
							<Td>
								<h4 className='py-1 px-2 rounded-lg bg-red-500 text-center mx-auto text-white'>
									Pending
								</h4>
							</Td>
							<Td>Cash On</Td>
							<Td>
								<Select placeholder='Select option'>
									<option value='pending'>Pending</option>
									<option value='on-way'>On Way</option>
									<option value='delivered'>Delivered</option>
								</Select>
							</Td>
						</Tr>
						<Tr>
							<Td>AKN12508</Td>
							<Td>Olivera Nules</Td>
							<Td>Nike Tshirt</Td>
							<Td>12.01.2021</Td>
							<Td>24.90</Td>
							<Td>
								<h4 className='py-1 px-2 rounded-lg bg-yellow-500 text-center mx-auto text-white'>
									On Way
								</h4>
							</Td>
							<Td>Cash On</Td>
							<Td>
								<Select placeholder='Select option'>
									<option value='pending'>Pending</option>
									<option value='on-way'>On Way</option>
									<option value='delivered'>Delivered</option>
								</Select>
							</Td>
						</Tr>
						<Tr>
							<Td>AKN12508</Td>
							<Td>Olivera Nules</Td>
							<Td>Nike Tshirt</Td>
							<Td>12.01.2021</Td>
							<Td>24.90</Td>
							<Td>
								<h4 className='py-1 px-2 rounded-lg bg-green-500 text-center mx-auto text-white'>
									Pending
								</h4>
							</Td>
							<Td>Cash On</Td>
							<Td>
								<Select placeholder='Select option'>
									<option value='pending'>Pending</option>
									<option value='on-way'>On Way</option>
									<option value='delivered'>Delivered</option>
								</Select>
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default OrderStatus;
