import React from 'react';
import Navbar from './components/Navbar';
import {  Routes , Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Products/>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;
