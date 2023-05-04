import logo from './logo.svg';
import './App.css';
import Navbar from './components/header';
import Gridwall from './components/gridwall';
import Cart from './components/cart';
import { useSelector } from 'react-redux';
function App() {
  const showCart = useSelector((state)=>state.reducer2.isVisible)
  return (
    <div className="App">
      <Navbar></Navbar>
      
      {showCart?<Cart></Cart>:<Gridwall></Gridwall>}
      
    </div>
  );
}

export default App;
