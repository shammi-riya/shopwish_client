import { useLocation, useNavigate } from "react-router-dom";
import UseAddTocart from "../Api/UseAddTocart";
import UseGetWishlist from "../Api/UseGetWishlist";
import { useContext } from "react";
import { FaCartPlus, FaEye, FaHeart, FaStar } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import addwishlist from "../Reusable/addwishlist";
import { addcartfunc } from "../Reusable/addcartfunc";

const ProductsCard = ({product}) => {
    const [, refetch] = UseAddTocart();
   
    const [, ref] = UseGetWishlist()
    const navigate = useNavigate();
    const location = useLocation()
    const { user } = useContext(AuthContext)

    const handleAddtoCart = (product) => {
        if (user) {
            const producId = product._id;
            delete product._id;
            const products = {
                _id: product._id,
                category: product?.category,
                name: product.name,
                img: product.img,
                price: product.price,
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


            addcartfunc(productPostInfo, refetch)

        } else {
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

                    navigate("/sighinin", { state: { from: location } })

                }
            })
        }
    }

    const handleAddtoWishList = (product) => {

        if (user) {
            const producId = product._id;
            delete product._id
            const productsDetails = {
                _id: product._id,
                category: product?.category,
                name: product.name,
                img: product.img,
                price: product.price,
                shipping: product?.shipping,
                ratingsCount: product?.ratingsCount,
                stock: product.stock,
                quantity: product.quantity+1
            }

            const productInfo = {
                ...productsDetails,
                producId,
                pharsedBy: user?.email
            }

            addwishlist(productInfo, ref)


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
    return (
        <div className="product-grid gap-3 m-2 d-flex shadow p-2 ">
            <div className=" ">

                <div className="product-image">
                    <a href="#" className="image">
                        <img className="pic-1" src={product?.img} />
                    </a>
                    <ul className="product-links">
                        <li><button onClick={() => handleAddtoWishList(product)} data-tip="Add to Wishlist"><FaHeart></FaHeart></button></li>
                        <li><button data-tip="Quick View"><FaEye></FaEye></button></li>
                        <li><button onClick={() => handleAddtoCart(product)} href="" data-tip="Add to Cart"><FaCartPlus></FaCartPlus></button></li>
                    </ul>
                    <div className="price">${product.price}</div>
                </div>
                <div className="product-content py-2">
                    <h3 className="fs-5 my-2 fw-semibold">{product?.name.slice(0, 18)}</h3>
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
    );
};

export default ProductsCard;