import axios from "axios";
import { toast } from "react-hot-toast";



const addwishlist = (productInfo,ref) => {
console.log(productInfo,'wi');
    axios.post('http://localhost:5000/wish-list', productInfo)
       .then(data => {
            if (data.data.insertedId) {
                ref()
                toast.success('this products added your wishlist')
            }
        }) .catch(err => {
            toast.error(err.message)
        })
};

export default addwishlist;