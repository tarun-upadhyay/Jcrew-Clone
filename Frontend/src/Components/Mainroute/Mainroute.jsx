import React from "react";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Admin from "../../Pages/Admin/Admin";
import Home from "../../Pages/Admin/Pages/home/Home";
import AdminProducts from "../../Pages/Admin/Pages/Products/AdminProducts";

import Checkout from "../../Pages/Checkoutpage/Checkout";
import Homepage from "../../Pages/Homepage/Homepage";

import Signin from "../../Pages/Signin/Signin";
import Signup from "../../Pages/Signup/Signup";
import Singlepage from "../../Pages/Singlepage/Singlepage";
import ProductsPage from "../Products/ProductsPage";
import PaymentPage from "../../Pages/Paymentpage/PaymentPage";
import AddProduct from "../../Pages/Admin/Pages/Products/AddProduct";
import PrivateRoute from "../PrivateRoute";

const Mainroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>

      <Route path="/products/:name" element={<ProductsPage />}></Route>
      <Route path="/singlepage/:name/:id" element={<Singlepage />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/signup" element={<Signup />}></Route>

      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/admin/products"
        element={
          <PrivateRoute>
            <AdminProducts />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/admin/addproduct"
        element={
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        }
      ></Route>
      <Route path="*" element={<h1>Page not found</h1>}></Route>
    </Routes>
  );
};

export default Mainroute;
