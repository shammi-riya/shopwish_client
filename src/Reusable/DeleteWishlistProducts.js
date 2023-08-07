import axios from "axios";
import { toast } from "react-hot-toast";

const DeleteWishlistProducts = (id,ref) => {



    axios.delete(`http://localhost:5000/singlepructsWislist/${id}`, {
        method: "DELETE"
      })
        .then(res => {
          if (res.data.deletedCount > 0) {
            ref()
            toast.success('deleted successsfully')
          }
        })

    }


    


export default DeleteWishlistProducts;