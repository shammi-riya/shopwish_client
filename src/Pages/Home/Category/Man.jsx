
import { useDataApi } from "../../../Api/useDataApi";
import AliceCarousel from "react-alice-carousel";
import Button from "../../../Component/Button";
import Loader from "../../../Component/Loader";
import ProductsCard from "../../../Component/ProductsCard";


const Man = () => {

    const [data, isLoading] = useDataApi();

    if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center"><Loader></Loader></div>;
    }

    const menData = data.filter(singledata => singledata.category == "Men's Pants")

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };




    const productsElemets = menData.map(product => <>
      <ProductsCard
      key={product._id}
      product={product}
      >
      </ProductsCard>
    </>)


    return (
        <div className="container my-5 ">
            <Button>Men</Button>
            <AliceCarousel
                mouseTracking
                items={productsElemets}
                responsive={responsive}
                controlsStrategy="alternate"
            />

        </div>

    );
};

export default Man;