import React from "react";
import {
	MdHistoryToggleOff,
	MdOutlineCancelScheduleSend,
	MdOutlineClose,
	MdOutlineDashboard,
	MdOutlineSettingsSuggest,
	MdPendingActions,
} from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { BiStats } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { PiRoadHorizonLight } from "react-icons/pi";
import { IoFlashOutline } from "react-icons/io5";

const SideDrawer = ({ toggle, setToggle }) => {
	const { products } = useParams();
	const url = window.location.pathname;

	return (
		<div
			className={`w-full  min-h-[100vh] h-full bg-[#212B36] text-slate-200 px-8`}
		>
			<div className='flex justify-between items-center'>
				<h1 className='animate-charcter cursor-pointer uppercase text-2xl font-bold py-4 tracking-widest min-w-[180px]'>
					Sansi
				</h1>

				<MdOutlineClose
					onClick={() => setToggle(false)}
					size={30}
					color='white'
					className='cursor-pointer block lg:hidden'
				/>
			</div>
			{/* <nav>Navigation Links Here</nav> */}
			<Link
				to={"/dashboard"}
				// className='flex items-center gap-3 text-lg cursor-pointer'
				className={`${
					window.location.pathname === "/dashboard"
						? "active_product_link"
						: "inactive_product_link"
				} flex items-center gap-2 py-2 my-1`}
			>
				<MdOutlineDashboard />
				Dashboard
			</Link>
			<Link
				to={"/dashboard/controller"}
				// className='flex items-center gap-3 text-lg cursor-pointer'
				className={`${
					window.location.pathname === "/dashboard/controller"
						? "active_product_link"
						: "inactive_product_link"
				} flex items-center gap-2 py-2`}
			>
				<MdOutlineSettingsSuggest />
				Controller
			</Link>

			<h5 className='font-bold text-slate-600 py-3 tracking-widest uppercase'>
				Products
			</h5>
			<ul className='dashboard_nav_menu'>
				<li
					className={`${
						products === "shirt"
							? "active_product_link"
							: "inactive_product_link"
					}`}
				>
					<Link to={"/dashboard/shirt"}>Shirt</Link>
				</li>
				<li
					className={`${
						products === "t-shirt"
							? "active_product_link"
							: "inactive_product_link"
					}`}
				>
					<Link to={"/dashboard/t-shirt"}>T-Shirt</Link>
				</li>
				<li
					className={`${
						products === "polo-shirt"
							? "active_product_link"
							: "inactive_product_link"
					}`}
				>
					<Link to={"/dashboard/polo-shirt"}>Polo-Shirt</Link>
				</li>
				<li
					className={`${
						products === "panjabi"
							? "active_product_link"
							: "inactive_product_link"
					}`}
				>
					<Link to={"/dashboard/panjabi"}>Panjabi</Link>
				</li>
				<li
					className={`${
						products === "pajama"
							? "active_product_link"
							: "inactive_product_link"
					}`}
				>
					<Link to={"/dashboard/pajama"}>Pajama</Link>
				</li>
			</ul>

			<h5 className='font-bold text-slate-600 py-3 tracking-widest uppercase'>
				Orders
			</h5>
			<ul className='dashboard_nav_menu'>
				<li
					className={`${
						url.endsWith("pending")
							? "active_product_link"
							: "inactive_product_link"
					}`}
				>
					<MdPendingActions />
					<Link to={"/dashboard/order/pending"}>Pending</Link>
				</li>
				<li
					className={`${
						url.endsWith("on-way")
							? "active_product_link"
							: "inactive_product_link"
					}`}
				>
					<PiRoadHorizonLight />
					<Link to={"/dashboard/order/on-way"}>On Way</Link>
				</li>
				<li
					className={`${
						url.endsWith("completed")
							? "active_product_link"
							: "inactive_product_link"
					}`}
				>
					<BsBagCheck />
					<Link to={"/dashboard/order/completed"}>Completed</Link>
				</li>
				<li
					className={`${
						url.endsWith("rejected")
							? "active_product_link"
							: "inactive_product_link"
					}`}
				>
					<MdOutlineCancelScheduleSend />
					<Link to={"/dashboard/order/rejected"}>Rejected</Link>
				</li>
			</ul>

			<h5 className='font-bold text-slate-600 py-4 tracking-widest uppercase'>
				Others
			</h5>
			<ul className='dashboard_nav_menu'>
				<li
					className={`${
						url.endsWith("history")
							? "active_product_link"
							: "inactive_product_link"
					}`}
				>
					<MdHistoryToggleOff />
					<Link to={"/dashboard/order/history"}>History</Link>
				</li>
				<li
					className={`${
						url.endsWith("status")
							? "active_product_link"
							: "inactive_product_link"
					}`}
				>
					<BiStats />
					<Link to={"/dashboard/order/status"}>Add Status</Link>
				</li>
				<li
					className={`${
						url.endsWith("flash")
							? "active_product_link"
							: "inactive_product_link"
					} text-teal-500`}
				>
					<IoFlashOutline />
					<Link to={"/dashboard/order/flash"}>Flash Sale</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawer;
