import React from "react";
import { CiViewTimeline } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import Skeleton from "../Skeleton";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiFileDamageLine } from "react-icons/ri";

const OrderStats = ({ oLength, oLoading }) => {
	const { pendingOrder, onWay, cancelled, delivered } = oLength;

	return (
		<>
			<div
				className={`${
					!oLoading && "p-5"
				} rounded-lg bg-white border border-slate-300 shadow-md relative`}
			>
				{oLoading ? (
					<Skeleton noOfLines={3} spacing={"2"} />
				) : (
					<>
						<div className='flex justify-between items-center text-xl'>
							<h3 className='text-2xl font-bold text-slate-700'>Pending</h3>
							<CiViewTimeline
								size={50}
								className='absolute top-2 right-2 text-yellow-500'
							/>
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>
							{pendingOrder?.length}
						</span>
						<h3 className='text-slate-600'>Today Pending 2</h3>
					</>
				)}
			</div>

			<div
				className={`${
					!oLoading && "p-5"
				} rounded-lg bg-white border border-slate-300 shadow-md relative`}
			>
				{oLoading ? (
					<Skeleton noOfLines={3} spacing={"2"} />
				) : (
					<>
						<div className='flex justify-between items-center text-xl'>
							<h3 className='text-2xl font-bold text-slate-700'>On Way</h3>
							<TbTruckDelivery
								size={50}
								className='absolute top-2 right-2 text-teal-500'
							/>
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>
							{onWay?.length}
						</span>
					</>
				)}
			</div>

			<div
				className={`${
					!oLoading && "p-5"
				} rounded-lg bg-white border border-slate-300 shadow-md relative`}
			>
				{oLoading ? (
					<Skeleton noOfLines={3} spacing={"2"} />
				) : (
					<>
						<div className='flex justify-between items-center text-xl'>
							<h3 className='text-2xl font-bold text-slate-700'>Total Delivered</h3>
							<AiOutlineFileDone
								size={50}
								className='absolute top-2 right-2 text-green-500'
							/>
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>
							{delivered?.length}
						</span>
						<h3 className='text-slate-600'>Today Completed 2</h3>
					</>
				)}
			</div>
			<div
				className={`${
					!oLoading && "p-5"
				} rounded-lg bg-white border border-slate-300 shadow-md relative`}
			>
				{oLoading ? (
					<Skeleton noOfLines={3} spacing={"2"} />
				) : (
					<>
						<div className='flex justify-between items-center text-xl'>
							<h3 className='text-2xl font-bold text-slate-700'>Total Cancel</h3>
							<RiFileDamageLine
								size={50}
								className='absolute top-2 right-2 text-yellow-500'
							/>
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>
							{cancelled?.length}
						</span>
						<h3 className='text-slate-600'>Today Cancelled 2</h3>
					</>
				)}
			</div>
		</>
	);
};

export default OrderStats;
