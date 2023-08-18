import React from "react";
import {
	MdHistoryToggleOff,
	MdOutlineClose,
	MdOutlineDashboard,
	MdOutlineSettingsSuggest,
	MdPendingActions,
} from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { BiStats } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { PiRoadHorizonLight } from "react-icons/pi";

const SideDrawer = ({ toggle, setToggle }) => {
	const { products } = useParams();

	return (
		<div className={`w-full  min-h-[100vh] h-full bg-[#212B36] text-slate-200 px-8`}>
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
				<li>
					<MdPendingActions />
					<Link to={"/dashboard/order/pending"}>Pending</Link>
				</li>
				<li>
					<PiRoadHorizonLight />
					<Link to={"/dashboard/order/on-way"}>On Way</Link>
				</li>
				<li>
					<BsBagCheck />
					<Link to={"/dashboard/order/completed"}>Completed</Link>
				</li>
			</ul>

			<h5 className='font-bold text-slate-600 py-4 tracking-widest uppercase'>
				Others
			</h5>
			<ul className='dashboard_nav_menu'>
				<li>
					<MdHistoryToggleOff />
					<Link to={"/dashboard/order/history"}>History</Link>
				</li>
				<li>
					<BiStats />
					<Link to={"/dashboard/added/history"}>Add Status</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawer;
