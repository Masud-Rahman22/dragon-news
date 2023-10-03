
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UserDetails from "../Pages/UserDetails";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";


const Router =  createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: "/news/:id",
                element : <PrivateRoute><UserDetails></UserDetails></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default Router;