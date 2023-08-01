import axios from 'axios';

import { toast } from 'react-hot-toast';

 export const addcartfunc = (productPostInfo,refetch) => {

    


    axios.post(`https://shopwish-surver.vercel.app/addcart`, productPostInfo)
    .then(data => {
        refetch()
        data.data && toast.success('product add successfully')
    })
    .catch(err => {
        toast.error(err.message)
    })


}



