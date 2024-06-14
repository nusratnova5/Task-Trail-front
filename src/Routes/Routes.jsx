import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Components/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Components/Dashboard/Dashboard";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import AddTask from "../Components/AddTask/AddTask";
import Task from "../Components/Test/Task";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/register',
        element: <Register/>,
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/',
        element: <Mainlayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            }
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><DashboardLayout/></PrivateRoute> ,
        children: [
            {
                path: '',
                element: <Dashboard/>,
            },
            {
                path: 'add-task',
                element: <AddTask/>,
            },
            {
                path: 'task',
                element: <Task />,
            },
        ]
    }
]);