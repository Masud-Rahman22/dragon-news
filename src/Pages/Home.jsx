import { useLoaderData } from "react-router-dom";
import BreakingNews from "../Shared/Header/BreakingNews";
import Header from "../Shared/Header/Header";
import LeftsideNav from "../Shared/LeftsideNav/LeftsideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightsideNav from "../Shared/RightsideNav/RightsideNav";
import UserCards from "./UserCards";


const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
            <div>
                <LeftsideNav></LeftsideNav>
            </div>
            <div className="col-span-2">
                {
                    news.map(aNews => <UserCards
                    key = {aNews._id}
                    news = {aNews}
                    ></UserCards>)
                }
            </div>
            <div>
                <RightsideNav></RightsideNav>
            </div>
            </div>
        </div>
    );
};

export default Home;