import { Button } from "@chakra-ui/react";
import React from "react";
import { BsFillTrash2Fill } from "react-icons/bs";

const CategoryCard = ({ data, handleDelete }) => {
	return (
		<div className='rounded-lg relative shadow-md overflow-hidden'>
			<img
				src={`${
					data
						? data?.imageUrl
						: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
				}`}
				alt=''
				className='h-[180px] w-full object-cover'
			/>
			<div className='absolute top-1 right-1 z-10'>
				<Button
					onClick={() => handleDelete(data._id)}
					alignItems={"center"}
					display={"flex"}
					gap={"2px"}
					className='capitalize'
					colorScheme='red'
					size={"xs"}
				>
					<BsFillTrash2Fill size={13} /> Delete
				</Button>
			</div>
			<h4 className='text-center uppercase bg-slate-700 text-slate-200 font-medium py-1'>
				{data?.category}
			</h4>
		</div>
	);
};

export default CategoryCard;
