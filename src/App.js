import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Shop from './Components/shop/Shop';
import Cart from "./Components/cart/Cart"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes> 
        <Route path='/' element={<Home />}/>
        <Route path='/shop/' element={<Shop />}/>
        <Route path='/shop/:device' element={<Shop />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
