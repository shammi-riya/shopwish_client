
import Bannar from "../Bannar/Bannar";
import Blog from "../Blog/Blog";
import Electonics from "../Category/Electonics";
import Man from "../Category/Man";
import Women from "../Category/Women";
import ProductsSponsor from "../ProductsSponsor";
import Offer from "./Offer/Offer";




const Home = () => {
    return (
        <div>

         <Bannar></Bannar>
         <Offer></Offer>
         <Women></Women>
         <Man></Man>
         <Electonics></Electonics>
         <Blog></Blog>
         <ProductsSponsor></ProductsSponsor>
        </div>
    );
};

export default Home;