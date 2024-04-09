import React from "react";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignupPage from "./pages/SignupPage";

import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: (
      <div>
        <LoginPage />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <SignupPage />
      </div>
    ),
  },
  {
    path: "/cart",
    element: (
      <div>
        <CartPage />
      </div>
    ),
  },
  {
    path: "/checkout",
    element: (
      <div>
        <Checkout />
      </div>
    ),
  },
  {
    path: "/product-detail",
    element: (
      <div>
        <ProductDetailPage />
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Home /> */}
    </div>
  );
}

export default App;
