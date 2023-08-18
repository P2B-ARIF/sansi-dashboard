import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Dashboard from "../layouts/Dashboard";
import DashboardHome from "../pages/DashboardHome";
import Profile from "../pages/Profile";
import CreateProducts from "../components/CreateProducts";
import Login from "../pages/Login";
import DProducts from "../pages/DProducts";
import Order from "../pages/Order";
import Controller from "../pages/Controller";
import EditProducts from "../pages/EditProducts";
import Pending from "../pages/Pending";
import OnWay from "../pages/OnWay";
import Completed from "../pages/Completed";

export const router = createBrowserRouter([
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			{ path: "/dashboard", element: <DashboardHome /> },
			{ path: "/dashboard/controller", element: <Controller /> },
			{ path: "/dashboard/profile", element: <Profile /> },
			{ path: "/dashboard/create", element: <CreateProducts /> },
			{ path: "/dashboard/:products", element: <DProducts /> },
			{ path: "/dashboard/product/:edit", element: <EditProducts /> },
			{
				path: "/dashboard/order/pending",
				element: <Pending title={"pending"} />,
			},
			{
				path: "/dashboard/order/on-way",
				element: <OnWay title={"pending"} />,
			},
			{
				path: "/dashboard/order/completed",
				element: <Completed title={"completed"} />,
			},
		],
	},
	{ path: "/dashboard/login", element: <Login /> },
	{
		path: "*",
		element: <Error />,
	},
]);
