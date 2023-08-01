import { FaCartPlus, FaEye, FaHeart, FaStar } from "react-icons/fa";
import { useDataApi } from "../../../Api/useDataApi";

import AliceCarousel from "react-alice-carousel";
import Button from "../../../Component/Button";
import Loader from "../../../Component/Loader";
import { addcartfunc } from "../../../Reusable/addcartfunc";
import UseAddTocart from "../../../Api/UseAddTocart";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Man = () => {
    const [data, isLoading] = useDataApi();
    const [, refetch] = UseAddTocart();
  const {user} = useContext(AuthContext)

    if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center"><Loader></Loader></div>;
    }
    const menData = data.filter(singledata=>singledata.category=="Men's Pants")

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };





    const handleAddtoCart = (product) => {
        const producId = product._id;
        delete product._id;
        const products = {
            _id: product._id,
            category: product?.category,
            name: product.name,
            img: product.img,
            shipping: product?.shipping,
            ratingsCount: product?.ratingsCount,
            stock: product.stock,
            quantity: product?.quantity + 1
        }

        const productPostInfo = {
            ...products,

            producId,
            pharsedBy: user.email
        }


        addcartfunc(productPostInfo,refetch)

    }









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
                        <li><button onClick={()=>handleAddtoCart(product)} data-tip="Add to Cart"><FaCartPlus></FaCartPlus></button></li>
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
    </>)

    return (
        <div className="container my-5 py-3">
            
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