import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


 const UseGetWishlist = () => {
    const { user } = useContext(AuthContext);

    const { data: wishlistdata, refetch: ref, error } = useQuery({
        queryKey: ["my-wishlist", user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(`https://shopwish-surver-shammi-riya.vercel.app/my-wishlist?email=${user?.email}`);
                return res.json();
            } catch (error) {
                console.error("Error fetching wishlist data:", error);
                throw error;
            }
        }
    });

    return [wishlistdata || [], ref, error];
};

export default UseGetWishlist;