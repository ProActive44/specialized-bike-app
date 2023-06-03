import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import { Login } from "../Pages/Accountpage/LoginPage";
import ProductPage from "../Pages/Productpage/ProductPage";
import Detailspage from "../Pages/Homepage/Detailspage";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/productPage" element={<ProductPage />} />
      <Route path="/productPage/details/:id" element={<Detailspage />} />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
};

export default AllRoutes;
