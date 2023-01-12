import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Shop from "./Components/shop/Shop";
import Cart from "./Components/cart/Cart";
import Product from "./Components/product/Product";
import React, { useState } from "react";

function App() {
  const [purchases, setPurchases] = useState({
    "Apple-Watch-SE": 2,
    "Macbook-Pro": 1,
  });

  return (
    <BrowserRouter>
      <div className="relative h-screen scrollbar-thin scrollbar-track-white scrollbar-thumb-black">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/" element={<Shop />} />
          <Route path="/shop/:device" element={<Shop />} />
          <Route
            path="/product/:gadget"
            element={
              <Product purchases={purchases} setPurchases={setPurchases} />
            }
          />
          <Route
            path="/cart"
            element={<Cart purchases={purchases} setPurchases={setPurchases} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
