import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      {/*  use your component here don't make any changes in previous code  */}

            <Navbar/>
            <Homepage/>
            <Footer/>
    </div>
  );
}

export default App;