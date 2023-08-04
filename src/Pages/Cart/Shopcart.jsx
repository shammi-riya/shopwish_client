import { FaTrash } from "react-icons/fa";
import UseAddTocart from "../../Api/UseAddTocart";
import axios from "axios";
import DeleteProducts from "../../Reusable/DeleteProducts";

const Shopcart = () => {
  const [data, refetch] = UseAddTocart();


  const total = data?.reduce((acc, current) => acc + (current.price * current.quantity), 0);


 

  const handleIncress = (id) => {
    axios.patch(` https://shopwish-surver-shammi-riya.vercel.app/increse-quinty/${id}`, {

      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    })
      .then(res => {
        res.data.modifiedCount && refetch()
      })
  }

  



  const handleDecress = (id) => {
    axios.patch(` https://shopwish-surver-shammi-riya.vercel.app/decres-quintity/${id}`, {

      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    })
      .then(res => {
        res.data.modifiedCount && refetch()
      })
  }


const handleDelete=(id)=>{
   DeleteProducts(id,refetch)
}




  return (
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
          {data?.map((product) => (
            <tr className="p-2" key={product._id}>

              <td className="btn btn-danger"><span onClick={()=>handleDelete(product._id)}><FaTrash></FaTrash></span></td>
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
      <p className="d-flex justify-content-end px-3 fs-3 border p-4">Tota Price =${total}</p>
    </div>
  );
};

export default Shopcart;
