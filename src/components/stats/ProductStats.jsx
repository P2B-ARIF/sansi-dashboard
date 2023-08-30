import React from "react";
import Skeleton from "../Skeleton";
import panjabiImg from "./../../assets/stats-img/panjabi.png";
import shirtImg from "./../../assets/stats-img/shirt.png";
import t_shirtImg from "./../../assets/stats-img/tshirt.png";
import polo_shirtImg from "./../../assets/stats-img/polo-shirt.png";
import pajamaImg from "./../../assets/stats-img/pajama.png";

export const ProductStats = ({ pLength, pLoading }) => {
	const { shirt, tShirt, poloShirt, panjabi, pajama } = pLength;

	return (
		<>
			<div
				className={`${
					!pLoading && "p-5"
				} rounded-lg bg-white border border-slate-300 shadow-md relative`}
			>
				{pLoading ? (
					<Skeleton noOfLines={3} spacing={"2"} />
				) : (
					<>
						<div className='flex justify-between items-center'>
							<h3 className='text-xl font-bold text-slate-700'>Total Shirt</h3>

							<img src={shirtImg} alt='' className='h-[50px] object-cover' />

							{/* <CiViewTimeline
								size={50}
								className='absolute top-2 right-2 text-yellow-500'
							/> */}
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>
							{shirt}
						</span>
					</>
				)}
			</div>
			<div
				className={`${
					!pLoading && "p-5"
				} rounded-lg bg-white border border-slate-300 shadow-md relative`}
			>
				{pLoading ? (
					<Skeleton noOfLines={3} spacing={"2"} />
				) : (
					<>
						<div className='flex justify-between items-center text-xl'>
							<h3 className='text-xl font-bold text-slate-700'>
								Total T-Shirt
							</h3>
							<img
								src={t_shirtImg}
								alt=''
								className='h-[50px] object-contain'
							/>
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>
							{tShirt}
						</span>
					</>
				)}
			</div>
			<div
				className={`${
					!pLoading && "p-5"
				} rounded-lg bg-white border border-slate-300 shadow-md relative`}
			>
				{pLoading ? (
					<Skeleton noOfLines={3} spacing={"2"} />
				) : (
					<>
						<div className='flex justify-between items-center text-xl'>
							<h3 className='text-xl font-bold text-slate-700'>
								Total Polo-Shirt
							</h3>
							<img
								src={polo_shirtImg}
								alt=''
								className='h-[50px] object-contain'
							/>
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>
							{poloShirt}
						</span>
					</>
				)}
			</div>
			<div
				className={`${
					!pLoading && "p-5"
				} rounded-lg bg-white border border-slate-300 shadow-md relative`}
			>
				{pLoading ? (
					<Skeleton noOfLines={3} spacing={"2"} />
				) : (
					<>
						<div className='flex justify-between items-center text-xl'>
							<h3 className='text-xl font-bold text-slate-700'>
								Total Panjabi
							</h3>
							<img
								src={panjabiImg}
								alt=''
								className='h-[50px] object-contain'
							/>
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>
							{panjabi}
						</span>
					</>
				)}
			</div>
			<div
				className={`${
					!pLoading && "p-5"
				} rounded-lg bg-white border border-slate-300 shadow-md relative`}
			>
				{pLoading ? (
					<Skeleton noOfLines={3} spacing={"2"} />
				) : (
					<>
						<div className='flex justify-between items-center'>
							<h3 className='text-xl font-bold text-slate-700'>Total Pajama</h3>
							<div className='product_Img'>
								<img
									src={pajamaImg}
									alt=''
									className='h-[50px] object-contain'
								/>
							</div>
							{/* <CiViewTimeline
								size={50}
							/> */}
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>
							{pajama}
						</span>
					</>
				)}
			</div>
		</>
	);
};
