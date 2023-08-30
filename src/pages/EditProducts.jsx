import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Spinner,
	Switch,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { format } from "date-fns";
import CreateDesc from "./../components/CreateDesc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GetSpecificProduct } from "../api/products";
import { removeUser } from "../toolkit/UserSlice";

const EditProducts = () => {
	const { edit } = useParams();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	// const { products, isLoading: productLoading } = useSelector(
	// 	state => state.products,
	// );
	const { specification } = useSelector(state => state.categorySpec);

	const [findProduct, setFindProduct] = useState({});
	const [images, setImages] = useState(null);
	const [imageUrl, setImageUrl] = useState("");
	const toast = useToast();
	const [isLoading, setIsLoading] = useState(false);
	const [cate, setCate] = useState(findProduct?.category);
	const [desc, setDesc] = useState(findProduct?.spec);
	const [fetchingLoading, setFetchingLoading] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isFlashSaleOn, setIsFlashSaleOn] = useState(false);


	useEffect(() => {
		setDesc(null);
	}, []);

	useEffect(() => {
		// const find = products.find(product => product?.product_Id === edit);
		setFetchingLoading(true);
		const fetch = async () => {
			try {
				const data = await GetSpecificProduct(edit);
				if (data) {
					setCate(data?.category);
					setFindProduct(data);
					setImageUrl(data?.imageUrl);
					setFetchingLoading(false);
					if (data?.flash) {
						setIsFlashSaleOn(data?.flash);
					}
				}

				if (data.access === false) {
					dispatch(removeUser());
					localStorage.removeItem("token_");
				}
			} catch (error) {
				console.error("Error in useEffect:", error);
			} finally {
				setFetchingLoading(false);
			}
		};
		fetch();

		// setFindProduct(find);
		// setCate(find?.category);

		// this was has in use state
		// setImageUrl(findProduct?.imageUrl);
		if (cate?.length > 1) {
			setDesc(findProduct?.spec || specification[cate]);
		}
	}, [edit, dispatch]);

	const handleSpec = spc => {
		setCate(spc);
		setDesc(null);
		const timeoutId = setTimeout(() => {
			setDesc(specification[spc]);
		}, 1500);

		return () => {
			clearTimeout(timeoutId);
		};
	};

	const imageFunc = async () => {
		const imageUrlLink = [];
		setIsLoading(true);
		if (images) {
			const url =
				"https://api.imgbb.com/1/upload?key=6226ca30d95b139a79184223cfbc266a";

			for (const imageUrl of images) {
				const formData = new FormData();
				formData.append("image", imageUrl);

				await axios
					.post(url, formData)
					.then(res => {
						setIsLoading(false);
						imageUrlLink.push(res.data.data.url);
						console.log(res.data.data.url);
					})
					.catch(err => {
						toast({
							title: "Image Upload Field",
							description: "Please select jpg, jpeg, & png format image.",
							status: "error",
							position: "bottom-right",
							duration: 5000,
							isClosable: true,
						});
						setIsLoading(false);
						console.log(err.message);
					});
			}
			setImageUrl([...imageUrl, ...imageUrlLink]);
			setImages(null);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		imageFunc();
	}, [images]);

	const onSubmit = async data => {
		setIsLoading(true);
		const fns_PP = format(new Date(), "PP");
		const fns_P = format(new Date(), "P");
		const fns_pp = format(new Date(), "pp");

		const create = {
			...data,
			sizes: data.sizes.split(","),
			discount: parseInt(data.discount),
			price: parseInt(data.price),
			stock: parseInt(data.stock),
			imageUrl,
			category: cate,
			spec: desc || findProduct.spec || specification[findProduct?.category],
			issueDate: findProduct?.issueDate,
			product_Id: findProduct?.product_Id,
			flash: isFlashSaleOn,
			updateDate: {
				date: new Date(),
				fns: {
					fns_PP,
					fns_P,
					fns_pp,
				},
			},
		};

		// console.log(create, "create", findProduct);

		if (imageUrl?.length > 0) {
			await axios
				.put(
					`${process.env.REACT_APP_SERVER_URL}/admin/product/update/${findProduct?._id}`,
					create,
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
					toast({
						title: "Product created.",
						description: "We've created your product for you.",
						status: "success",
						position: "bottom-right",
						duration: 5000,
						isClosable: true,
					});
					setIsLoading(false);
					navigate(`/dashboard/${findProduct?.category}`);
				})
				.catch(err => {
					setIsLoading(false);
					console.log(err);
				});
		} else {
			setIsLoading(false);
			toast({
				title: "Image Upload Field",
				description: "Please select jpg, jpeg, & png format image.",
				status: "error",
				position: "bottom-right",
				duration: 5000,
				isClosable: true,
			});
		}
	};

	// console.log(findProduct.name)

	if (fetchingLoading && findProduct?.name) {
		return (
			<div className='fixed top-0 left-[150px] h-[100vh] w-[100vw] flex items-center justify-center bg-slate-100'>
				<Spinner />
			</div>
		);
	}

	return (
		<div className='m-10'>
			<div>
				<h1 className='text-lg font-bold mb-5'>Add Product</h1>
				<div className='col-span-2 flex items-center gap-3'>
					{imageUrl &&
						imageUrl?.map((img, i) => (
							<div key={i} className='relative'>
								<img
									className='h-[200px] w-[250px] object-cover rounded-lg'
									src={img}
									alt=''
								/>
								<span
									onClick={() => {
										let filter = imageUrl?.filter(image => image !== img);
										setImageUrl(filter);
									}}
									className=' text-white flex w-[30px] h-[30px] cursor-pointer items-center justify-center bg-green-500 rounded-full text-xl absolute top-0 left-0'
								>
									x
								</span>
							</div>
						))}
				</div>

				<div className='w-[150px] mt-5'>
					<label
						htmlFor='image'
						className='bg-purple-600 text-white px-4 py-1 rounded-md cursor-pointer flex mt-auto'
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

				<div className='col-span-2'>
					{desc && <CreateDesc desc={desc} setDesc={setDesc} />}
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					id='shirt-form'
					className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5'
				>
					<div>
						<label htmlFor='name'>Name:</label>
						<Input
							variant='filled'
							type='text'
							id='name'
							name='name'
							defaultValue={findProduct.name}
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
							defaultValue={findProduct?.brand}
							{...register("brand", { required: true })}
						/>
						<br />
					</div>

					<div>
						<label htmlFor='category'>Category:</label>
						<div className='flex items-center gap-2'>
							<Button
								size={"sm"}
								colorScheme={`${cate === "shirt" ? "teal" : "gray"}`}
								onClick={() => handleSpec("shirt")}
							>
								Shirt
							</Button>
							<Button
								size={"sm"}
								colorScheme={`${cate === "t-shirt" ? "teal" : "gray"}`}
								onClick={() => handleSpec("t-shirt")}
							>
								T-Shirt
							</Button>
							<Button
								size={"sm"}
								colorScheme={`${cate === "polo-shirt" ? "teal" : "gray"}`}
								onClick={() => handleSpec("polo-shirt")}
							>
								Polo-Shirt
							</Button>
							<Button
								size={"sm"}
								colorScheme={`${cate === "panjabi" ? "teal" : "gray"}`}
								onClick={() => handleSpec("panjabi")}
							>
								Panjabi
							</Button>
							<Button
								size={"sm"}
								colorScheme={`${cate === "pajama" ? "teal" : "gray"}`}
								onClick={() => handleSpec("pajama")}
							>
								Pajama
							</Button>
						</div>
					</div>

					<div>
						<label htmlFor='color'>Color:</label>
						<Input
							variant='filled'
							type='text'
							id='color'
							defaultValue={findProduct?.color}
							name='color'
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
							defaultValue={findProduct?.sizes}
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
							defaultValue={findProduct?.price}
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
							defaultValue={findProduct?.discount}
							{...register("discount", { required: true })}
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
							defaultValue={findProduct?.stock}
							{...register("stock", { required: true })}
						/>
						<br />
					</div>
					<div>
						<label htmlFor='tags'>Tags:</label>
						<Input
							variant='filled'
							type='text'
							id='tags'
							name='tags'
							defaultValue={findProduct?.tags}
							placeholder="Enter tags separated by commas (e.g., men's fashion, cotton shirt, formal wear)"
							{...register("tags", { required: true })}
						/>
						<br />
					</div>

					<div className='flex items-center justify-center'>
						<FormControl display='flex' alignItems='center'>
							<FormLabel htmlFor='email-alerts' mb='0'>
								Flash Sale is {isFlashSaleOn ? "on" : "off"}
							</FormLabel>
							<Switch
								id='flash-sale'
								isChecked={isFlashSaleOn}
								onChange={() => setIsFlashSaleOn(!isFlashSaleOn)}
							/>
						</FormControl>
						<br />
					</div>

					<Button className='col-span-2' type='submit' colorScheme='green'>
						{isLoading ? (
							<>
								<Spinner /> &nbsp; Loading..
							</>
						) : (
							"Add Product"
						)}
					</Button>
				</form>
			</div>
		</div>
	);
};

export default EditProducts;
