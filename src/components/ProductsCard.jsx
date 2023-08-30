import { Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../toolkit/UserSlice";

const ProductsCard = ({ product, setHit }) => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const toast = useToast();
	const dispatch = useDispatch();

	const handleDelete = async id => {
		setLoading(true);
		const url = `${process.env.REACT_APP_SERVER_URL}/admin/delete/${id}`;
		await axios
			.delete(url, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${JSON.parse(localStorage.getItem("token_"))}`,
				},
			})
			.then(res => {
				if (res.data.acknowledged) {
					setHit("delete successfully");
					setLoading(false);

					toast({
						title: "Product Delete",
						description: "Successfully selected product delete.",
						status: "success",
						position: "bottom-right",
						duration: 5000,
						isClosable: true,
					});
				}
			})
			.catch(err => {
				if (err.response.data.access === false) {
					dispatch(removeUser());
					localStorage.removeItem("token_");
				}
				setLoading(false);
			});
	};

	return (
		<>
			<div className='relative flex gap-2 p-2 rounded-lg border shadow-sm hover:shadow-md'>
				<div className='flex-1 h-[150px] overflow-hidden '>
					<img
						src={
							product?.imageUrl.length > 0
								? product?.imageUrl[0]
								: product?.imageUrl
						}
						alt=''
						className='h-full w-full object-cover object-center rounded-lg transition-transform duration-300 hover:scale-105'
					/>
				</div>

				<div className='flex-1 text-sm mt-3'>
					<h3 className='font-bold'>{product?.name}</h3>
					<h3 className='font-bold text-slate-700'>
						ID: {product?.product_Id}
					</h3>
					<h4>Brand: {product?.brand}</h4>
					<h4>Stock: {product?.stock}</h4>
					<h4>
						Sizes:{" "}
						{product?.sizes.map(size => (
							<span className='uppercase mr-1' key={size}>
								{size.trim()},
							</span>
						))}
					</h4>
					{/* <h4>Discount: {product?.discount}</h4> */}
				</div>
				<div className='flex flex-col'>
					<span className='my-1 flex items-center line-through justify-center bg-slate-500 rounded-full text-white px-2 py-1 text-sm'>
						<CiDiscount1 />
						{product?.discount}
					</span>
					<span className='flex my-1 items-center justify-center bg-green-500 rounded-full text-white px-2 py-1 text-sm'>
						&#2547; {product?.price}
					</span>
					<span className='flex my-1 justify-end'>
						<AiFillEdit
							aria-disabled={loading ? true : false}
							onClick={() =>
								navigate(`/dashboard/product/${product.product_Id}`)
							}
							className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-teal-500 rounded-full text-white px-2 py-2 text-xl'
						/>
					</span>
					<span className='flex my-1 justify-end'>
						{loading ? (
							<Spinner size={"md"} mr={"4px"} />
						) : (
							<MdDeleteForever
								onClick={() => handleDelete(product.product_Id)}
								className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-red-500 rounded-full text-white px-2 py-2 text-xl'
							/>
						)}
					</span>
				</div>
				{product?.flash && (
					<span className='bg-red-500 text-white px-2 absolute top-3 left-3 text-sm'>
						Sale
					</span>
				)}
			</div>
		</>
	);
};

export default ProductsCard;
