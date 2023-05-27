import Home from "../pages";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";

const routerDB = [
  {
    path: "/",
    name: "home",
    element: <Home />,
  },
  {
    path: "/cart",
    name: "cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    name: "checkout",
    element: <Checkout />,
  },
];

export default routerDB;
