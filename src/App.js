import './App.css';
import { Signup } from './Pages/Accountpage/Signup';
import { Login } from './Pages/Accountpage/Login';

function App() {
  return (
    <div className="App">
      {/*  use your component here don't make any changes in previous code  */}
      <Login />
      <Signup />
    </div>
  );
}

export default App;