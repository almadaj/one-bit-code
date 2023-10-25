import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

export default router;
