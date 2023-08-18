import { Button, IconButton } from "@chakra-ui/react";
import React from "react";
import { BsFillTrash2Fill } from "react-icons/bs";

const CategoryCard = ({ data }) => {
	return (
		<div className='rounded-lg bg-slate-200 relative'>
			<img
				src={`${
					data
						? data?.imageUrl
						: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
				}`}
				alt=''
				className='rounded-lg h-[180px] w-full object-cover'
			/>
			<div className='absolute top-2 right-2 z-10'>
				<IconButton
					size={"sm"}
					colorScheme='teal'
					aria-label='Send email'
					icon={<BsFillTrash2Fill />}
				/>
			</div>
			<div className='flex justify-end absolute bottom-1 right-1 z-10'>
				<Button
					// paddingX={"6px"}
					className='capitalize'
					colorScheme='pink'
					size={"sm"}
				>
					{data?.category}
				</Button>
			</div>
		</div>
	);
};

export default CategoryCard;
