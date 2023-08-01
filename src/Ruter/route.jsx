import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SighinUp from "../Component/SighinUp";
import SiginIn from "../Component/SiginIn";
import Shop from "../Pages/Home/Shop/Shop";
import About from "../Pages/About/About";
import Contucts from "../Pages/Contuct/Contucts";

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
        element: <Shop></Shop>,

        children: [
          {
            path: ':category',
            element: <Shop></Shop>
          }
        ]
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