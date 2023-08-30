import React, { useState } from "react";
import SideDrawer from "../components/SideDrawer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { removeUser } from "../toolkit/UserSlice";

const Dashboard = () => {
	const [toggle, setToggle] = useState(false);
	const { user, loading } = useSelector(state => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		if (user?.access === false && loading === false) {
			dispatch(removeUser());
		}
	}, [user, dispatch, loading]);

	return (
		<div className='flex relative overflow-hidden'>
			<div
				className={`lg:min-w-[320px] lg:static ${
					toggle
						? "w-[320px] duration-500"
						: "w-[0px] overflow-hidden duration-500"
				} absolute left-0 top-0 overflow-hidden transform z-50`}
			>
				<SideDrawer toggle={toggle} setToggle={setToggle} />
			</div>
			<div className='w-full'>
				<Navbar toggle={toggle} setToggle={setToggle} />
				{/* <DashboardHome /> */}
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
