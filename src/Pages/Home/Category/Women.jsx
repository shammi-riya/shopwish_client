import AliceCarousel from "react-alice-carousel";
import { useDataApi } from "../../../Api/useDataApi";
import 'react-alice-carousel/lib/alice-carousel.css';
import Button from "../../../Component/Button";
import Loader from "../../../Component/Loader";
import ProductsCard from "../../../Component/ProductsCard";



const Women = () => {
    const [data, isLoading] = useDataApi();

    if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center"><Loader></Loader></div>;
    }

    const WomenData = data.filter(singledata => singledata.category == "Women's Shari")

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };


    const productsElemets = WomenData.map(product => <>
        <ProductsCard
            key={product._id}
            product={product}
        >
        </ProductsCard>




    </>)



    return (
        <div className="container my-5 ">
            <div>
                <Button>Women</Button>
            </div>

            <AliceCarousel
                mouseTracking
                items={productsElemets}
                responsive={responsive}
                controlsStrategy="alternate"
            />



        </div>





    );
};

export default Women;