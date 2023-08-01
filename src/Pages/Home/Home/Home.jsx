import Bannar from "../Bannar/Bannar";
import Blog from "../Blog/Blog";
import Electonics from "../Category/Electonics";
import Man from "../Category/Man";
import Women from "../Category/Women";



const Home = () => {
    return (
        <div>
         <Bannar></Bannar>
         <Women></Women>
         <Man></Man>
         <Electonics></Electonics>
         <Blog></Blog>
        </div>
    );
};

export default Home;