import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';



function App() {
  return (
    <div className="App">
      {/*  use your component here don't make any changes in previous code  */}

      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;