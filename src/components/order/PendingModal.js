import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { Button, Input, Table, Thead } from "@chakra-ui/react";
import { Tr, Th, Tbody, Td, TableContainer, useToast } from "@chakra-ui/react";
import axios from "axios";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../toolkit/UserSlice";

const PendingModal = ({ orders, open, setOpen, setHit }) => {
	const { email, orderNo } = orders || {};
	const [loading, setLoading] = useState(false);
	const [receipt, setReceipt] = useState("");
	const { user } = useSelector(state => state.user);
	const dispatch = useDispatch();
	const toast = useToast();

	const fns_PP = format(new Date(), "PP");
	const fns_P = format(new Date(), "P");
	const fns_pp = format(new Date(), "pp");

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);

		const url = `${process.env.REACT_APP_SERVER_URL}/admin/order/confirm`;
		await axios
			.put(
				url,
				{
					id: orders?._id,
					shipped: {
						shipDetails: {
							receipt,
						},
						shippedBy: user?.name,
						shippedDate: {
							date: new Date(),
							fns: {
								fns_PP,
								fns_P,
								fns_pp,
							},
						},
					},
				},
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
					setOpen(false);
					setHit("order submit");
				}
			})
			.catch(err => {
				if (err?.response?.data?.access === false) {
					dispatch(removeUser());
					localStorage.removeItem("token_");
				}
				console.log(err.message, "pending modal");
				setLoading(false);
			});
	};

	return (
		<>
			<Modal isOpen={open} onClose={() => setOpen(false)} size={"lg"}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<h3 className='text-sm'>
							{" "}
							{email} | Order No: {orderNo || "NaN"}
						</h3>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form onSubmit={handleSubmit}>
							<div className='border shadow my-5 rounded-lg'>
								<TableContainer>
									<Table variant='simple' size={"sm"}>
										<Thead>
											<Tr>
												<Th>Product ID</Th>
												<Th>Size</Th>
												<Th>Quantity</Th>
												<Th>Price</Th>
												<Th>Total</Th>
											</Tr>
										</Thead>
										<Tbody>
											{orders?.order.map((product, index) => (
												<Tr key={index}>
													<Td>{product.product_Id}</Td>
													<Td textTransform={"uppercase"}>{product.size}</Td>
													<Td textAlign={"center"}>{product.quantity}</Td>
													<Td>{product.price}</Td>
													<Td fontWeight={"bold"}>
														{product.price * product.quantity}
													</Td>
												</Tr>
											))}
										</Tbody>
									</Table>
								</TableContainer>
							</div>

							<div>
								<label htmlFor='name'>Receipt:</label>
								<Input
									variant='filled'
									type='text'
									id='name'
									name='name'
									placeholder='Enter delivery receipt'
									value={receipt}
									onChange={e => setReceipt(e.target.value)}
									// {...register("name", { required: true })}
								/>
								<br />
							</div>

							<div className='my-3 flex justify-end'>
								<Button
									isLoading={loading ? true : false}
									disabled={loading ? true : false}
									type='submit'
									colorScheme='green'
									size={"sm"}
								>
									Confirm Order
								</Button>
							</div>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default PendingModal;
