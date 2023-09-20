import { FaTrash } from "react-icons/fa";
import UseGetWishlist from "../../Api/UseGetWishlist";
import DeleteWishlistProducts from "../../Reusable/DeleteWishlistProducts";
import { toast } from "react-hot-toast";


const Wishcart = () => {

    const [wishlistdata, ref, ] = UseGetWishlist()







    const handleIncress = (id) => {
        fetch(`https://shopwish-surver-shammi-riya.vercel.app/update-wish-quintity/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    ref()
                }

            })
    }
    const handleDecress = (id) => {
        fetch(`https://shopwish-surver-shammi-riya.vercel.app/update-decres-wish-quintity/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    ref()
                }
                console.log(data);
            })
    }



    const handleDelete = (id) => {
        DeleteWishlistProducts(id, ref)
    }


    const handleDeleteAll = () => {
        wishlistdata.forEach(product => {
            fetch(`https://shopwish-surver-shammi-riya.vercel.app/multiple-pructsWislist/${product._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    ref()
                    if (data.deletedCount > 0) {
                        toast('delete all products')
                    }
                    console.log(data);
                })
        });

    }





   














return (
    <div>
        <div className="container my-5">
            <table className="table table-bordered text-center">
                <thead>
                    <tr className="fs-4 p-2">

                        <th>Action</th>
                        <th>Product Name</th>
                        <th>Product Image</th>
                        <th>Product Price</th>
                        <th>Product Quantity</th>
                        <th>Total Price</th>

                    </tr>
                </thead>
                <tbody>
                    {wishlistdata?.map((product) => (
                        <tr className="p-2" key={product._id}>

                            <td className="btn btn-danger"><span onClick={() => handleDelete(product._id)}><FaTrash></FaTrash></span></td>
                            <td>{product?.name}</td>
                            <td><img style={{ height: '100px' }} src={product?.img} alt="" /></td>
                            <td>${product?.price}</td>
                            <td className="">
                                <button onClick={() => handleDecress(product._id)} className="btn btn-sm btn-danger">-</button>
                                <span className="mx-2">  {product?.quantity}</span>
                                <button onClick={() => handleIncress(product._id)} className="btn btn-sm btn-success">+</button>
                            </td>
                            <td>${product?.price * product?.quantity}</td>


                        </tr>
                    ))}

                </tbody>

            </table>

            <div className="text-end">
                <button className="btn btn-danger" onClick={() => handleDeleteAll()}>Delete All</button>
               
            </div>

        </div>
    </div>
);
};

export default Wishcart;