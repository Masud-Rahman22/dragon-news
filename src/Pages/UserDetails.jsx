import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightsideNav from "../Shared/RightsideNav/RightsideNav";
import NavBar from "../Shared/NavBar/NavBar";


const UserDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid grid-cols-4 mt-20">
                <div className="col-span-3">
                    <h1 className="text-2xl font-bold">this is details</h1>
                    <p>{id}</p>
                </div>
                <div>
                    <RightsideNav></RightsideNav>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;