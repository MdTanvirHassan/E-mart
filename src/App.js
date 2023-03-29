import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Product from './components/Product';
import About from './components/About';

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

function HomePage() {
  return (
    <div>
      <Home />
      <Products />
    </div>
  );
}

export default App;
