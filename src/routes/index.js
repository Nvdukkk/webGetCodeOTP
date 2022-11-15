import { useRoutes } from "react-router-dom";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Home from "../pages/Home";
import Billing from "../pages/Billing";
import Dashboard from "../pages/Dashboard";
import Request from "../pages/Request";
import History from "../pages/History";
import Profile from "../pages/Profile";
import Password from "../pages/Password";
import Login from "../pages/Login";
import Register from "../pages/Register";

//Public routes
const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/Dashboard", element: <Dashboard /> },
  { path: "/Billing", element: <Billing /> },
  { path: "/Request", element: <Request /> },
  { path: "/History", element: <History /> },
  { path: "/Profile", element: <Profile /> },
  { path: "/Password", element: <Password /> },
];

const routes = [
  { path: "/Login", element: <Login /> },
  { path: "/Register", element: <Register /> },
  { path: "/", element: <DefaultLayout />, children: publicRoutes },
];

const AppRoutes = () => useRoutes(routes);

export { publicRoutes, AppRoutes };
