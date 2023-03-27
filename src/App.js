import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Home/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
