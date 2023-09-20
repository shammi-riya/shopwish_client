
import { useDataApi } from "../../../Api/useDataApi";
import AliceCarousel from "react-alice-carousel";
import Button from "../../../Component/Button";
import ProductsCard from "../../../Component/ProductsCard";



const Electonics = () => {
    const [data] = useDataApi();
    const menData = data.filter(singledata => singledata.category == "Earphones")
   
    
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
    </>
    )
    
    return (
        <div className="container my-5 py-2">

            <Button>Electonics</Button>
            <AliceCarousel
                mouseTracking
                items={productsElemets}
                responsive={responsive}
                controlsStrategy="alternate"
            />

        </div>

    )
};

export default Electonics;