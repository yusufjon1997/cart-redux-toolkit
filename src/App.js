import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products/>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
