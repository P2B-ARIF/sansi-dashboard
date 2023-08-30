import React from "react";
import { Button, Th, Thead } from "@chakra-ui/react";
import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import ReCharts from "./../components/ReCharts";
import PieCharts from "./../components/PieCharts";
import { Link } from "react-router-dom";
import OrderStats from "../components/stats/OrderStats";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { GetFetchLength } from "../api/stats";
import { removeUser } from "../toolkit/UserSlice";
import { ProductStats } from "../components/stats/ProductStats";

const DashboardHome = () => {
	const dispatch = useDispatch();
	const [oLoading, setOLoading] = useState(null);
	const [oLength, setOLength] = useState([]);
	const [pLoading, setPLoading] = useState(null);
	const [pLength, setPLength] = useState([]);

	useEffect(() => {
		setOLoading(true);
		setPLoading(true);
		const fetch = async () => {
			try {
				const OLength = await GetFetchLength("orderLength");
				const PLength = await GetFetchLength("productsLength");

				if (OLength.pendingOrder) {
					setOLength(OLength);
					setOLoading(false);
				}
				if (PLength.shirt) {
					setPLength(PLength);
					setPLoading(false);
				}

				if (OLength.access === false) {
					dispatch(removeUser());
					localStorage.removeItem("token_");
				}
			} catch (error) {
				console.error("Error in useEffect:", error);
			} finally {
				setOLoading(false);
				setPLoading(false);
			}
		};
		fetch();
	}, [dispatch]);

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
						<Button size={{ base: "sm", md: "md" }} colorScheme='teal'>
							Create New Product
						</Button>
					</Link>
				</div>
				<div className='relative left-0 top-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-5'>
					{/* product stat product length of every category */}
					<ProductStats pLength={pLength} pLoading={pLoading} />

					{/* order stat pending onWay rejected and delivered */}
					<OrderStats oLength={oLength} oLoading={oLoading} />
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
					<PieCharts pLength={pLength} />
				</div>
			</div>
			<div className='mx-2 md:mx-0 m-10 p-5 border border-blue-400 rounded-lg'>
				<ReCharts />
			</div>
		</div>
	);
};

export default DashboardHome;
