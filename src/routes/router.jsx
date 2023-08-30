import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Dashboard from "../layouts/Dashboard";
import DashboardHome from "../pages/DashboardHome";
import Profile from "../pages/Profile";
import CreateProducts from "../components/CreateProducts";
import Login from "../pages/Login";
import DProducts from "../pages/DProducts";
import Controller from "../pages/Controller";
import EditProducts from "../pages/EditProducts";

import PrivateRoute from "./PrivateRoute";
import Pending from "../pages/orders/Pending";
import OnWay from "../pages/orders/OnWay";
import Completed from "../pages/orders/Completed";
import Rejected from "../pages/orders/Rejected";
import History from "./../pages/History";
import Status from "../pages/Status";
import Flash from "../pages/Flash";

export const router = createBrowserRouter([
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		children: [
			{ path: "/dashboard", element: <DashboardHome /> },
			{ path: "/dashboard/controller", element: <Controller /> },
			{ path: "/dashboard/profile", element: <Profile /> },
			{ path: "/dashboard/create", element: <CreateProducts /> },
			{ path: "/dashboard/:products", element: <DProducts /> },
			{ path: "/dashboard/product/:edit", element: <EditProducts /> },
			{ path: "/dashboard/order/pending", element: <Pending /> },
			{ path: "/dashboard/order/on-way", element: <OnWay /> },
			{ path: "/dashboard/order/completed", element: <Completed /> },
			{ path: "/dashboard/order/rejected", element: <Rejected /> },
			{ path: "/dashboard/order/history", element: <History /> },
			{ path: "/dashboard/order/status", element: <Status /> },
			{ path: "/dashboard/order/flash", element: <Flash /> },
		],
	},
	{ path: "/dashboard/login", element: <Login /> },
	{
		path: "*",
		element: <Error />,
	},
]);
