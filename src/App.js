import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';


function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route exact path='/' component={<Home />} />
        <Route  path='/products' component={<Products />} />
      </Routes>
      <Home/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
