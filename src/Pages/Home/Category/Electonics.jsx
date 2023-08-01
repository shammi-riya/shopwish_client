import { FaCartPlus, FaEye, FaHeart, FaStar } from "react-icons/fa";
import { useDataApi } from "../../../Api/useDataApi";

import AliceCarousel from "react-alice-carousel";
import Button from "../../../Component/Button";



const Electonics = () => {
    const [data, loading ]= useDataApi();

    const menData = data.filter(singledata=>singledata.category=="Earphones")

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };


    const productsElemets = menData.map(product => <>
        <div  className="product-grid gap-3 m-2 d-flex shadow p-2 ">
            <div className=" ">

                <div className="product-image">
                    <a href="#" className="image">
                        <img className="pic-1" src={product?.img} />
                    </a>
                    <ul className="product-links">
                        <li><a href="#" data-tip="Add to Wishlist"><FaHeart></FaHeart></a></li>
                        <li><a href="#" data-tip="Quick View"><FaEye></FaEye></a></li>
                        <li><a href="" data-tip="Add to Cart"><FaCartPlus></FaCartPlus></a></li>
                    </ul>
                    <div className="price">${product.price}</div>
                </div>
                <div className="product-content py-2">
                    <h3 className="fs-5 my-2 fw-semibold">{product?.name.slice(0,20)}</h3>
                    <ul className="rating">
                        <li className="fs-4 "><FaStar></FaStar></li>
                        <li className="fs-4 "><FaStar></FaStar></li>
                        <li className="fs-4 "><FaStar></FaStar></li>
                        <li className="fs-4  "><FaStar></FaStar></li>
                        <li className="fs-4  "><FaStar></FaStar></li>
                    </ul>
                </div>
            </div>
        </div>
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