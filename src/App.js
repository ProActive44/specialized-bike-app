import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <div className="Appdiv">
        <Navbar />
        <AllRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
