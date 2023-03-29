import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';


function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Products/>
      
      <Footer/>
    </div>
  );
}

export default App;
