import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import { Button } from "@chakra-ui/react";
import CreateCategoryModal from "./CreateCategoryModal";
import { useEffect } from "react";
import axios from "axios";

const CategoryList = () => {
	const [isOpen, setIsOpen] = useState(false);
	const onOpen = () => setIsOpen(true);
	const onClose = () => setIsOpen(false);
	const [imgs, setImgs] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/product/category`)
			.then(res => {
				setImgs(res.data);
				console.log(res.data);
			})
			.catch(err => {
				console.log(err.message);
			});
	}, []);

	return (
		<>
			<div className='flex items-center justify-end'>
				<Button onClick={() => onOpen()} size={"sm"} colorScheme='purple'>
					Create Category
				</Button>
			</div>
			<br />
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
				{imgs?.map(img => (
					<CategoryCard key={img} data={img} />
				))}
				{imgs.length < 1 && <CategoryCard />}
			</div>
			<CreateCategoryModal
				onClose={onClose}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
		</>
	);
};

export default CategoryList;
