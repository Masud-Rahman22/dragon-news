import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if(loading){
        return <span className="loading loading-spinner loading-lg flex items-center justify-center"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login">Login</Navigate>
};

export default PrivateRoute;