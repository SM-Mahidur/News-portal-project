import DragonNews from "../../DragonNews/DragonNews";
import Footer from "../../Foorter/Footer";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RigthSideNav/RightSideNav";
import LeftSideNav from "../Shared/leftsideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div className="mx-4 my-4 ">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
                    <div className=""> <LeftSideNav></LeftSideNav></div>
                    <div className="md:col-span-2 ">
                        <DragonNews></DragonNews>
                    </div>
                    <div className=""><RightSideNav></RightSideNav></div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;