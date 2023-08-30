import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Input,
	Select,
	Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "@chakra-ui/react";

const DetailsModal = ({ isOpen, onClose, details }) => {
	// const [disc, setDisc] = useState(panjabi);
	// const [pQuote, setPQuote] = useState(panjabiQuote);
	const [images, setImages] = useState(null);
	const [imageUrl, setImageUrl] = useState([]);
	// const toast = useToast();
	const [isLoading, setIsLoading] = useState(false);
	const { category } = details || {};

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async data => {
		setIsLoading(true);

		const create = {
			product_Id: data.category + Math.floor(Math.random() * 9000),
			...data,
			sizes: data.sizes.split(","),
			discount: parseInt(data.discount),
			price: parseInt(data.price),
			stock: parseInt(data.stock),
			// imageUrl,
		};
	};

	return (
		<Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader className='uppercase'>{details?.product_Id}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<div className='col-span-2 flex items-center gap-3'>
						{details?.imageUrl.map((img, i) => (
							<div key={i} className='relative'>
								<img
									className='h-[200px] w-[250px] object-cover rounded-lg'
									src={img}
									alt=''
								/>
								<span
									onClick={() => {
										let filter = imageUrl.filter(image => image !== img);
										setImageUrl(filter);
									}}
									className=' text-white flex w-[30px] h-[30px] cursor-pointer items-center justify-center bg-green-500 rounded-full text-xl absolute top-0 left-0'
								>
									x
								</span>
							</div>
						))}
					</div>
					<br />

					<div className='inline-block my-3'>
						<label
							htmlFor='image'
							className='bg-purple-600 text-white px-5 py-2 rounded-md cursor-pointer flex mt-auto text-sm'
						>
							Upload Images
						</label>
						<input
							type='file'
							id='image'
							name='image'
							accept='.jpg,.jpeg,.png'
							className='hidden'
							multiple
							onChange={e => setImages(e.target.files)}
						/>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						id='shirt-form'
						className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3'
					>
						<div className='col-span-2 flex flex-col gap-3'>
							<div>
								<label htmlFor='name'>Name:</label>
								<Textarea placeholder='Here is a sample placeholder' />
							</div>
							<div>
								<label htmlFor='name'>Name:</label>
								<Textarea placeholder='Here is a sample placeholder' />
							</div>
							<div>
								<label htmlFor='name'>Name:</label>
								<Textarea placeholder='Here is a sample placeholder' />
							</div>
						</div>

						<div>
							<label htmlFor='name'>Name:</label>
							<Input
								variant='filled'
								type='text'
								id='name'
								name='name'
								defaultValue={details?.name}
								{...register("name", { required: true })}
							/>
							<br />
						</div>

						<div>
							<label htmlFor='brand'>Brand:</label>
							<Input
								variant='filled'
								type='text'
								id='brand'
								name='brand'
								defaultValue={details?.brand}
								{...register("brand", { required: true })}
							/>
							<br />
						</div>

						<div>
							<label htmlFor='category'>Category:</label>
							<Select
								variant='filled'
								id='category'
								name='category'
								placeholder='Select option'
								{...register("category", { required: true })}
							>
								<option selected={category === "shirt"} value='shirt'>
									Shirt
								</option>
								<option selected={category === "t-shirt"} value='t-shirt'>
									T-Shirt
								</option>
								<option selected={category === "polo-shirt"} value='polo-shirt'>
									Polo-Shirt
								</option>
								<option selected={category === "panjabi"} value='panjabi'>
									Panjabi
								</option>
								<option selected={category === "pajama"} value='pajama'>
									Pajama
								</option>
							</Select>
						</div>

						<div>
							<label htmlFor='color'>Color:</label>
							<Input
								variant='filled'
								type='text'
								id='color'
								name='color'
								defaultValue={details?.color}
								{...register("color", { required: true })}
							/>
							<br />
						</div>
						<div>
							<label htmlFor='sizes'>Available Sizes:</label>
							<Input
								variant='filled'
								type='text'
								id='sizes'
								name='sizes'
								defaultValue={details?.sizes}
								placeholder='Enter sizes separated by commas (e.g., S, M, L)'
								{...register("sizes", { required: true })}
							/>
							<br />
						</div>

						<div>
							<label htmlFor='price'>Price:</label>
							<Input
								variant='filled'
								type='number'
								step='0.01'
								id='price'
								name='price'
								defaultValue={details?.price}
								{...register("price", { required: true })}
							/>
							<br />
						</div>

						<div>
							<div className='flex gap-5'>
								<label htmlFor='discount'>Discount:</label>
								<p className='text-red-500'>{errors.discount?.message}</p>
							</div>
							<Input
								variant='filled'
								type='number'
								id='discount'
								name='discount'
								defaultValue={details?.discount}
								{...register("discount", {
									required: "please fill up..! is required",
								})}
								aria-invalid={errors.discount ? "true" : "false"}
							/>
							<br />
						</div>
						<div>
							<label htmlFor='stock'>Stock:</label>
							<Input
								variant='filled'
								type='number'
								id='stock'
								name='stock'
								defaultValue={details?.stock}
								{...register("stock", { required: true })}
							/>
							<br />
						</div>
						<div className='col-span-2'>
							<label htmlFor='tags'>Tags:</label>
							<Input
								variant='filled'
								type='text'
								id='tags'
								name='tags'
								placeholder="Enter tags separated by commas (e.g., men's fashion, cotton shirt, formal wear)"
								defaultValue={details?.tags}
								{...register("tags", { required: true })}
							/>
							<br />
						</div>
					</form>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme='teal' size={"sm"}>
						Save Changes
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default DetailsModal;
