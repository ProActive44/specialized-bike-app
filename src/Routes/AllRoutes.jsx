import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import { Login } from "../Pages/Accountpage/LoginPage";
import { Signup } from "../Pages/Accountpage/SignupPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signupsuccess" element={<SignupSuccess />} />
      <Route path="/productPage" element={<ProductPage />} />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
};

export default AllRoutes;
