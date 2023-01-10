import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./Components/Nav"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
