import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const handleToLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        signIn(email,password)
        .then(result =>{
            console.log(result.user);

            {
                navigate(location?.state ? location.state : "/")
            }

        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <NavBar></NavBar>
            <form onSubmit={handleToLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <button className="btn btn-primary">Login</button>
                <div className="form-control mt-6">
                    <Link to="/register">New here on this website ? <button className="btn btn-primary">Register</button></Link>
                </div>
            </form>
        </div>
    );
};

export default Login;