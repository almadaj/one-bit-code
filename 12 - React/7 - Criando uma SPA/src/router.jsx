import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import { loadProduct } from "./loaders/products.js";
import ProductBoundary from "./error-boundaries/ProductBoundary";

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
        loader: loadProduct,
        errorElement: <ProductBoundary />,
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
