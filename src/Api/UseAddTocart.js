import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UseAddTocart = () => {
    const { user } = useContext(AuthContext);
  
    const { data, refetch } = useQuery({
        queryKey: ['my-cart', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://shopwish-surver.vercel.app/my-cart?email=${user?.email}`);
            return response.json();
        },
    });


    return [data,refetch];



    
    
};

export default UseAddTocart;
