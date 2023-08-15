import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SighinUp from "../Component/SighinUp";
import SiginIn from "../Component/SiginIn";
import Shop from "../Pages/Home/Shop/Shop";
import About from "../Pages/About/About";
import Contucts from "../Pages/Contuct/Contucts";
import Shopcart from "../Pages/Cart/Shopcart";
import Wishcart from "../Pages/Wishcart/Wishcart";
import Blog from "../Pages/Blog/Blog";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contuct",
        element: <Contucts/>,
      },

      {
        path: "/shop",
        element: <Shop></Shop>,

        children: [
          {
            path: ':category',
            element: <Shop></Shop>
          }
        ]
      },
      {
        path: "/cart",
        element: <Shopcart></Shopcart>,
      },
      {
        path: "/wishcart",
        element: <Wishcart></Wishcart>,
      },

      
    ],
  },
  {
    path: "/sighinUp",
    element: <SighinUp></SighinUp>,
  },
  {
    path: "/sighinin",
    element: <SiginIn></SiginIn>,
  },


]);
export default router;