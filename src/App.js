import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./Components/Nav"
import Home from "./Components/Home"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes> 
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
