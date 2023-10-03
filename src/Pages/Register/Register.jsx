import { Link } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleToRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <NavBar></NavBar>
            <form onSubmit={handleToRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">name</span>
                    </label>
                    <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <button className="btn btn-primary">Register</button>
                <div className="form-control mt-6">
                    <Link to="/login">Already have an account ?<button className="btn btn-primary">Login</button></Link>
                </div>
            </form>
        </div>
    );
};

export default Register;