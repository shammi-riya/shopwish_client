import axios from "axios";
import { toast } from "react-hot-toast";


const DeleteProducts = (id,refetch) => {
console.log(id,'del');
    axios.delete(`http://localhost:5000/singlepructs/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.data.deletedCount > 0) {
          refetch()
          toast.success('deleted successsfully')
        }
      })
  }
    


export default DeleteProducts;