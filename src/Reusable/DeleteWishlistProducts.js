import axios from "axios";
import { toast } from "react-hot-toast";

const DeleteWishlistProducts = (id,ref) => {



    axios.delete(`https://shopwish-surver-shammi-riya.vercel.app/singlepructsWislist/${id}`, {
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