import { useContext, useEffect, useState } from "react";
import CatogoryItem from "../../../Component/CatogoryItem";
import { FaCartPlus, FaEye, FaHeart, FaStar } from "react-icons/fa";
import { Pagination } from "@mui/material";
import { useDataApi } from "../../../Api/useDataApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SearchContext } from "../../../Provider/SearchProvider";
import CustomModal from "../../../Component/Modal";
import Loader from "../../../Component/Loader";
import UseAddTocart from "../../../Api/UseAddTocart";
import { AuthContext } from "../../../Provider/AuthProvider";
import { addcartfunc } from "../../../Reusable/addcartfunc";
import Swal from "sweetalert2";
import addwishlist from "../../../Reusable/addwishlist";
import UseGetWishlist from "../../../Api/UseGetWishlist";



const Shop = () => {
    const [data, isLoading] = useDataApi();
    const [showModal, setShowModal] = useState(false);
    const [short, setShort] = useState('');
    const [, refetch] = UseAddTocart();
    const [wishlistdata, ref]= UseGetWishlist(); 
   
    const navigate = useNavigate();
    const location = useLocation();
    const {user} = useContext(AuthContext)
    
    


    
// modal
    useEffect(() => {
        setShowModal(true);
    }, []);


   

    const handlecloseModal = () => {
        setShowModal(false)
    }

    const [page, setPage] = useState(1)
    const itemPerPage = 6;
    const { category } = useParams();
    const { searchQuiry } = useContext(SearchContext);

    const handleChange = (e, p) => {
        setPage(p)
    }

    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    const filterProducts = category ?
    data.filter(product => product.category == category)
        : data;



    const filteredProducts = filterProducts.filter(product => product.category.toLowerCase().includes(searchQuiry.toLowerCase()))



    if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center"><Loader></Loader></div>;
    }


    const handleShortChange = (option) => {
        setShort(option)
    }


    const shortProducts = (alldata) => {
        switch (short) {
            case 'High to Low':
                return alldata.slice().sort((a, b) => a.price - b.price);
            case 'Low To High':
                return alldata.slice().sort((a, b) => b.price - a.price);
            case 'Top Rating':
                return alldata.slice().sort((a, b) => a.ratings - b.ratings);
            default:
                return alldata;
        }
    }

    const dataa = shortProducts(filterProducts);
    const displayProducts = dataa.slice(startIndex, endIndex);






   

    const handleAddtoCart = (product) => {
        if(user){
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




const handleAddtoWishList = (product)=>{

    if(user){
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

    const productInfo ={
        ...productsDetails,
        producId,
        pharsedBy: user?.email
    }

  addwishlist(productInfo,ref)


    }
    else{
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
        <div >

            <div className="container">
                <div className=" d-flex w-100 gap-5">
                    <div className="w-25">
                        <CatogoryItem></CatogoryItem>
                    </div>

                    <div className="w-75 row">
                        < div className="dropdown ml-auto">
                            <a style={{ background: '#fd7e14' }}
                                className="btn btn-secondary dropdown-toggle border-0  px-5" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Short By-
                            </a>

                            <ul className="dropdown-menu px-2" aria-labelledby="dropdownMenuLink">

                                <li><a onClick={() => handleShortChange("High to Low")}
                                    className="dropdown-item" href="#">Price:high to Low</a></li>
                                <li><a onClick={() => handleShortChange("Low To High")}
                                    className="dropdown-item" href="#">Price:high to Low</a></li>
                                <li><a onClick={() => handleShortChange("Top Rating")}
                                    className="dropdown-item" href="#">Top Rating</a></li>
                            </ul>
                        </div>
                        {
                            displayProducts.map(product => <>
                                <div className="product-grid gap-2 col-md-2 col-1  my-3 mx-2 col-lg-3 m-2 shadow">
                                    <div className=" ">
                                        <div className="product-image">
                                            <a href="#" className="image">
                                                <img className="pic-1" src={product?.img} />
                                            </a>
                                            <ul className="product-links">
                                                <li><button onClick={()=>handleAddtoWishList(product)} href="#" data-tip="Add to Wishlist"><FaHeart></FaHeart></button></li>
                                                <li><button href="#" data-tip="Quick View"><FaEye></FaEye></button></li>
                                                <li><button onClick={()=>handleAddtoCart(product)} href="" data-tip="Add to Cart"><FaCartPlus></FaCartPlus></button></li>
                                            </ul>
                                            <div className="price">${product.price}</div>
                                        </div>
                                        <div className="product-content py-2">
                                            <h3 className="fs-5 my-2 fw-semibold">{product?.name}</h3>
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

                        }

                        <div className="w-50 mx-auto my-4 text-center">
                            {displayProducts.length > 0 ? (
                                <Pagination
                                    count={Math.ceil(filteredProducts.length / itemPerPage)}
                                    variant="outlined"
                                    color="primary"
                                    onChange={handleChange}
                                    shape="rounded"
                                />
                            ) : <><p className="fs-3 fw-semibold my-5">Opps! Have No Products in this catogory!!!!!!!!</p></>}
                        </div>
                    </div>



                </div>

            </div>
            {
                showModal && <CustomModal CloseModal={handlecloseModal} ></CustomModal>
            }
        </div>

    );
};

export default Shop;