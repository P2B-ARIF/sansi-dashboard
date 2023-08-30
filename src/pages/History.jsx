import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetHistory } from "../api/orders";
import { removeUser } from "./../toolkit/UserSlice";
import HistoryTable from "../components/order/HistoryTable";
import Skeleton from "../components/Skeleton";

const History = () => {
	const [loading, setLoading] = useState(false);
	const [histories, setHistories] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		setLoading(true);

		const fetch = async () => {
			try {
				const data = await GetHistory();
				if (data) {
					setHistories(data);
					setLoading(false);
				}

				if (data.access === false) {
					dispatch(removeUser());
					localStorage.removeItem("token_");
				}
			} catch (error) {
				console.error("Error in useEffect:", error);
			} finally {
				setLoading(false);
			}
		};
		fetch();
	}, [dispatch]);

	return (
		<div className='m-5 border rounded-lg overflow-hidden'>
			<h3 className='text-xl font-bold text-slate-700 py-5 ml-5'>
				History Table
			</h3>

			<TableContainer>
				<Table variant='simple' size='sm'>
					<Thead>
						<Tr>
							<Th>Date</Th>
							<Th>Author</Th>
							<Th>Action For</Th>
							<Th>Status</Th>
						</Tr>
					</Thead>

					<Tbody>
						{!loading &&
							histories?.map((history, index) => (
								<HistoryTable key={index} history={history} />
							))}
					</Tbody>
				</Table>
				{loading && <Skeleton noOfLines={5} />}
			</TableContainer>
		</div>
	);
};

export default History;
