import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import { Login } from "../Pages/Accountpage/LoginPage";
import { Signup } from "../Pages/Accountpage/SignupPage";
import ProductPage from "../Pages/Productpage/ProductPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/productPage" element={<ProductPage/>}/>
    </Routes>
  );
};

export default AllRoutes;
