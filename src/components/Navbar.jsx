import React from "react";
import { Avatar, AvatarBadge, Button } from "@chakra-ui/react";
import { AiOutlineBell } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import SearchProduct from "./SearchProduct";
import { useSelector } from "react-redux";

const Navbar = ({ toggle, setToggle }) => {
	const [open, setOpen] = useState(false);
	const { user } = useSelector(state => state.user);
	const navigate = useNavigate();

	return (
		<div className='flex items-center justify-between px-10 bg-slate-100 w-full '>
			<div className='flex gap-10 items-center py-3'>
				<HiMenuAlt2
					onClick={() => setToggle(true)}
					size={30}
					color='blue'
					className='cursor-pointer block lg:hidden'
				/>

				<SearchProduct />
			</div>
			{user ? (
				<div className='relative flex items-center gap-5'>
					<AiOutlineBell size={20} />
					<Avatar
						onMouseOver={() => setOpen(true)}
						onMouseLeave={() => setOpen(false)}
						size='sm'
					>
						<AvatarBadge boxSize='1em' bg='green.500' />
					</Avatar>

					<div
						onMouseOver={() => setOpen(true)}
						onMouseLeave={() => setOpen(false)}
						className={`bg-white p-5 px-8 absolute top-12 right-2 z-10 whitespace-nowrap rounded-md border border-blue-500 shadow-md transition-transform duration-300 ${
							open ? "translate-x-0" : "translate-x-[400px]"
						}`}
					>
						<div>
							<h3 className='text-lg font-bold'>Mohammad Arif</h3>
							<Link
								to={"/dashboard/profile"}
								className='text-slate-700 border-b'
							>
								View my profile
							</Link>
						</div>
						<br />
						<Button
							colorScheme='blue'
							size={"sm"}
							className='flex items-center gap-3'
						>
							<IoMdLogOut size={20} />
							Sign Out
						</Button>
					</div>
				</div>
			) : (
				<Button
					onClick={() => navigate("/dashboard/login")}
					size={"sm"}
					colorScheme='teal'
				>
					Login
				</Button>
			)}
		</div>
	);
};

export default Navbar;
