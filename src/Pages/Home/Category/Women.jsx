import AliceCarousel from "react-alice-carousel";
import { useDataApi } from "../../../Api/useDataApi";
import { FaCartPlus, FaEye, FaHeart, FaStar } from "react-icons/fa";
import 'react-alice-carousel/lib/alice-carousel.css';
import Button from "../../../Component/Button";
import Loader from "../../../Component/Loader";
// import AddToCart from "../../../Api/addtocart";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

import { addcartfunc } from "../../../Reusable/addcartfunc";
import UseAddTocart from "../../../Api/UseAddTocart";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Women = () => {
    const { user } = useContext(AuthContext);
    const [data, isLoading] = useDataApi();
    const [, refetch] = UseAddTocart();
    const navigate = useNavigate();
    const location = useLocation()


    const handleAddtoCart = (product) => {
        if(user){
        const producId = product._id;
        delete product._id;
        const products = {
            _id: product._id,
            category: product?.category,
            name: product.name,
            price: product.price,
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

    }else{
        Swal.fire({
            title: 'if you add any cart plz login',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login'
          }).then((result) => {
            if (result.isConfirmed) {
              
               navigate("/sighinin",{state:{from:location}})
              
            }
          })
    }
}

    


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
        <div className="product-grid gap-3 m-2 d-flex shadow p-2 ">
            <div className=" ">

                <div className="product-image">
                    <a href="#" className="image">
                        <img className="pic-1" src={product?.img} />
                    </a>
                    <ul className="product-links">
                        <li><button href="#" data-tip="Add to Wishlist"><FaHeart></FaHeart></button></li>
                        <li><button href="#" data-tip="Quick View"><FaEye></FaEye></button></li>
                        <li><button onClick={() => handleAddtoCart(product)}
                            href="" data-tip="Add to Cart"><FaCartPlus></FaCartPlus></button></li>
                    </ul>
                    <div className="price">${product.price}</div>
                </div>
                <div className="product-content py-2">
                    <h3 className="fs-5 my-2 fw-semibold">{product?.name.slice(0, 20)}</h3>
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