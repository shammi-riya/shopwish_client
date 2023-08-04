import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SighinUp from "../Component/SighinUp";
import SiginIn from "../Component/SiginIn";
import Shop from "../Pages/Home/Shop/Shop";
import About from "../Pages/About/About";
import Contucts from "../Pages/Contuct/Contucts";
import Shopcart from "../Pages/Cart/Shopcart";
import Privetroute from "./Privetroute";

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
        path: "/contuct",
        element: <Contucts/>,
      },

      {
        path: "/shop",
        element: <Privetroute><Shop></Shop></Privetroute>,

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