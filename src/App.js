import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import ProductPage from './Pages/Productpage/ProductPage';
import AllRoutes from './Routes/AllRoutes';



function App() {
  return (
    <div className="App">
      {/*  use your component here don't make any changes in previous code  */}

      {/* <Navbar/>
      <AllRoutes/>
      <Footer/> */}
      <ProductPage/>
      </div>
  );
}

export default App;