import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import { Button, useToast } from "@chakra-ui/react";
import CreateCategoryModal from "./CreateCategoryModal";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUser } from "../toolkit/UserSlice";
import Skeleton from "./Skeleton";

const CategoryList = () => {
	const [isOpen, setIsOpen] = useState(false);
	const onOpen = () => setIsOpen(true);
	const onClose = () => setIsOpen(false);
	const [categoryLists, setCategoryLists] = useState([]);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const toast = useToast();
	const [hit, setHit] = useState("");

	useEffect(() => {
		setLoading(true);
		const fetch = async () => {
			await axios
				.get(`${process.env.REACT_APP_SERVER_URL}/admin/category`, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${JSON.parse(
							localStorage.getItem("token_"),
						)}`,
					},
				})
				.then(res => {
					setCategoryLists(res.data);
					// console.log(res.data, "categoryList");
					setLoading(false);
				})
				.catch(err => {
					if (err.response.data.access === false) {
						dispatch(removeUser());
						localStorage.removeItem("token_");
					}
					console.log(err.message, "category");
					setLoading(false);
				});
		};
		fetch();
	}, [dispatch, hit]);

	const handleDelete = async id => {
		await axios
			.delete(
				`${process.env.REACT_APP_SERVER_URL}/admin/category/delete?id=${id}`,
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
				if (res.data.acknowledged) {
					setCategoryLists(categoryLists.filter(c => c._id !== id));
					toast({
						title: "Category",
						description: "Successfully Category card delete",
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
				console.log(err.message);
			});
	};

	return (
		<section className='p-10 rounded-lg border shadow-lg overflow-hidden'>
			<div className='flex items-center justify-between'>
				<h3 className='text-xl font-bold text-slate-600'>Category</h3>
				<Button onClick={() => onOpen()} size={"sm"} colorScheme='green'>
					Create Category
				</Button>
			</div>
			<br />
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
				{categoryLists?.map((card, index) => (
					<CategoryCard key={index} data={card} handleDelete={handleDelete} />
				))}
			</div>
			{loading && <Skeleton noOfLines={4} />}
			{!loading && categoryLists.length === 0 && (
				<h4 className='flex items-center justify-center h-[100px] text-center font-bold text-slate-700'>
					Category Empty
				</h4>
			)}
			<CreateCategoryModal
				setHit={setHit}
				onClose={onClose}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
		</section>
	);
};

export default CategoryList;
