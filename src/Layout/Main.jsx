import Footer from "../Shared/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Nevbar from "../Shared/Nevbar";

// import Swiper styles
import 'swiper/css';
import CatogoryNav from "../Shared/CatogoryNav";


const Main = () => {
    // style={{background:"#2c2c2c"}}
    return (
        < div className="">
            <Header></Header>
            <Nevbar></Nevbar>
            <CatogoryNav></CatogoryNav>
           
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;