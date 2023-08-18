import React from "react";
import { useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Select,
	Button,
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";
import { useEffect } from "react";
import axios from "axios";

const CreateCategoryModal = ({ isOpen, onClose }) => {
	const [images, setImages] = useState(null);
	const [imageUrl, setImageUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [category, setCategory] = useState(null);

	useEffect(() => {
		if (images) {
			setIsLoading(true);
			const img = new FormData();
			img.append("image", images);
			axios
				.post(
					"https://api.imgbb.com/1/upload?key=6226ca30d95b139a79184223cfbc266a",
					img,
				)
				.then(res => {
					setIsLoading(false);
					setImageUrl(res.data.data.url);
				})
				.catch(err => {
					setIsLoading(false);
					console.log(err.message);
				});
		}
	}, [images]);

	const handleSubmit = async () => {
		const data = {
			imageUrl,
			category,
		};
		await axios
			.post(`${process.env.REACT_APP_SERVER_URL}/product/create_category`, data)
			.then(res => {
				onClose();
				setIsLoading(false);
				setImageUrl("");
				setCategory(null);
				console.log(res.data);
			})
			.catch(err => {
				onClose();
				setIsLoading(false);
				console.log(err.message);
			});
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add Category</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<div className='h-[200px] w-full overflow-hidden rounded-md'>
							<img
								src={`${
									imageUrl
										? imageUrl
										: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
								}`}
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='grid grid-cols-2 gap-3 my-3'>
							<Select
								onChange={e => setCategory(e.target.value)}
								borderColor={"purple.500"}
								focusBorderColor={"purple.600"}
								borderRadius={"0.5rem"}
								color={"purple.700"}
								variant='filled'
								size={"sm"}
								placeholder='Select option'
								required
							>
								<option value='shirt'>Shirt</option>
								<option value='t-shirt'>T-Shirt</option>
								<option value='polo-shirt'>Polo-Shirt</option>
								<option value='panjabi'>Panjabi</option>
								<option value='pajama'>Pajama</option>
							</Select>

							<div>
								<label
									htmlFor='image'
									className='bg-purple-600 text-white px-3 py-1 text-[15px] rounded-md cursor-pointer flex gap-2 items-center justify-center mt-auto'
								>
									<AiFillCamera /> Upload Images
								</label>
								<input
									type='file'
									id='image'
									name='image'
									accept='.jpg,.jpeg,.png'
									className='hidden'
									onChange={e => setImages(e.target.files[0])}
								/>
							</div>
						</div>
					</ModalBody>

					<ModalFooter>
						<Button
							disabled={isLoading ? true : false}
							onClick={handleSubmit}
							colorScheme='teal'
						>
							{isLoading ? "Loading..." : "Saves"}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CreateCategoryModal;
