import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Cart from "./Components/cart/Cart"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes> 
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
