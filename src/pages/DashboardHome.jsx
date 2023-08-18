import React from "react";
import { Button, Th, Thead } from "@chakra-ui/react";
import { BsBell } from "react-icons/bs";
import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import ReCharts from "./../components/ReCharts";
import PieCharts from "./../components/PieCharts";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const DashboardHome = () => {
	const fns = format(new Date(), "pp");
	console.log(fns, "fns");

	return (
		<div className='pb-20'>
			<div className='bg-[#624BFF] px-5 md:px-10'>
				<div className='flex justify-between pt-14'>
					<div>
						<h1 className='text-lg md:text-xl text-white font-bold'>
							Welcome to your dashboard
						</h1>
						<h4 className='text-slate-100'>Mohammad Arif</h4>
					</div>

					<Link to={"/dashboard/create"}>
						<Button size={{ base: "sm", md: "md" }}>Create New Product</Button>
					</Link>
				</div>
				<div className='relative left-0 top-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-5'>
					<div className='rounded-lg bg-white p-5 border border-slate-300 shadow-md'>
						<div className='flex justify-between items-center text-xl'>
							<h3 className='text-2xl'>Projects</h3>
							<BsBell />
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>18</span>
						<h3 className='text-slate-600'>2 Completed</h3>
					</div>
					<div className='rounded-lg bg-white p-5 border border-slate-300 shadow-md'>
						<div className='flex justify-between items-center text-xl'>
							<h3 className='text-2xl'>Projects</h3>
							<BsBell />
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>18</span>
						<h3 className='text-slate-600'>2 Completed</h3>
					</div>
					<div className='rounded-lg bg-white p-5 border border-slate-300 shadow-md'>
						<div className='flex justify-between items-center text-xl'>
							<h3 className='text-2xl'>Projects</h3>
							<BsBell />
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>18</span>
						<h3 className='text-slate-600'>2 Completed</h3>
					</div>
					<div className='rounded-lg bg-white p-5 border border-slate-300 shadow-md'>
						<div className='flex justify-between items-center text-xl'>
							<h3 className='text-2xl'>Projects</h3>
							<BsBell />
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>18</span>
						<h3 className='text-slate-600'>2 Completed</h3>
					</div>
					<div className='rounded-lg bg-white p-5 border border-slate-300 shadow-md'>
						<div className='flex justify-between items-center text-xl'>
							<h3 className='text-2xl'>Projects</h3>
							<BsBell />
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>18</span>
						<h3 className='text-slate-600'>2 Completed</h3>
					</div>
					<div className='rounded-lg bg-white p-5 border border-slate-300 shadow-md'>
						<div className='flex justify-between items-center text-xl'>
							<h3 className='text-2xl'>Projects</h3>
							<BsBell />
						</div>
						<span className='text-4xl font-bold text-slate-700 flex'>18</span>
						<h3 className='text-slate-600'>2 Completed</h3>
					</div>
				</div>
			</div>
			<br /> <br /> <br /> <br />
			<div className='flex flex-col md:flex-row'>
				<div className='md:w-1/2 bg-slate-50 mx-5 md:mx-0 md:ml-10 border border-blue-400 rounded-lg overflow-hidden'>
					<h1 className='text-md md:text-lg pt-2 md:pt-5 px-3 md:px-6'>
						Products
					</h1>
					<TableContainer>
						<Table variant='simple' size={{ base: "sm", md: "md" }}>
							<Thead>
								<Tr>
									<Th>To convert</Th>
									<Th>into</Th>
									<Th isNumeric>multiply by</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>inches</Td>
									<Td>millimetres (mm)</Td>
									<Td isNumeric>25.4</Td>
								</Tr>
								<Tr>
									<Td>feet</Td>
									<Td>centimetres (cm)</Td>
									<Td isNumeric>30.48</Td>
								</Tr>
								<Tr>
									<Td>yards</Td>
									<Td>metres (m)</Td>
									<Td isNumeric>0.91444</Td>
								</Tr>
							</Tbody>
						</Table>
					</TableContainer>
				</div>

				<div className='md:w-1/3 mx-5'>
					<PieCharts />
				</div>
			</div>
			<div className='mx-2 md:mx-0 m-10 p-5 border border-blue-400 rounded-lg'>
				<ReCharts />
			</div>
		</div>
	);
};

export default DashboardHome;
