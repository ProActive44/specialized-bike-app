import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import { Login } from "../Pages/Accountpage/LoginPage";
import ProductPage from "../Pages/Productpage/ProductPage";
import Detailspage from "../Pages/Homepage/Detailspage";
import CartPage from "../Pages/Cartpage/Cartpage";
import Wishlist from "../Components/Wishlist";
import Protected from "./Protected";
import PaymentPage from "../Pages/Productpage/PaymentPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/productPage" element={<ProductPage />} />
      <Route path="/productPage/details/:id" element={<Detailspage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route
        path="/payment"
        element={
          <Protected>
            <PaymentPage />
          </Protected>
        }
      />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
};

export default AllRoutes;
